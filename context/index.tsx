import { useCallback, useContext, useState } from 'react';
import { InputData, UserDataType } from '../types';
import { UserContext } from './UserContext';

const InitialState: UserDataType = {
  avatar_url: '',
  bio: null,
  blog: '',
  company: null,
  created_at: '',
  email: null,
  followers: 0,
  following: 0,
  html_url: '',
  location: '',
  login: '',
  name: '',
  organizations_url: '',
  public_repos: 0,
  twitter_username: null,
  url: '',
};

export const UserProvider: React.FC = ({ children }) => {
  const [userInvalid, setUserInvalid] = useState(false);
  const [userData, setUserData] = useState<UserDataType>(InitialState);

  const onSubmit = useCallback(
    async (formData: InputData, e) => {
      const { userName } = formData;

      if (!userName) return;

      e.target.reset();

      const url = `https://api.github.com/users/${userName}`;
      const response = await fetch(url);

      if (!response.ok) {
        // set users data invalid
        setUserInvalid(true);
        // reset user data to initial state
        setUserData(InitialState);
        return;
      }
      setUserInvalid(false);

      const data: UserDataType = await response.json();

      setUserData(data);
    },

    [],
  );

  const values = {
    userData,
    userInvalid,
    onSubmit,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
