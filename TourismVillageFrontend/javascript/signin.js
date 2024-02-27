$(document).ready(function(){
    //sign up validation //
    //gmail validation
       
    $(".emailinput").on("keyup", ()=>{
        validateEmail();
    })

    $
    //username validation
    $(".usernameinput").on("keyup", ()=>{
        validateUsername();
    })
    //password validation
    $(".passowordlinput").on("keyup", ()=>{
        validatePassword();
    })
    //confirm password validation
    $(".conpasswordinput").on("keyup", ()=>{
        validateConfpass();
    });

    //on submit function
    $(".submitbutton").on("click", ()=>{        
        

    })

    //individual validation Functions
    function validateEmail(){
        
        $emailPattern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        $email=$("emailinput").val();
        $matchEmail=emailPattern.test(email);
    }

    function validateUsername(){

    }

    function validatePassword(){

    }

    function validateConfpass(){

    }
})