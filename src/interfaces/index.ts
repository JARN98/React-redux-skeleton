export interface IApiFetch {
  method: string;
  url: string;
  body?: object;
  params?: string | string[];
  file?: boolean;
  formData?: FormData;
}

export interface IPublications {
  _id: string;
  title: string;
  username: string;
  content: string;
}