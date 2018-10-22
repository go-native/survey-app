import { GET_SURVEYS_SUCCESS, GET_SURVEY_REQUEST, GET_SURVEY_SUCCESS } from "../actions";

const initialState = {
  allSurveys: [],
  selectedSurvey: null
}


export const surveysReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_SURVEYS_SUCCESS : 
      return {...state, allSurveys: action.payload};
    case GET_SURVEY_REQUEST : 
      return {...state, selectedSurvey: null};
    case GET_SURVEY_SUCCESS : 
      return {...state, selectedSurvey: action.payload};
    default :
      return state;
  }
}