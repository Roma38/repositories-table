interface Owner {
  avatar_url: string;
  login: string;
}

export interface Repository {
  id: number;
  owner: Owner;
  name: string;
  html_url: string;
  description: string;

}