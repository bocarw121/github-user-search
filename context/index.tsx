import { useCallback, useContext, useState } from 'react';
import { InputData, UserDataType } from '../types';
import { UserContext } from './UserContext';

const InitialState: UserDataType = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  bio: null,
  blog: 'https://github.blog',
  company: '@github',
  created_at: '2011-01-25T18:44:36Z',
  email: null,
  followers: 4912,
  following: 9,
  html_url: 'https://github.com/octocat',
  location: 'San Francisco',
  login: 'octocat',
  name: 'The Octocat',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  public_repos: 8,
  twitter_username: null,
  url: 'https://api.github.com/users/octocat/orgs',
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
