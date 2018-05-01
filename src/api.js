import axios from 'axios';

export default{
    user : {
        login : (credentials)=> axios.post('/auth/login', credentials)
        .then(res => res.data.user),
        signup : (credentials)=> axios.post('/auth/register', credentials)
        .then(res => res.data)
    }
}
