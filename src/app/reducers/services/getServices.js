import { GET_SERVICES } from '../../actions/services';

export default function getServices(state = {}, action) {
  switch (action.type) {
    case GET_SERVICES:
      return action.payload
  }
  return state;
}
