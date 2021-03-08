import React from 'react'
import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux';
import AComp from './components/AComp';

function App() {
  return (
    <Provider store={store}>
        <div >
    <AComp/>
       
        </div>
        </Provider>
  );
}

export default App;
