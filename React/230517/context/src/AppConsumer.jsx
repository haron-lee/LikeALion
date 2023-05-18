import { React, createContext } from 'react';
import HelloLicat from './HelloLicat';

const UserInfo = createContext();

const AppConsumer = () => {
  return (
    // 직접 사용이 아니라 다른 컴포넌트에 제공해야할 때는 provider를 사용
    <UserInfo.Provider value={{ name: 'gary', id: 'garyIsFree' }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

export { UserInfo, AppConsumer };
