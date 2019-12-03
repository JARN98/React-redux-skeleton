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