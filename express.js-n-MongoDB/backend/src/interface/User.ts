export interface User {
  username: String;
  roles: {
    User: Number;
    Editor: Number;
    Admin: Number;
  };
  password: String;
  refreshToken: String;
}
