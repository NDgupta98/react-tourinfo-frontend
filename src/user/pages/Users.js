import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Niraj Gupta',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaxoxdaEr4NOxRUPpqQ9Shb7mOcHn9zzR_Q&usqp=CAU',
      places: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
