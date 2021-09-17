import axios from "axios";

const USER_API_URL = 'http://localhost:8081/api/user'

class UserService {

    postUser(i){
        return axios.post(USER_API_URL, i);
    }
}

export default new UserService();