import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// import * as actions from './actions';



const store = createStore(reducers);
// dispatch(action) : 리듀서가 어떤 변화를 알아채서 갈아끼움
// getState() :현태 상태 반환
// subscrive(listener) : 상태를 바뀔때마다 실행됨

// console.log(store.getState());
//const unsubscribd = store.subscribe(()=>console.log(store.getState()));
//store.dispatch(actions.increment())
//store.dispatch(actions.increment())
//store.dispatch(actions.decrement())
//store.dispatch(actions.setColor([200,200,200]))

//unsubscribe();
//store.dispatch(actions.setColor([210,210,210]))

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
