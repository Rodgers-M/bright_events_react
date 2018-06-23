/* eslint no-param-reassign: ["error", { "props": false }] */
import axios from 'axios';

export const instance = axios.create({
    //baseURL: 'http://127.0.0.1:7000/api/v2',
    baseURL: 'https://rodgerbrighteventsapi.herokuapp.com/api/v2',
    timeout : 20000,
    headers : {
        Accept : 'application/json',
        ContentType : 'application/json',
    }
});


instance.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem('brighteventsJWT');
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export const api = {
    user: {
        login : (credentials)=> instance.post('/auth/login', credentials)
            .then(res => res.data.user),
        signup: (credentials)=> instance.post('/auth/register', credentials)
            .then(res => res.data),
        submitEmail: (email)=> instance.post('/auth/gettoken', email)
            .then(res => res.data),
        confirmToken: (token)=> instance.get(`/auth/confirm/${token} `)
            .then(res => res.data),
        submitPassword : (data)=> instance.put('/auth/resetpass', data)
            .then(res => res.data.message)
    },
    events: {
        create: (details) => instance.post('/events/create', details)
            .then(response => response.data),
        fetchAll: () => instance.get('/events/all')
            .then(response => response.data),
        fetchMyEvents: () => instance.get('/events/myevents') 
            .then(response => response.data),
        updateEvent: (event, eventId) => instance.put(`/events/${eventId}`, event)
            .then(response => response.data),
        deleteEvent: (eventId)  => instance.delete(`/events/${eventId}`)
            .then(response => response.data.message),
        rsvp: (eventId) => instance.post(`/events/${eventId}/rsvp`)
            .then(response => response.data),
        deleteRsvp: (eventId) => instance.delete(`/events/${eventId}/rsvp`)
            .then(response => response.data)
    }
};

