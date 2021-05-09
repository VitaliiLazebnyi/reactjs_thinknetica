import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import avatar from './img/avatar.jpg';

const user = {
  email: 'some@mail.com',
  firstName: 'FName',
  lastName: 'LName',
  avatarUrl: avatar,
};

const title = {
  book: {
    title: 'hello, world',
    description: 'hello, description',
    pages: 6,
    progress: 50,
    image: 'https://www.google.com',
  },
  authors: [
    {
      fullName: 'Петренко Анатолій Миколайович',
      email: 'anastasia95@consatop.com',
      avatar: avatar,
      biography: 'Улюблений спорт: Художня гімнастика\n' +
                'Улюблений колір: синій',
    },
    {
      fullName: 'Дмитренко Bсеволод Васильович',
      email: 'brovarenko.svit@filel.space',
      avatar: avatar,
      biography: 'Улюблений спорт: Дайвінг\n' +
                'Улюблений колір: оливковий',
    },
    {
      fullName: 'Анна Анатолійович Павлюк',
      email: 'ponomar@greenpdfmanuales.xyz',
      avatar: avatar,
      biography: 'Улюблений спорт: плавання\n' +
                'Улюблений колір: оливковий',
    },
    {
      fullName: 'Анастасія Євгенійович Шевчук',
      email: 'tmirosnicenko@taikz.com',
      avatar: avatar,
      biography: 'Улюблений спорт: волейбол\n' +
                'Улюблений колір: чорний',
    },
    {
      fullName: 'Іванченко Ярослава Миколайович',
      email: 'sponomarcuk@greenpdfmanuales.xyz',
      avatar: avatar,
      biography: 'Улюблений спорт: вело\n' +
                'Улюблений колір: блакитний',
    },
  ],
  finance: {
    subscribers: 444,
    minPrice: 999,
    expectedPrice: 10000,
    collectedAmount: 100000,
    expectedAmount: 500000,
  },
};


ReactDOM.render(
    <React.StrictMode>
      <App title={title} user={user} />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
