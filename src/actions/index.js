const BASE_URL = 'https://private-5fb3f-surveysmock.apiary-mock.com';

export const GET_SURVEYS_SUCCESS = 'GET_SURVEYS_SUCCESS';

export const GET_SURVEY_REQUEST = 'GET_SURVEY_REQUEST';
export const GET_SURVEY_SUCCESS = 'GET_SURVEY_SUCCESS';

export const CREATE_COMPLETIONS_SUCCESS = 'CREATE_COMPLETIONS_SUCCESS';

export const getSurveysSuccess = (payload) => ({
  type: GET_SURVEYS_SUCCESS,
  payload
});

export const getSurveyRequest = () => ({
  type: GET_SURVEY_REQUEST
});

export const getSurveySuccess = (payload) => ({
  type: GET_SURVEY_SUCCESS,
  payload
});

export const createCompletionsSuccess = (payload) => ({
  type: CREATE_COMPLETIONS_SUCCESS,
  payload
});

export const getSurveys = () => (dispatch => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/api/surveys`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(getSurveysSuccess(result.surveys));
        return resolve(result.surveys);
      })
      .catch(err => {
        alert("Something went wrong");
        return reject(err);
      });
  });
});

export const getSurvey = (surveyId) => (dispatch => {
  dispatch(getSurveyRequest());
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/api/surveys/${surveyId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(getSurveySuccess(result.survey));
        return resolve(result.survey);
      })
      .catch(err => {
        alert("Something went wrong");
        return reject(err);
      });
  });
});

export const createCompletions = (surveyId, completion) => (dispatch => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/api/surveys/${surveyId}/completions`,
      {
        method: 'POST',
        body: JSON.stringify(completion)
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(createCompletionsSuccess(result.survey));
        return resolve(result.survey);
      })
      .catch(err => {
        alert("Something went wrong");
        return reject(err);
      });
  });
});

