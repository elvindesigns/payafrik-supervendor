import { toast } from "react-toastify";

export const changeTitle = (title) => {
    window.document.title = title
}

export const getUser = () => {
    let user = JSON.parse(localStorage.getItem("user_detail"));
    return user;
};

export const getLoggedInRole = () => {
    let userRole = localStorage.getItem("user_role");
    // let userRole = process.env.REACT_APP_ROLE;
    return userRole;
}
  

export const checkIfLogin = async () => {
    let user = getUser();
    
    // if (user !== null) {
    //   let isUser = await getUserProfile();
      if(user){
        return true
      }else{
        return false
      }
    // } else {
    //   return false;
    // }
  };

export const clearStorage = () =>{
    localStorage.clear()
}

export const fixDropdownName = (name) => {
    let fixedString = ""
    fixedString = name
    fixedString = fixedString.replace("_"," ")
    return fixedString.toUpperCase()
}
export const reverseFixDropdownName = (name) => {
    let fixedString = ""
    fixedString = name
    fixedString = fixedString.replace(" ","_")
    return fixedString.toLowerCase()
}

export const errorToast = (errorMessage) => {
    toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}
export const successToast = (successMessage) => {
    toast.error(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export const convertFrom24To12Format = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? 'AM' : 'PM';
    const hours = +sHours % 12 || 12;
  
    return `${hours}:${minutes} ${period}`;
}

export const convertFrom12To24Format = (time12) => {
    const [sHours, minutes, period] = time12.match(/([0-9]{1,2}):([0-9]{2}) (AM|PM)/).slice(1);
    const PM = period === 'PM';
    const hours = (+sHours % 12) + (PM ? 12 : 0);
  
    return `${('0' + hours).slice(-2)}:${minutes}`;
}

