interface Owner {
  avatar_url: string;
  login: string;
}

export interface Repository {
  id: string;
  owner: Owner;
  name: string;
  html_url: string;
  description: string;

}