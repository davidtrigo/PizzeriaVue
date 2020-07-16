import UserService from './UserService'
import Vue  from 'vue';

const HIDDEN = "hidden"
function toogleHidden(el, user, role){

    if (!UserService.checkRole(user,role)) {
        el.classList.add(HIDDEN);
      }
      else {
        el.classList.remove(HIDDEN);
      }
}

export const AuthDirective ={
    bind(el, binding){
       el.subscription = UserService.userObservable.subscribe((user)=>toogleHidden(el,user,binding.value))
       UserService.init();
    }, 
    unbind(el){
        el.subscription && el.subscription.unsubscribe()
    }
}

Vue.directive( 'auth',AuthDirective);

