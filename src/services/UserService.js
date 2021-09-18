import axios from "axios";

const USER_API_URL = 'http://localhost:5000/api/user'
const USERS_API_URL = 'http://localhost:5000/api/users'

class UserService {

    postUser(i){
        return axios.post(USER_API_URL, i);
    }

    getUsers(){
        return axios.get(USERS_API_URL);
    }
}

export default new UserService();