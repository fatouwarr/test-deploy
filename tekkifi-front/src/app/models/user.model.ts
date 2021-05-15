export interface IUser {
  id?: any;
  userName?: string;
  password?: string;
}

export class User implements IUser {
  constructor(
    public id?: any,
    public userName?: string,
    public password?: string
  ) {
    this.id = id ? id : null;
    this.userName = userName ? userName : null;
    this.password = password ? password : null;
  }
}
