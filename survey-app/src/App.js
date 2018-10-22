import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { store } from './store';
import SurveyListContainer from './containers/SurveyListContainer';
import SurveyDetailsContainer from './containers/SurveyDetailsContainer';
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
          <Switch>
            <Route path="/" exact={true} component={SurveyListContainer} />
            <Route path="/:survey_id"  component={SurveyDetailsContainer} />
          </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
