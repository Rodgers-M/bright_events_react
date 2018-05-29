/* eslint no-param-reassign: ["error", { "props": false }] */
import axios from 'axios';

export const instance = axios.create({
    timeout : 10000,
    headers : {
        Accept : 'application/json',
        ContentType : 'application/json'
    }
});


instance.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem('brighteventsJWT');
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

export const api = {
    user : {
        login : (credentials)=> instance.post('/auth/login', credentials)
            .then(res => res.data.user),
        signup : (credentials)=> instance.post('/auth/register', credentials)
            .then(res => res.data)
    },
    events : {
        create: (details) => instance.post('/events/create', details)
            .then(response => response.data),
        fetchAll: () => instance.get('/events/all')
            .then(respnse => respnse.data),
        fetchMyEvents: () => instance.get('/events/myevents') 
            .then(response => response.data),
        updateEvent: (event, eventId) => instance.put(`/events/${eventId}`, event)
            .then(response => response.data),
        deleteEvent: (eventId)  => instance.delete(`/events/${eventId}`)
            .then(response => response.data.message),
        rsvp: (eventId) => instance.post(`/events/${eventId}/rsvp`)
            .then(response => response.data)
    }
};

