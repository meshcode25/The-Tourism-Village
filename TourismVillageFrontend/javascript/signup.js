$(document).ready(function(){
    //sign up validation //
    //gmail validation
       
    $(".emailinput").on("keyup", ()=>{
        validateEmail();
        console.log("keyed up");
    })

    //username validation
    $(".usernameinput").on("keyup", ()=>{
        validateUsername();
        console.log("keyed up");

    })
    //password validation
    $(".passowordlinput").on("keyup", ()=>{
        validatePassword();
        console.log("keyed up");

    })
    //confirm password validation
    $(".conpasswordinput").on("keyup", ()=>{
        validateConfpass();
        console.log("keyed up");

    });

    //on submit function
    $(".submitbutton").on("click", function (e){        
      e.preventDefault();
      
        validateEmail();
        validateUsername();
        validatePassword();
        validateConfpass();



        if (!validateEmail() && !validateUsername() && !validatePassword() && !validateConfpass() ) {
            console.log("errors all around 1");
            $(".mainerrormessage").html(`<div class="error mainerror">Please fill all the required field</div>`);
            
        }
         else if (!validateEmail() || !validateUsername() || !validatePassword() || !validateConfpass()) {
            $(".mainerrormessage").html(`<div class="error mainerror">Please fill all the required fields</div>`);
            console.log("some Erorross heare and about");
            
        }
        else {
            console.log("Seems everything is Okayok");
            $(".mainerrormessage").html("");
            var form = $('.form')[0];
            var data = new FormData(form);
            $.ajax({
                type: "POST",
                url: "process.php",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                async: false,

                beforeSend: function () {

                    setTimeout(function () {
                        // $('.form').trigger("reset");
                        // $('.submitbutton').html('Submit');
                        // $('.submitbutton').attr("disabled", false);
                        // $('.submitbutton').css({ "border-radius": "7.5px" });



                    $('.submitbutton').html('<i class="fa-solid fa-spinner fa-spin"></i>');
                    $('.submitbutton').attr("disabled", true);
                    $('.submitbutton').css({ "border-radius": "50%" });
                    }, 50000);


                    $('.submitbutton').html('<i class="fa-solid fa-spinner fa-spin"></i>');
                    $('.submitbutton').attr("disabled", true);
                    $('.submitbutton').css({ "border-radius": "50%" });
                },

                success: function (data) {
                    $('.message').html(data);
                },
                complete: function () {
                    setTimeout(function () {
                        $('.form').trigger("reset");
                        $('.submitbutton').html('Submit');
                        $('.submitbutton').attr("disabled", false);
                        $('.submitbutton').css({ "border-radius": "7.5px" });
                    }, 50000);
                }
            });
        }
    });
    
    //individual validation Functions
    function validateEmail(){
        
        var emailPattern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email=$(".emailinput").val();
        var validEmail=emailPattern.test(email);

        if(email == ""){
            $(".emailerror").text('*Email Field Required')
            console.log("this space is fucking empty")
            return false;
        }else if(!validEmail){ 
            $(".emailerror").text('*Input Valid Email Address')
            console.log("it's not a  match")
            return false;
        }
        else{
            $(".emailerror").html(' ')
            console.log("it's a fucking match")
            return true;

        }
    }

    function validateUsername(){
        var usernamePattern=/^[A-Za-z0-9]+$/
        var username=$(".usernameinput").val();
        var validUsername=usernamePattern.test(username);

        if(username ==" "){
            $(".usernameerror").html('*Username Field Required')
            return false;
        }
        else if(!validUsername){ 
            $(".usernameerror").html('*Input Valid Username Address')
            return false;
        }
        else{
            $(".usernameerror").html(' ')
            return true;
        }
    }

    function validatePassword(){
        var passwordPattern= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var password=$(".passwordinput").val();
        var validPassword=passwordPattern.test(password);

        if(password ==" "){
            $(".passworderror").html('*password Field Required')
            return false;
        }
        else if(!validPassword){ 
            $(".passworderror").html('*Invalid Password! Must be at least 8 characters(at least 1 uppercase, 1 lowercase and 1 Special Character')
            return false;
        }
        else{
            $(".passworderror").html(' ')
            return true;
        }
    }

    function validateConfpass(){
        var password=$(".passwordinput").val();
        var confpass=$(".conpasswordinput").val();
      
    
        if(confpass == " "){
            $(".conpassworderror").html('*Verify password Field Required')
            return false;
        }
        else if(!(confpass == password)){ 
            $(".conpassworderror").html('*Password and Verify Password Dont Match')
            return false;
        }
        else{
            $(".conpassworderror").html(' ')
            return true;
        }
          
    }
})