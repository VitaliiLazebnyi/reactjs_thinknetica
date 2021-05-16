import React, {Component} from 'react';
import AuthContext from './../index';
import Avatar from './Avatar';

class UserInfo extends Component {
  render() {
    console.log(this.context);
    const fullName = this.context.firstName + ' ' + this.context.lastName;

    return <div className='userInfo'>
      <Avatar url={this.context.avatar} alt={fullName} />
      <div>Email: {this.context.email}</div>
      <div>Firstname: {this.context.firstName}</div>
      <div>Lastname: {this.context.lastName}</div>
    </div>;
  }
}

UserInfo.contextType = AuthContext;
export default UserInfo;
