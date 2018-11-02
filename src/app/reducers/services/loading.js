import { LOADING_SERVICES } from '../../actions/services';

export default function loading(state = true, action) {
  switch (action.type) {
    case LOADING_SERVICES:
      return action.payload;
  }
  return state;
}
