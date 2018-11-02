import axios from 'axios';

// Exporting our actions
export const LOADING_SERVICES = 'LOADING_SERVICES';
export const GET_SERVICES = 'GET_SERVICES';

// An action to check if the services are loaded accepts true or false
export function loading(loading) {
  return {
    type: LOADING_SERVICES,
    payload: loading,
  };
}

export function fetchServices(data) {
  return {
    type: GET_SERVICES,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function fetch(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loading(false));
      dispatch(fetchServices(response.data.services));
    });
  };
}
