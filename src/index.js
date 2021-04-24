import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let title = {
    book: {
        title: 'hello, world',
        description: 'hello, description',
        pages: 6,
        progress: 50,
        image: 'https://www.google.com',
    },
    // author: {
    //     full_name: 'fname lname',
    //     email: 'author@mail.com',
    //     avatar: 'https://www.google.com',
    //     biography: 'bla bla bla'
    // },
    authors: [
        {
            full_name: 'fname1 lname1',
            email: 'author@mail.com',
            avatar: 'https://www.google.com',
            biography: 'bla bla bla'
        },
        {
            full_name: 'fname2 lname2',
            email: 'author@mail.com',
            avatar: 'https://www.google.com',
            biography: 'bla bla bla'
        },
        {
            full_name: 'fname3 lname3',
            email: 'author@mail.com',
            avatar: 'https://www.google.com',
            biography: 'bla bla bla'
        }
    ],
    finance: {
        min_price: 999,
        expected_price: 10000,
        collected_amount: 100000,
        expected_amount: 500000
    }
}


ReactDOM.render(
  <React.StrictMode>
    <App title={title} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
