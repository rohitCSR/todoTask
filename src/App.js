import React from 'react';
import './App.css';
import ListTable from './components/ListTable';
import 'materialize-css/dist/css/materialize.min.css';
import store from './store';
import { Provider } from 'react-redux';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='content'>
          <ListTable />
          <UserDetails />
        </div>
      </div>
    </Provider>
  );
}

export default App;
