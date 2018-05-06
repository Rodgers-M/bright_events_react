import axios from 'axios';

const instance = axios.create({
    headers : {
        Accept : 'application/json',
        ContentType : 'application/json'
    }
});

instance.interceptors.request.use((config)=>{
    const access_token = localStorage.getItem('brighteventsJWT');
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
});

export default{
    user : {
        login : (credentials)=> instance.post('/auth/login', credentials)
        .then(res => res.data.user),
        signup : (credentials)=> instance.post('/auth/register', credentials)
        .then(res => res.data)
    },
    events : {
        create : (details) => instance.post('/events/create', details)
        .then(response => response.data)
    }
}
