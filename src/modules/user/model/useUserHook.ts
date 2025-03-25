import { useState } from 'react';
import { UserCardType } from '@/modules/user/types/user';
import { createUser } from '@/modules/user/api/useUserAPI';

const useUserHook = (defaultUser: UserCardType) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createUser(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const [user, setUser] = useState<UserCardType>(defaultUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return { handleSubmit, handleChange, user };
};

export default useUserHook;
