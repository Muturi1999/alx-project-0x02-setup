import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <h2 className="text-lg font-bold text-blue-700">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;

