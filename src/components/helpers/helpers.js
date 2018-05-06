import jwtDecode from 'jwt-decode';
 
export const isTokenExpired = token => {
    let currentTime = new Date() / 1000;
    if(jwtDecode(token).exp < currentTime){
        localStorage.removeItem('brighteventsJWT');
        return true;
    }else{
        return false;
    }
}

export const getUsername = token => {
    if(token){
        return jwtDecode(token).username;
    }
}
