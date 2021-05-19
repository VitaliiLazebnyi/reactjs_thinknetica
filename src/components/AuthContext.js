import React from 'react';
import avatar from './../img/avatar.jpg';

const user = {
  email: 'some@mail.com',
  firstName: 'FName',
  lastName: 'LName',
  avatar: avatar,
};

const AuthContext = React.createContext(user);

export default AuthContext;
