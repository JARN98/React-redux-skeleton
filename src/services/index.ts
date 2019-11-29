import { IApiFetch } from "../interfaces";

export const apiFetch = ({ method, url, body, params, file = false, formData }: IApiFetch): Promise<any> => {
  const headers = {} as any;

  if (localStorage.getItem('jwtToken')) headers.Authorization = `Bearer ${localStorage.getItem('jwtToken')}`;
  if (!file) headers['Content-type'] = 'application/json';

  return fetch(
    url, {
    method,
    headers: new Headers(headers),
    body: !file ? JSON.stringify(body) : formData
  })
    .then(v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
      } else {
        return v.json();
      }
    })
    .then(r => {
      if (r.error) {
        return Promise.reject(r.error);
      }
      return r;
    });
};