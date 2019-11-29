const urlBase = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/`;

export const urlAuthToken = `${urlBase}auth/login`;
export const urlUsers = `${urlBase}users`;