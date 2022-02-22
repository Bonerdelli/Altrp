import {GET_MODEL_ID, MODELS_TOGGLE, GET_MODEL_RELATION_ID} from "./actions";

const initialState = {
  toggleModels: false,
  modelID: null,
  modelRelationID: null,
  standardModels: [{ name: 'role_user', label: 'Role User' }, { name: 'media', label: 'Media' }]
}

export const modelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODELS_TOGGLE:
      return {
        ...state,
        toggleModels: action.payload
      }
    case GET_MODEL_ID:
      return {
        ...state,
        modelID: action.payload
      }
    case GET_MODEL_RELATION_ID:
      return {
        ...state,
        modelRelationID: action.payload
      }
    default:
      return state;
  }
}
