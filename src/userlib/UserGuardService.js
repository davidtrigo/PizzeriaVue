import UserService from '@/userlib/UserService' ;

export default async function guard (role){

    if(!role){
        return true; //sino ha puesto meta es true , la ruta es libre
    }
    const user = await UserService.get();
    return UserService.checkRole(user,role);
}