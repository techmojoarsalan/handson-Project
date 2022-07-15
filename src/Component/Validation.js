function Validation(value) {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      error.email = "Email is Required";
      error.flag=false;
    } else if (!regex.test(value.email)) {
      error.email = "this not valid email";
      error.flag=false
    }
    if (!value.password) {
      error.password = "Password is required";
      error.flag=false
    } else if (value.password.length <= 8) {
      error.password = "Password min length is atleast 8";
      error.flag= false
    } 
    else{
      error.flag = true

    }
    return error;
  }
  export default Validation;