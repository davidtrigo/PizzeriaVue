import userService from './userservice'
export default async function guard(role){
    if (!role){
        return true; //sino ha puesto meta es true , la ruta es libre
    }
    const user = await userService.get();
    return userService.checkRole(user, role)
}