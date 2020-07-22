import axios from 'axios'

const URL = 'http://localhost:3000';
const patch = 'user'

class LoginService {
  async get(){
    return axios.get(`${URL}/${patch}`)
  }
  async post(data){
    return axios.post(`${URL}/${patch}`,data)
  }
}
export default new LoginService()