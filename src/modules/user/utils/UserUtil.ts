import { USER_DATA_NAME } from '@/modules/user/config/const';

class UserUtil {
  static getUser() {
    return localStorage.getItem(USER_DATA_NAME);
  }

  static setUser(user: any) {
    localStorage.setItem(USER_DATA_NAME, JSON.stringify(user));
  }
}

export default UserUtil;
