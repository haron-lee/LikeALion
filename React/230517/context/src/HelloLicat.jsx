import React from 'react';
import { UserInfo } from './AppConsumer';

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            {value.id}Hello{value.name}
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

export default HelloLicat;
