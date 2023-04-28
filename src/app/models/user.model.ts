export class User {
  id?: number;
  username?: string;
  password?: string;
  accessToken?: string;
  refreshToken?: string;

  constructor(user: any) {
    this.id = user.is || 0;
    this.username = user.username || '';
    this.password = user.password || '';
    this.accessToken = user.accessToken || '';
    this.refreshToken = user.refreshToken || '';
  }
}
