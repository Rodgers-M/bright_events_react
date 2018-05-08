import jwtDecode from 'jwt-decode';
 
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
