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
    $(".passwordinput").on("keyup", ()=>{
        validatePassword();
        console.log("keyed up");

    })
    //confirm password validation
    $(".conpasswordinput").on("keyup", ()=>{
        validateConfpass();
        console.log("keyed up");

    });

    $(".eye:eq(0)").on("click",  function(){

        var log=$(".passwordinput[type~='password']")
        var loglength=log.length;

        if(loglength==1 ){
            $(".passwordinput").attr("type", "text")
            console.log("should hide password ")
            $(".eye:eq(0)").hide();
            $(".eyeslash:eq(0)").show()
        }else{
            console.log("should show password");
            $(".passwordinput").attr("type", "password")
            $(".eye:eq(0)").hide();
            $(".eyeslash:eq(0)").show()
        }


    })
 
    $(".eyeslash:eq(0)").on("click",  function(){


        var log=$(".passwordinput[type~='password']")
        var loglength=log.length;
        if(loglength==1 ){
            $(".passwordinput").attr("type", "text")
            console.log("should hide password ")
            $(".eye:eq(0)").show();
            $(".eyeslash:eq(0)").hide()
                  
          
        }else{
            console.log("should show password");
            $(".passwordinput").attr("type", "password")
            $(".eye:eq(0)").show();
            $(".eyeslash:eq(0)").hide()
        }
    })

    $(".eye:eq(1)").on("click",  function(){

        var log=$(".conpasswordinput[type~='password']")
        var loglength=log.length;

        if(loglength==1 ){
            $(".conpasswordinput").attr("type", "text")
            console.log("should hide password ")
            $(".eye:eq(1)").hide();
            $(".eyeslash:eq(1)").show()
        }else{
            console.log("should show password");
            $(".conpasswordinput").attr("type", "password")
            $(".eye:eq(1)").hide();
            $(".eyeslash:eq(1)").show()
        }


    })
 
    $(".eyeslash:eq(1)").on("click",  function(){


        var log=$(".conpasswordinput[type~='password']")
        var loglength=log.length;
        if(loglength==1 ){
            $(".conpasswordinput").attr("type", "text")
            console.log("should hide password ")
            $(".eye:eq(1)").show();
            $(".eyeslash:eq(1)").hide()
                  
          
        }else{
            console.log("should show password");
            $(".conpasswordinput").attr("type", "password")
            $(".eye:eq(1)").show();
            $(".eyeslash:eq(1)").hide()
        }
    })

    
    //on submit function
    $(".submitbutton").on("click", function (e){        
      e.preventDefault();
      
        validateEmail();
        // validateUsername();
        validatePassword();
        // validateConfpass();



        if (!validateEmail() && !validateUsername() && !validatePassword() && !validateConfpass() ) {
            console.log("errors all around 1");
            $(".mainerrormessage").html(`<div class="error mainerror" style="background-color:red; color:white; padding:0.5rem 0.2rem"> Please fill out all the required field</div>`);
            
        }
         else if (!validateEmail() || !validateUsername() || !validatePassword() || !validateConfpass()) {
            $(".mainerrormessage").html(`<div class="error mainerror" style="background-color:red; color:white; padding:0.5rem 0.2rem"> Please fill out all the required fields</div>`);
            console.log("some Erorross heare and about");
            
        }
        else {
            console.log("Seems everything is Okayok");
            $(".mainerrormessage").html("");
            var form = $('.form')[0];
            var data = new FormData(form);

            
            data.append("email", $(".emailinput").val());
            
            data.append("username", $(".usernamelinput").val());
            data.append("password", $(".passwordinput").val());
            data.append("conpassword", $(".conpasswordinput").val());
            

            $.ajax({
                type: "POST",
                url:"http://localhost/www/php/index.php/signup",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                async: false,

                beforeSend:function () {
                        $('.submitbutton').html(`<i class="fas fa-spinner fa-pulse " style="color:white; font-size: x-large;"></i>`);
                        // $('.spinning').hide();
                        $('.spinning').css({"color":"white"})
                        // $('.submitbutton').html(``)
                        $('.submitbutton').attr("disabled", true);
                        $('.submitbutton').css({ "border-radius": "7.5px" });
                },

                success: function (response, status, xhr) {
                    $('.mainerrormessage').html('<p style="bakckground-color:red"></p>');
                    console.log(" sign up submit was  was successfull");
                    console.log(response);
                    console.log(status);
                    console.log(xhr);
                },



                complete: function () {
                    setTimeout(function () {
                        $('.mainerrormessage').html('<p style="background-color:green; color:white padding:0.5rem 0.2rem >You have successfully Signed up, Thank you!</p>')
                        $('.form').trigger("reset");
                        $('.submitbutton').html('SIGN UP ');
                        $('.submitbutton').attr("disabled", false);
                        $('.submitbutton').css({ "border-radius": "7.5px" });
                        console.log( "and now here is the completed message from signup request")
                    }, 5000);
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
        var usernamePattern=/^[A-Za-z0-9\s]+$/
        var username=$(".usernameinput").val();
        var validUsername=usernamePattern.test(username);

        if(username ==""){
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

        if(password ==""){
            $(".passworderror").html('*password Field Required')
            return false;
        }
        else if(!validPassword){ 
            $(".passworderror").html('<p style="width:90%">*Invalid Password! Must be at least 8 characters(at least 1 uppercase, 1 lowercase and 1 Special Character</p>')
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
      
    
        if(confpass == ""){
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