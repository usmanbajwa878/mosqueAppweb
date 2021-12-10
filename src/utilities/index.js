

export const  checkEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export const checkSignUpCredentials = (name,email,password,confirmPassword,phoneNumber)=>{
    let message = '',error = false,type = ''
    if(name.length <3){
        message  = 'Name Should be atleast 3 characters long';
        type= 'user'
        return {message,error,type}
    }else if(!checkEmail(email)){
        message  = 'Enter correct email Address';
        type= 'email'
        return {message,error,type}
    }else if(password.length <8){
        message  = 'Password must be 8 charcters long';
        type= 'password'
        return {message,error,type}
    }else if(confirmPassword !== password){
        type= 'confirmpassword'
        message  = 'Password Donot match';
        return {message,error,type}
    }
    else if(phoneNumber.length < 6){
        type= 'phoneNumber'
        message  = 'PhoneNumber must be 8 numbers long';
        return {message,error,type}
    }else{
        return {message,error,type}
    }
    
}

export const checkSignInCredentials = (email,password) =>{
    let message = '',error = false,type = ''
    if(!checkEmail(email)){
        message  = 'Enter correct email Address';
        type= 'email'
        return {message,error,type}
    }else if(password.length <8){
        message  = 'Password must be 8 charcters long';
        type= 'password'
        return {message,error,type}
    }
    return {message,error,type}
};

