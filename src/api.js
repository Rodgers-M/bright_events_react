import axios from 'axios';

export default{
    user : {
        login : (credentials)=> axios.post('api/v2/auth/login', {credentials})
        .then(res => res.data.user)
    }
}
