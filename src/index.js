import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AuthContext from './components/AuthContext';

import title from './data/title.json';
// import user from './data/user.json';

ReactDOM.render(
    <React.StrictMode>
      {/* <AuthContext.Provider value={user}>*/}
      <App title={title} />
      {/* </AuthContext.Provider>*/}
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
