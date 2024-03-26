$(document).ready(function(){
// importing from html document    

    var searchcollapseoption=document.getElementsByClassName('mainsearchoptions');
    var mainsearchoptions=[...searchcollapseoption]
    
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
        // window.location.href="../pages/createtour.html"


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




























    //beginning of destionation chooseing from database list ??/////

    $(".mainsearchinput").on("focus", function (){
        $(".destinationsearchlabel").css({
           " position":"relative",
            "top":"-4rem",
           " font-size":"medium",
            "color":"gray",
            "left":".50rem",
            "transition": "all 0.5s ease"
        });


        $(".searchcollapsediv").css({
            // "display":"block",
            "height":"auto",
            "opacity":"1",
            "transition":'all 1s ease',
            "visibility": "visible"
        })
    })
// on focuss out 
    $(".mainsearchinput").on("focusout", function (){
        if($(".mainsearchinput").val()==""){
            $(".destinationsearchlabel").css({
                " position":"relative",
                 "top":"-2.7rem",
                " font-size":"medium",
                 "color":"gray",
                 "left":".50rem",
                 "transition": "all 0.5s ease"
             });
     
     
             $(".searchcollapsediv").css({
                 // "display":"block",
                 "height":"0",
                 "opacity":"0",
                 "transition":'all 1s ease',
                 "visibility": "hidden"
             })
    
    
             $(".searchiconcancelbtn").css({
                // "display":"block",
                "height":"0",
                "opacity":"0",
                "transition":"all 0.5s ease",
                "visibility": "hidden",
            })

        }else{


            $(".destinationsearchlabel").css({
                " position":"relative",
                "top":"-4rem",
                " font-size":"medium",
                "color":"gray",
                "left":".50rem",
                "transition": "all 0.5s ease"
            });
            
            
            $(".searchcollapsediv").css({
             // "display":"block",
             "height":"0",
             "opacity":"0",
             "transition":'all 1s ease',
             "visibility": "hidden"
         })

         
         $(".searchiconcancelbtn").css({
             // "display":"block",
             "height":"auto",
             "opacity":"1",
             "transition":"all 0.5s ease",
             "visibility": "visible",
            })
        }
    })

    // $(".searchcollapsediv").on("mouseover", function (){
    //     $(".destinationsearchlabel").css({
    //         " position":"relative",
    //          "top":"-4rem",
    //         " font-size":"medium",
    //          "color":"gray",
    //          "left":".50rem",
    //          "transition": "all 0.5s ease",
    //          "background-color":"purple"
    //      });
 
 
    //      $(".searchcollapsediv").css({
    //          // "display":"block",
    //          "height":"auto",
    //          "opacity":"1",
    //          "transition":'all 1s ease',
    //          "visibility": "visible"
    //      })
    // })
    // $(".searchcollapsediv").on("mouseout", function (){
    //     $(".destinationsearchlabel").css({
    //         " position":"relative",
    //          "top":"-4rem",
    //         " font-size":"medium",
    //          "color":"gray",
    //          "left":".50rem",
    //          "transition": "all 0.5s ease",
    //          "background-color":"green"
    //      });
 
 
    //      $(".searchcollapsediv").css({
    //          // "display":"block",
    //          "height":"auto",
    //          "opacity":"1",
    //          "transition":'all 3s ease',
    //         "visibility": "visible"
    //      })
    // })

    // on focuss out all above this 
    // .searchselectcollapse{
    //     width:80%;
    //     height:200%;
    //     border-radius: 10px;

    // }
    // .destinyinputplaceholder .mainsearchinput:focus ~ .searchcollapsediv{
    //     display:block;
    // }
    // .destinationsearchinput{
    //     position:relative;
    //     top:80px;
    //     color:yellow;
    //     left:2rem;
    // }

    $(".searchiconbtn").on("click", function(){
        
    })

    $(".searchiconcancelbtn").on("click", function(){
        console.log("I have just clicked this"); 
        console.log($(".mainsearchinput").val());
        $(".mainsearchinput").attr("reset", "true");
        $(".mainsearchinput").trigger("reset");
        $(".mainsearchinput").val("");



        //here is the clear and reset Search input for the search tour/travel
        $(".destinationsearchlabel").css({
            " position":"relative",
             "top":"-2.8rem",
            " font-size":"medium",
             "color":"gray",
             "left":".50rem",
             "transition": "all 0.5s ease"
         });
 
 
         $(".searchcollapsediv").css({
             // "display":"block",
             "height":"0",
             "opacity":"0",
             "transition":'all 1s ease',
             "visibility": "hidden"
         })
        
         $(".destinationsearchlabel").css({
            " position":"relative",
             "top":"-2.7rem",
            " font-size":"medium",
             "color":"gray",
             "left":".50rem",
             "transition": "all 0.5s ease"
         });
 
 
         $(".searchcollapsediv").css({
             // "display":"block",
             "height":"0",
             "opacity":"0",
             "transition":'all 1s ease',
             "visibility": "hidden"
         })


         $(".searchiconcancelbtn").css({
            // "display":"block",
            "height":"0",
            "opacity":"0",
            "transition":"all 0.5s ease",
            "visibility": "hidden",
        })
    })
    

   

    $(".mainsearchinput").on("keyup", function(){
        if($(".mainsearchinput").val()==""){
            $(".searchiconcancelbtn").css({

                // "display":"hidden",
                
            "height":"0",
            "opacity":"0",
            "transition":"all 1s ease",
            "visibility": "hidden"
            }
       

        // `
    )}
        else{
            $(".searchiconcancelbtn").css({
                // "display":"block",
                "height":"auto",
                "opacity":"1",
                "transition":"all 0.5s ease",
                "visibility": "visible",
            }
           
            
            );

        }
        console.log($(".mainsearchinput").val()=="")
    })
    
    mainsearchoptions.forEach((currentoption, index, array)=>{
        
        currentoption.addEventListener("click", ()=>{
            console.log(`here is the chosen option ${currentoption}`);
            console.log(currentoption)
            let value= currentoption.getAttribute("value");
            let firstletterinvaluecapital=value.charAt(0).toUpperCase();
            var remainingvaluestring=value.slice(1);
            var capitalizedvalue=firstletterinvaluecapital + remainingvaluestring;
            console.log(value);
            console.log(capitalizedvalue);

            //keep the seaerch input space clear /////
            $(".mainsearchinput").val(capitalizedvalue);

            $(".destinationsearchlabel").css({
                " position":"relative",
                 "top":"-4rem",
                " font-size":"medium",
                 "color":"gray",
                 "left":".50rem",
                 "transition": "all 0.5s ease"
             });
     
     
             $(".searchcollapsediv").css({
                 // "display":"block",
                 "height":"0",
                 "opacity":"0",
                 "transition":'all 1s ease',
                 "visibility": "hidden"
             })


             $(".searchiconcancelbtn").css({
                // "display":"block",
                "height":"auto",
                "opacity":"1",
                "transition":"all 0.5s ease",
                "visibility": "visible",
            })


        //end of search input data/////

        })
    })

})