const checkTokenExpiration = (token : string): boolean => {

    const tokenParts = token.split('.');
    const decodedToken = JSON.parse(atob(tokenParts[1]));
  
    // check expiration
    const currentTime = Math.floor(Date.now() / 1000); // convert to milliseconds
    const expirationTime = decodedToken.exp;
  
    const timeRemaining = expirationTime - currentTime;
  
   // console.log('Thời gian còn lại (giây):', timeRemaining);
  
    // check token expiration
    if (timeRemaining <= 0) {
    //  console.log('Token đã hết hạn');
      return true;
    } else {
   //   console.log('Token còn hạn đến', new Date(expirationTime * 1000));
      return false;
    }
}

export default checkTokenExpiration;

