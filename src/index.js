import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import rootReducer from "./components/redux/reducers"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import App from './App';
import setupAxiosInterceptors from './components/common/services/axiosInterceptor';

const store = createStore(rootReducer, applyMiddleware(thunk));

setupAxiosInterceptors(() => localStorage.clear());

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
