import { createContext } from 'react';
import { InputData, UserContextType } from '../types';

export const UserContext = createContext<UserContextType>({
  userData: {
    avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
    bio: null,
    blog: 'https://github.blog',
    company: null,
    created_at: '',
    email: null,
    followers: 3898,
    following: 9,
    html_url: '',
    location: 'San Francisco',
    login: '',
    name: 'The Octocat',
    organizations_url: '',
    public_repos: 8,
    twitter_username: null,
    url: '',
  },
  userInvalid: false,
  onSubmit: (data: InputData) => {
    return Promise.resolve();
  },
});
