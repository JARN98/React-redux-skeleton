import { createAction } from "redux-actions";
import CONSTANTS from "../../utils/constants";
import { apiFetch } from "../../services";
import { urlPublications } from "../../services/urls";

export const cleanPublications = createAction(CONSTANTS.ACTION_CLEAN_PUBLICATIONS, () => ({}));

export const getPublications = createAction(CONSTANTS.PUBLICATIONS_GET, () => {
  return apiFetch({ method: CONSTANTS.GET, url: urlPublications }).then(r => {
    return r;
  });
});

export const getOnePublication = createAction(CONSTANTS.PUBLICATIONS_GET_ONE, (id: string) => {
  return apiFetch({ method: CONSTANTS.GET, url: urlPublications + `/${id}` }).then(r => {
    return r;
  });
});

export const createPublication = createAction(CONSTANTS.PUBLICATIONS_POST, (body: object) => {
  return apiFetch({ method: CONSTANTS.POST, url: urlPublications, body }).then(r => {
    return r;
  });
});

export const updatePublication = createAction(CONSTANTS.PUBLICATIONS_UPDATE_ONE, (body: object, id: string) => {
  return apiFetch({ method: CONSTANTS.PUT, url: urlPublications + `/${id}`, body }).then(r => {
    return r;
  });
});