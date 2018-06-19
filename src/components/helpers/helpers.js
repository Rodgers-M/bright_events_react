import jwtDecode from 'jwt-decode';
import  Validator from 'validator';
import passwordValidator from 'password-validator';
 
export const isTokenExpired = token => {
    const currentTime = new Date() / 1000;
    if(jwtDecode(token).exp < currentTime){
        localStorage.removeItem('brighteventsJWT');
        return true;
    }
    return false;
};

export const getUsername = token => {
    if(token){
        return jwtDecode(token).username;
    }
    return null;
};

export const formatDate = eventDate => {
    const date = new Date(eventDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return [year, month, day].join('-');
};

export const validateEventData=(data) => {
    const errors = {};
    if(Validator.isEmpty(data.name)) errors.name = 'name can\'t be blank';
    if(Validator.isEmpty(data.description)) errors.description = 'description can\'t be blank';
    if(Validator.isEmpty(data.category)) errors.category = 'category can\'t be blank';
    if(Validator.isEmpty(data.location)) errors.location = 'location can\'t be blank';
    return errors;
};

export const validpassword = new passwordValidator();
validpassword.is().min(6)
    .is().max(20)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces();
