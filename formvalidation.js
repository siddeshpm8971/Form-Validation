let getForm=document.querySelector('#Form');
getForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(validateForm()){
        alert('Form is Submitted Successfully');
    }
});

validateForm=()=>{
    return (checkUsername() & checkEmail() & checkPassword() & checkConfirmPassword());
};

let checkUsername=()=>{
    let inputElement=document.querySelector('#username');
    let feedbackElement=document.querySelector('#userfeedback');
    let regExp=/^[a-zA-Z0-9]{4,12}$/;
    if(regExp.test(inputElement.value)){
        makeValid(inputElement,feedbackElement);
        return true;
    }
    else{
        makeInvalid(inputElement,feedbackElement);
        return false;
    }
};

let checkEmail=()=>{
    let inputElement=document.querySelector('#email');
    let feedbackElement=document.querySelector('#emailfeedback');
    let regExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regExp.test(inputElement.value)){
        makeValid(inputElement,feedbackElement);
        return true;
    }
    else{
        makeInvalid(inputElement,feedbackElement);
        return false;
    }
};

let checkPassword=()=>{
    let inputElement=document.querySelector('#password');
    let feedbackElement=document.querySelector('#passwordfeedback');
    let regExp=/^[A-Za-z0-9]\w{7,14}$/;
    if(regExp.test(inputElement.value)){
        makeValid(inputElement,feedbackElement);
        return true;
    }
    else{
        makeInvalid(inputElement,feedbackElement);
        return false;
    }
};

let checkConfirmPassword=()=>{
    let passwordElement=document.querySelector('#password');
    let inputElement=document.querySelector('#cpassword');
    let feedbackElement=document.querySelector('#cpasswordfeedback');
    let regExp=/^[A-Za-z0-9]\w{7,14}$/;
    if(regExp.test(inputElement.value) && passwordElement.value===inputElement.value){
        makeValid(inputElement,feedbackElement);
        return true;
    }
    else{
        makeInvalid(inputElement,feedbackElement);
        return false;
    }
};

let makeValid=(inputElement,feedbackElement)=>{
    inputElement.classList.add('form-valid');
    inputElement.classList.remove('form-invalid');
    feedbackElement.classList.add('text-success');
    feedbackElement.classList.remove('text-failure');
    feedbackElement.innerText=`${inputElement.placeholder} is Valid`;
};

let makeInvalid=(inputElement,feedbackElement)=>{
    inputElement.classList.remove('form-valid');
    inputElement.classList.add('form-invalid');
    feedbackElement.classList.remove('text-success');
    feedbackElement.classList.add('text-failure');
    feedbackElement.innerText=`Please Enter a Valid ${inputElement.placeholder}`;
};

let userElement=document.querySelector('#username');
userElement.addEventListener('keyup',function(){
    checkUsername();
});

let emailElement=document.querySelector('#email');
emailElement.addEventListener('keyup',function(){
    checkEmail();
});

let passwordElement=document.querySelector('#password');
passwordElement.addEventListener('keyup',function(){
    checkPassword();
});

let cpasswordElement=document.querySelector('#cpassword');
cpasswordElement.addEventListener('keyup',function(){
    checkConfirmPassword();
});