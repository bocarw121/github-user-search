export type UserDataType = {
  avatar_url: string;
  bio: null | string;
  blog: string;
  company: null | string;
  created_at: string;
  email: null | string;
  followers: number;
  following: number;
  html_url: string;
  location: string;
  login: string;
  name: string;
  organizations_url: string;
  public_repos: number;
  twitter_username: null | string;
  url: string;
};

export type UserContextType = {
  userData: UserDataType;
  userInvalid: boolean;
  onSubmit: (data: InputData, e: any) => Promise<void>;
};

export type InputData = {
  userName: string;
};
