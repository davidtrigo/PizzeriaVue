import Vue from 'vue'
import userService from './userservice'
const HIDDEN = 'hidden';

function toogleUser(el, user, binding) {
    if (!userService.checkRole(user, binding.value)) {
        el.classList.add(HIDDEN);
    }
    else {
        el.classList.remove(HIDDEN);
    }
}

async function bind(el, binding) {
    el.suscription = userService.userObservable.subscribe((user) => {
        toogleUser(el, user, binding);
    })
    await userService.init();
}
function unbind(el) {
    el.suscription && el.suscription.unsubscribe();
    el.suscription = null;
}


export const Auth = {
    bind: bind,
    unbind: unbind

}
Vue.directive('auth', Auth)