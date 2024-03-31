export const validateSignUnform  = (email,name, pass, cPass) =>{

    const nameError = /^[a-zA-Z ]+$/.test(name); 
    const EmailError = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passError =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

    if (!nameError) return "nameErr";
    if (!EmailError) return "mailerr";
    if (!passError) return "passerr";
    if(cPass !== pass) return "Notmatches";
    return null;
    

}
export const validateSignInform  = (email, pass) =>{


    const EmailError = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passError =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    if (!EmailError) return "mailerr";
    if (!passError) return "passerr";
    return null;
    

}