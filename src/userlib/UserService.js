import { get, set, del } from "idb-keyval";
import { Subject } from 'rxjs';

const key = 'user'

class UserService {
    constructor() { 
    this.userObservable = new Subject();
  }
  async init(){
    const user = await this.get();
    this.userObservable.next(user);
  }
  
  async add(user){
    await set(key, user)
    this.userObservable.next(user);
  }
  async get() {
    return await get(key);
    }
  async remove(){
    await del(key);
    this.userObservable.next(undefined);
  }
  checkRole(user, role){
    if (user && user.role === role) {
      return true;
    }
    return false;
  }
}
export default new UserService();