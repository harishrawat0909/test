import React, {Component} from 'react';
import './App.css';
import Table from './components/Table';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

function App() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Table />
        </div>
      </Provider >
    );
}

export default App;
