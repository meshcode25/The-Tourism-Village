$(document).ready(function(){
// importing from html document    

    var searchcollapseoption=document.getElementsByClassName('mainsearchoptions');
    let mainsearchoptions=document.querySelectorAll(".mainsearchoptions");
    let searchselectcollapse=document.querySelectorAll(".searcheselectcollapse");
    const addtour=document.querySelector(".addtour");
    var destinationsearchcontainer=document.querySelector(".destinationsearchcontainer");
    var destinationsearchdiv=document.querySelectorAll(".destinationsearchdiv");
    var  destinydiv=document.querySelector(".destinydiv");
    var  searchcollapsediv=document.querySelectorAll(".searchcollapediv");

    const submitbutton=document.querySelector(".submitbutton")
    
    
    // const destinationsearchdiv=document.querySelector(".destinationsearchdiv");
    let mainsearchinput=document.querySelectorAll(".mainsearchinput");
    // destinationsearchcontainer.appendChild(destinationsearchdiv);
    // console.log(addtour);


    // console.log(mainsearchinput);


   
    
    //sign up validation //
    //gmail validation
    // console.log(mainsearchinput);






    "tournameinput"
    "date"
    "tourdurationmaininput"
    "travellersmaininput"
    "mainsearchinput"

  

    //username validation
    $(".tournameinput").on("keyup", ()=>{
        validateTournameInput();
        console.log("keyed up");

    })
    $(".mainsearchinput").on("keyup", ()=>{
        validateTourSearch();

    })

    //mainsearchinput validation


    //confirm password validation


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


    
    "tournameinput"
    "date"
    "tourdurationmaininput"
    "travellersmaininput"
    "mainsearchinput"
    
    //on submit function
    $(".submitbutton").each(function(index){
        if(index==0){
            $(this).on("click",function(e){
                e.preventDefault();
              
                validateTournameInput();
                validateTourSearch();
                validateDatePicker();
                validateTourDuration();
                validateTravellersNumber();
        
                // window.location.href="../pages/createtour.html"
        
        
                if (!validateTournameInput() && !validateTourSearch() && !validateDatePicker() && !validateTourDuration() && !validateTravellersNumber() ) {
                    console.log("errors all around 1");
                    $(`.mainerrormessage:eq(${index})`).html(`<div class="error mainerror" style="background-color:red; color:white; padding:0.5rem 0.2rem"> Please fill out all the required field</div>`);
                     
                }
                 else if (!validateTournameInput() || !validateTourSearch() || !validateDatePicker() || !validateTourDuration() || !validateTravellersNumber()) {
                    $(`.mainerrormessage:eq(${index})`).html(`<div class="error mainerror" style="background-color:red; color:white; padding:0.5rem 0.2rem"> Please fill out all the required fields</div>`);
                    console.log("some Erorross heare and about");
                    
                }
                else {
                    console.log("Seems everything is Okayok");
                    $(`.mainerrormessage:eq(${index})`).html("");
                    var form = $('.form')[0];
                    var data = new FormData(form);
        
                    
                    "tournameinput"
                    "date"
                    "tourdurationmaininput"
                    "travellersmaininput"
                    "mainsearchinput"
                    
                    data.append("tournameinput", $(".emailinput").val());
                    data.append( "date", $(".usernamelinput").val());
                    data.append("tourdurationmaininput", $(".passwordinput").val());
                    data.append( "travellersmaininput", $(".conpasswordinput").val());
                    data.append(   "mainsearchinput", $(".conpasswordinput").val());
                    
        
                    $.ajax({
                        type: "POST",
                        url:"http://localhost/www/php/index.php/signup",
                        data: data,
                        processData: false,
                        contentType: false,
                        cache: false,
                        async: false,
        
                        beforeSend:function () {
                                $(`.submitbutton:eq(${index})`).html(`<i class="fas fa-spinner fa-pulse " style="color:white; font-size: x-large;"></i>`);
                                // $('.spinning').hide();
                                $('.spinning').css({"color":"white"})
                                // $('.submitbutton').html(``)
                                $(`.submitbutton:eq(${index})`).attr("disabled", true);
                                $(`.submitbutton:eq(${index})`).css({ "border-radius": "7.5px" });
                        },
        
                        success: function (response, status, xhr) {
                            $(`.mainerrormessage:eq(${index})` ).html('<p style="bakckground-color:red"></p>');
                            console.log(" sign up submit was  was successfull");
                            console.log(response);
                            console.log(status);
                            console.log(xhr);
        
        
                        },
        
        
        
                        complete: function () {
                            setTimeout(function () {
                                $(`.mainerrormessage:eq(${index})` ).html('<p style="background-color:green; color:white padding:0.5rem 0.2rem >You have successfully Signed up, Thank you!</p>')
                                $('.form').trigger("reset");
                                $(`.submitbutton:eq(${index})`).html('Next Step ');
                                $(`.submitbutton:eq(${index})`).attr("disabled", false);
                                $(`.submitbutton:eq(${index})`).css({ "border-radius": "7.5px" });
                                console.log( "and now here is the completed message from signup request")
        
                                // $('.spinning').css({"display":"none"})
        
        
        
                                
                                console.log("here isthe index before molestations " + index)
        
                            $(".newtourbtn").each((i)=>{
                                // console.log($(".submitbutton")) 
                                    $(`.newtourbtn:eq(${i})`).removeClass("autofocus")
                                    console.log("fuck they are not even close ")                                
                                    // console.log($(".newtourbtn"))
                                    // return false     
                            })
        
                            $newindex=index + 1
                            $(`.newtourbtn:eq(${$newindex})`).addClass("autofocus");
            
                                
        
                            $(".tourstep").each(function(i){
                                $(this).css({
                                    "display":"none",
                                })
                            })
        
                            $(`.tourstep:eq(${$newindex})`).css({
                                "display":"block",
        
                            })
                             
                            
        
                            console.log($(".tourstep"))
        
                            }, 500);
                        }
                    });
                }
                })
        }
        else if(index==1){
            $(this).on("click",function(e){
                e.preventDefault();
              
                validateImageContainer()
        
                // window.location.href="../pages/createtour.html"
        
        
                if (!validateImageContainer()) {
                    console.log("No Image Selected");
                    $(`.mainerrormessage:eq(${index})`).html(`<div class="error mainerror" style="background-color:red; color:white; padding:0.5rem 0.2rem">*No Image Selected</div>`);
                     
                }
                else {
                    console.log("Seems everything is Okayok");
                    $(`.mainerrormessage:eq(${index})`).html("");
                    var form = $('.form')[0];
                    var data = new FormData(form);
        
                    
                    "tournameinput"
                    "date"
                    "tourdurationmaininput"
                    "travellersmaininput"
                    "mainsearchinput"
                    
                    data.append("tournameinput", $(".emailinput").val());
                    data.append( "date", $(".usernamelinput").val());
                    data.append("tourdurationmaininput", $(".passwordinput").val());
                    data.append( "travellersmaininput", $(".conpasswordinput").val());
                    data.append(   "mainsearchinput", $(".conpasswordinput").val());
                    
        
                    $.ajax({
                        type: "POST",
                        url:"http://localhost/www/php/index.php/signup",
                        data: data,
                        processData: false,
                        contentType: false,
                        cache: false,
                        async: false,
        
                        beforeSend:function () {
                                $(`.submitbutton:eq(${index})`).html(`<i class="fas fa-spinner fa-pulse " style="color:white; font-size: x-large;"></i>`);
                                // $('.spinning').hide();
                                $('.spinning').css({"color":"white"})
                                // $('.submitbutton').html(``)
                                $(`.submitbutton:eq(${index})`).attr("disabled", true);
                                $(`.submitbutton:eq(${index})`).css({ "border-radius": "7.5px" });
                        },
        
                        success: function (response, status, xhr) {
                            $(`.mainerrormessage:eq(${index})` ).html('<p style="bakckground-color:red"></p>');
                            console.log(" sign up submit was  was successfull");
                            console.log(response);
                            console.log(status);
                            console.log(xhr);
                        },

                        complete: function () {
                            setTimeout(function () {
                                $(`.mainerrormessage:eq(${index})` ).html('<p style="background-color:green; color:white padding:0.5rem 0.2rem >You have successfully Signed up, Thank you!</p>')
                                $('.form').trigger("reset");
                                $(`.submitbutton:eq(${index})`).html('Next Step ');
                                $(`.submitbutton:eq(${index})`).attr("disabled", false);
                                $(`.submitbutton:eq(${index})`).css({ "border-radius": "7.5px" });
                                console.log( "and now here is the completed message from signup request")
        
                                // $('.spinning').css({"display":"none"})
        
        
        
                                
                                console.log("here isthe index before molestations " + index)
        
                            $(".newtourbtn").each((i)=>{
                                // console.log($(".submitbutton")) 
                                    $(`.newtourbtn:eq(${i})`).removeClass("autofocus")
                                    console.log("fuck they are not even close ")                                
                                    // console.log($(".newtourbtn"))
                                    // return false     
                            })
        
                            $newindex=index + 1
                            $(`.newtourbtn:eq(${$newindex})`).addClass("autofocus");
            
                                
        
                            $(".tourstep").each(function(i){
                                $(this).css({
                                    "display":"none",
                                })
                            })
        
                            $(`.tourstep:eq(${$newindex})`).css({
                                "display":"block",
        
                            })
                             
                            
        
                            console.log($(".tourstep"))
        
                            }, 500);
                        }
                    });
                }
            })
        }
        else if(index==2){

        }
        else if(index==3){

        }
        else if(index==4){

        }
        else if(index==5){

        }
        else if(index==6){

        }
        else if(index==7){

        }
        
        

        
    });
    

    //individual validation Functions
    function validateTournameInput(){    
        // var emailPattern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var tourname=$(".tournameinput").val();
        // var validEmail=emailPattern.test(email);

        if(tourname == ""){
            $(".tournameerror").text('*Tourname Field Required')
            console.log("this space is fucking empty")
            return false;
        }
        else{
            $(".tournameerror").html(' ')
            console.log("it's a fucking match")
            return true;

        }
    }

    function  validateTourSearch(){
        // var usernamePattern=/^[A-Za-z0-9\s]+$/
        var toursearch=$(".mainsearchinput").val();
        // var validUsername=usernamePattern.test(username);

        if(toursearch ==""){
            $(".destinationsearcherror").html('*Tourdestination Field Required')
            return false;
        }
        else{
            $(".destinationsearcherror").html(' ')
            return true;
        }
    }


    function validateDatePicker(){ 
        // var passwordPattern= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var datepicker=$(".datepicker").val();
        // var validPassword=passwordPattern.test(password);

        if(datepicker ==""){
            $(".datepickererror").html('*Tour Date Field Required')
            return false;
        }
        else{
            $(".datepickererror").html(' ')
            return true;
        }
    }

    function validateTourDuration(){
        var tourduration=$(".tourdurationmaininput").val();
      
        if(tourduration == ""){
            $(".tourdurationerror").html('*Tour Duration Field Required')
            return false;
        }
        else{
            $(".tourdurationerror").html(' ')
            return true;
        }
          
    }


    function  validateTravellersNumber(){
        var travellersnumber=$(".travellersmaininput").val();
        if(travellersnumber == ""){
            $(".tourtravellerserror").html('*Capacity of Tour Field Required')
            return false;
        }
    
        else{
            $(".tourtravellerserror").html(' ')
            return true;
        }
          
    }






    function ChangeCreateTourNav(){
        $(".newtourbtn").each(function(i){
            $(`.newtourbtn:eq(${i})`).removeClass("autofocus");
        })
        
    }
    

    function SwitchCreateTourNav(){
        $(".newtourbtn").each(function(i){      
            $(this).on("click", ()=>{
                ChangeCreateTourNav()
                $(this).addClass("autofocus");

                $(".tourstep").each(function(i){
                    $(this).css({
                        "display":"none",
                    })
                })

                $(`.tourstep:eq(${i})`).css({
                    "display":"block",

                })
            })
        })
        
    }



    SwitchCreateTourNav()

    


















    //beginning of destionation chooseing from database list ??/////
    // $(".mainsearchinput").each(function(index,thiselement){
    // const mainsearchinput=document.querySelectorAll(".mainsearchinput");
    // const destinationsearchdiv.forEach((selectedelement, index, arrayoflist)=>{
    //     selectedelement[0]
    // })

    addtour.addEventListener("click",function(){
        // mainsearchInputOnClick();
        // selectCollapseOption(index);

        updateDom();
        mainsearchInputOnClick();
        mainsearchInputOnMouseOut();
        searchinputClearIcon();
        SearchinputonKeyup();

        
    })




    function updateDom(){
            let newtour=document.createElement("div");
            newtour.classList.add("destinationsearchdiv");
            // newtour.style.background="green";
            // newtour.style.color="white";
            console.log("I have been clicked");

            const newer= destinationsearchdiv[0].cloneNode(true);


            $(newer).find(".tourdestinationlabeldiv").text("Add Another Tour Destination");

            // console.log($(newer).find("*"));
            $(newer).find(".tourdestinationlabeldiv").css({
                // "display":"none",
                "margin":"0",
                "padding": "0",
            });

            $(newer).find(".tourdestinationlabeldiv").css({
                "margin":"0",
                "padding":"0"
            });

            // $(newer).find(".tourdestinationlabeldiv").text("Add/Select another Destination/Tour");

            // $(newer).find(".tourdestinationlabeldiv").text("Add/Select another Destination/Tour");

            $(newer).find(".mainsearchinput").css({
                // "margin":"2rem 0",
                "padding": "0",
                "background-color":"whitesmoke",
         
            });

            $(newer).find(".mainsearchinput").val(" ");
            
            $(newer).css({
                "margin":"0",
                "padding": "0",
                "margin-left":"1.4rem"
                // "width":"80%",


            })
            // const newer=destinationsearchdiv[0];
            // let newer=document.createElement("li")
            newtour.appendChild(newer);
            
            // destinationsearchcontainer.appendChild(newtour);
            addtour.before(newtour)
            
        mainsearchinput=document.querySelectorAll(".mainsearchinput");
        searchselectcollapse=document.querySelectorAll(".searcheselectcollapse");

        console.log(destinationsearchdiv[0])
        console.log(mainsearchinput);
    
    }


    function mainsearchInputOnClick(){
        mainsearchinput.forEach(function(thiselement,index,array){
            // console.log(thiselement);
            thiselement.addEventListener("click", function (){
                
                console.log("I have been focused");
                $(`.destinationsearchlabel:eq(${index})`).css({
                        " position":"relative",
                        "top":"-4rem",
                        " font-size":"medium",
                        "color":"gray",
                        "left":".50rem",
                        "transition": "all 0.5s ease",
                        // "display":"block",
                        // "display":"none"
                    
                })
    
                $(`.searchcollapsediv:eq(${index})`).css({
                        // "display":"block",
                        "height":"auto",
                        "opacity":"1",
                        "transition":'all 1s ease',
                        "visibility": "visible"
                })
            })
    
            selectCollapseOption(index);
        })
    }

    function mainsearchInputOnMouseOut(){
        // on focuss out 
        // $(".mainsearchinput").on("focusout", function (){
        $(".mainsearchinput").each(function(index){
            $(this).on("focusout", function (){
    
                // if($(".mainsearchinput").val()==""){
                if($(this).val()==""){
                // $(".destinationsearchlabel").css({
                    $(`.destinationsearchlabel:eq(${index})`).css({
                        " position":"relative",
                        "top":"-2.7rem",
                        " font-size":"medium",
                        "color":"gray",
                        "left":".50rem",
                        "transition": "all 0.5s ease"
                    });
            
            
                    // $(".searchcollapsediv").css({
                    $(`.searchcollapsediv:eq(${index})`).css({
    
                        // "display":"block",
                        "height":"0",
                        "opacity":"0",
                        "transition":'all 1s ease',
                        "visibility": "hidden"
                    })
            
            
                    // $(".searchiconcancelbtn").css({
                    $(`.searchiconcancelbtn:eq(${index})`).css({
    
                        // "display":"block",
                        "height":"0",
                        "opacity":"0",
                        "transition":"all 0.5s ease",
                        "visibility": "hidden",
                    })
    
                }else{
    
    
                    // $(".destinationsearchlabel").css({
                    $(`.destinationsearchlabel:eq(${index})`).css({
    
                        " position":"relative",
                        "top":"-4rem",
                        " font-size":"medium",
                        "color":"gray",
                        "left":".50rem",
                        "transition": "all 0.5s ease"
                    });
                    
                    
                    // $(".searchcollapsediv").css({
                    $(`.searchcollapsediv:eq(${index})`).css({
    
                    // "display":"block",
                    "height":"0",
                    "opacity":"0",
                    "transition":'all 1s ease',
                    "visibility": "hidden"
                })
    
                // $(".searchiconcancelbtn").css({
                $(`.searchiconcancelbtn:eq(${index})`).css({
    
                    // "display":"block",
                    "height":"auto",
                    "opacity":"1",
                    "transition":"all 0.5s ease",
                    "visibility": "visible",
                    })
                }
            })
        })
    }    


    $(".searchiconbtn").on("click", function(){
    
    })

    // $(".searchiconcancelbtn").on("click", function(){
    function searchinputClearIcon(){
        $(`.searchiconcancelbtn`).each(function(index){
            $(this).on("click", function(){
                console.log("searchinconbtn clicked, yeah you heard me clicked");
                console.log("I have just clicked this"); 
                console.log($(".mainsearchinput").val());
                // $(".mainsearchinput").attr("reset", "true");
                $(`.mainsearchinput:eq(${index})`).attr("reset", "true");
                // $(".mainsearchinput").trigger("reset");
                $(`.mainsearchinput:eq(${index})`).trigger("reset");
    
                // $(".mainsearchinput").val("");
                $(`.mainsearchinput:eq(${index})`).val("");
    
    
                //here is the clear and reset Search input for the search tour/travel
                $( `.destinationsearchlabel:eq(${index})`).css({
                    " position":"relative",
                    "top":"-2.8rem",
                    " font-size":"medium",
                    "color":"gray",
                    "left":".50rem",
                    "transition": "all 0.5s ease"
                });
    
    
                // $(".searchcollapsediv").css({
                $( `.searchcollapsediv:eq(${index})`).css({
    
                    // "display":"block",
                    "height":"0",
                    "opacity":"0",
                    "transition":'all 1s ease',
                    "visibility": "hidden"
                })
                
                // $(".destinationsearchlabel").css({
                $( `.destinationsearchlabel:eq(${index})`).css({
    
                    " position":"relative",
                    "top":"-2.7rem",
                    " font-size":"medium",
                    "color":"gray",
                    "left":".50rem",
                    "transition": "all 0.5s ease"
                });
    
    
                // $(".searchcollapsediv").css({
                $( `.searchcollapsediv:eq(${index})`).css({
    
                    // "display":"block",
                    "height":"0",
                    "opacity":"0",
                    "transition":'all 1s ease',
                    "visibility": "hidden"
                })
    
    
                // $(".searchiconcancelbtn").css({
                $( `.searchiconcancelbtn:eq(${index})`).css({
    
                    // "display":"block",
                    "height":"0",
                    "opacity":"0",
                    "transition":"all 0.5s ease",
                    "visibility": "hidden",
                })
            }) 
        })
        
    }

    

    // $(".mainsearchinput").on("keyup", function(){
    //     if($(".mainsearchinput").val()==""){

    function SearchinputonKeyup(){
        $(".mainsearchinput").each(function(index){
            $(this).on("keyup", function (){
                validateTourSearch();
                // if($(".mainsearchinput").val()==""){
                if($(this).val()==""){
                    $(`.searchiconcancelbtn:eq(${index})`).css({
    
                            // "display":"hidden",
                            
                        "height":"0",
                        "opacity":"0",
                        "transition":"all 1s ease",
                        "visibility": "hidden"
                    })
                }
                else{
                    // $(".searchiconcancelbtn").css({
                    $(`.searchiconcancelbtn:eq(${index})`).css({
    
                        // "display":"block",
                        "height":"auto",
                        "opacity":"1",
                        "transition":"all 0.5s ease",
                        "visibility": "visible",
                    })
                
                }
                console.log($(`.mainsearchinput:eq(${index})`).val())
            })
        })

    }
    

    function selectCollapseOption(index){
        let optionslist=$(`.searchselectcollapse:eq(${index})`).children(".mainsearchoptions") 
        
        for(let i=0; i<optionslist.length; i++){
            // console.log(optionslist[i].getAttribute("value"));
            i++
        }

        $(`.searchselectcollapse:eq(${index})`).children(".mainsearchoptions").each((indexx, currentoption)=>{  
            // console.log(`here is the chosen option ${currentoption}`);   
            currentoption.addEventListener("mousedown", ()=>{
                validateTourSearch();
       
                // console.log(" here is tehe current value " + currentoption)
                // console.log("here is the index of the clicked searchoptions" + indexx);
                let value= currentoption.getAttribute("value");
                let firstletterinvaluecapital=value.charAt(0).toUpperCase();
                var remainingvaluestring=value.slice(1);
                var capitalizedvalue=firstletterinvaluecapital + remainingvaluestring;
                console.log("here is teh derived value from the searchoptions " + value);
                console.log("here is teh derived value from the searchoptions " + capitalizedvalue);
    
                //keep the seaerch input space clear /////
                $(`.mainsearchinput:eq(${index})`).val(`${capitalizedvalue}`);
                // console.log(`here is the index of mainserchoption ${index}`);

                $(`.destinationsearchlabel:eq(${index})`).css({
                    " position":"relative",
                        "top":"-4rem",
                    " font-size":"medium",
                        "color":"gray",
                        "left":".50rem",
                        "transition": "all 0.5s ease"
                    });
            
            
                //  $(".searchcollapsediv").css({
                $(`.searchcollapsediv:eq(${index})`).css({
                        // "display":"block",
                        "height":"0",
                        "opacity":"0",
                        "transition":'all 1s ease',
                        "visibility": "hidden"
                    })
    
    
                //  $(".searchiconcancelbtn").css({
                $(`.searchiconcancelbtn:eq(${index})`).css({
    
                    // "display":"block",
                    "height":"auto",
                    "opacity":"1",
                    "transition":"all 0.5s ease",
                    "visibility": "visible",
                })
    
    
                
            })
        })
    }
    
    
    // updateDom();
    // mainsearchInputOnClick();
    mainsearchInputOnClick();
    mainsearchInputOnMouseOut();
    searchinputClearIcon();
    SearchinputonKeyup();
    selectCollapseOption(0);
    
    //end of search input data/////This is the endo teh Search input for searchibngt the destinations 












    ///start of datepicker javascript code 

            /*
    * Refactor JSX
    * From https://medium.com/swlh/build-a-date-picker-in-15mins-using-javascript-react-from-scratch-f6932c77db09
    * Into vanilla JS for project
    */

    let backbtn =document.getElementById("back");

    let cancelbtn=document.querySelector(".cancelbtn");
    let calwrapper=document.getElementById("date_picker_calendar")

    const calendar = document.querySelector("#calendar_main"),
    input = document.querySelector("#date"),
    calHeader = document.querySelector("#calendar_header"),
    calHeaderTitle = document.querySelector("#calendar_header span"),
    calDays = document.querySelector("#cal_days"),

    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let oneDay = 60 * 60 * 24 * 1000;
    let todayTimestamp =
    Date.now() -
    (Date.now() % oneDay) +
    new Date().getTimezoneOffset() * 1000 * 60;

    let selectedDay = todayTimestamp;
    // console.log(selectedDay); // Str in millisec
    let today=todayTimestamp;
    // Get num of days in month
    // month param 0-11
    const getNumberOfDays = (year, month) => {
    return 40 - new Date(year, month, 40).getDate();
    };
    // getNumberOfDays(2023, 1);

    // Calc day details
    const getDayDetails = (args) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    let monat=args.month;
    let jahr=args.year;
    // console.log(day)
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

    let _date =
        (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
    // console.log(_date)
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    // console.log(timestamp)
    return {
        date: _date,
        day,
        month,
        timestamp,
        dayString: days[day],
        monat,
        jahr
    };
    };

    // [{}] each {} with details for each day of month
    const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 5;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
        currentDay = getDayDetails({
            index,
            numberOfDays,
            firstDay,
            year,
            month
        });
        monthArray.push(currentDay);
        index++;
        }
    }
    return monthArray;
    };
    // getMonthDetails(2023, 3)

    // Variables that get updated with "state" changes
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthDetails = getMonthDetails(year, month);

    // console.log(date);
    // console.log(year)
    // console.log(month)
    // console.log(monthDetails);


    const isCurrentDay = (day, cell) => {
    if (day.timestamp === todayTimestamp) {
        // cell.classList.add("active");
        cell.classList.add("isCurrent");
        
    }
    };

    // Checks if day is one selected
    const isSelectedDay = (day, cell) => {
    if (day.timestamp === selectedDay) {
        cell.classList.add("active");
        cell.classList.add("isSelected");
    }
    };

    // Get month str
    const getMonthStr = (month) =>
    months[Math.max(Math.min(11, month), 0)] || "Month";
    // console.log(getMonthStr(month))

    // Set year using arrows
    const setHeaderNav = (offset) => {
    month = month + offset;
    if (month === -1) {
        month = 11;
        year--;
    } else if (month === 12) {
        month = 0;
        year++;
    }
    monthDetails = getMonthDetails(year, month);
    // console.log(getMonthDetails(year, month))
    return {
        year,
        month,
        monthDetails
    };
    };

    // Set dynamic calendar header
    const setHeader = (year, month) => {
    calHeaderTitle.innerHTML = getMonthStr(month) + " " + year;
    };

    // Set calendar header
    setHeader(year, month);

    // 1677139200000 => "2023-02-23"
    const getDateStringFromTimestamp = (timestamp) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth();
    let date = dateObject.getDate();
    // return (
    //   dateObject.getFullYear() +
    //   "-" +
    //   (month < 10 ? "0" + month : month) +
    //   "-" +
    //   (date < 10 ? "0" + date : date)
    // );
    return `${getMonthStr(month)} ${date}, ${dateObject.getFullYear()}`;
    };

    const setDateToInput = (timestamp) => {
    let dateString = getDateStringFromTimestamp(timestamp);
    input.value = dateString;
    };
    // setDateToInput(todayTimestamp);

    // Add days row to calendar
    for (let i = 0; i < days.length; i++) {
    let div = document.createElement("div"),
        span = document.createElement("span");

    div.classList.add("cell_wrapper");
    // div.classList.add("cal_days");
    span.classList.add("cell_item");

    span.innerText = days[i].slice(0, 2);

    div.appendChild(span);
    calDays.appendChild(div);
    }

    // Add dates to calendar
    const setCalBody = (monthDetails) => {
    // Add dates to calendar
    for (let i = 0; i < monthDetails.length; i++) {
        let div = document.createElement("div"),
        span = document.createElement("span");

        div.classList.add("cell_wrapper");
        div.classList.add("cal_date");
        monthDetails[i].month === 0 && div.classList.add("current");
        monthDetails[i].month === 0 && isCurrentDay(monthDetails[i], div);
        span.classList.add("cell_item");

        // console.log(monthDetails);


        // console.log(monthDetails[i].timestamp);


        if(monthDetails[i].timestamp<today){
        div.classList.add("past");
        div.classList.remove("active");
        div.classList.remove("current")
        // console.log("These cells should be in the past ")

        
        
        }else{
        // backbtn.removeAttribute("disabled", "");
    
        // offset = -1;
            // console.log("These are dates from the future")
        }















        span.innerText = monthDetails[i].date;

        div.appendChild(span);
        calendar.appendChild(div);
    }
    };

    setCalBody(monthDetails);
    // console.log(monthDetails);

    const updateCalendar = (btn) => {
    let newCal, offset;
    if (btn.classList.contains("back")) {
        // let { year, month, monthDetails } = setHeaderNav(-1);
    offset = -1;      
    } else if (btn.classList.contains("front")) {
        // let { year, month, monthDetails } = setHeaderNav(1);
        offset = 1;
    }
    newCal = setHeaderNav(offset);
    // console.log(monthDetails)









    let monththis=new Date().getMonth();
    let yearthis=new Date().getFullYear();

    let firstDayOfNewMonthTimestamp=new Date(newCal.year, newCal.month).getTime() ;
    let timestampmonth= new Date(yearthis, monththis).getTime();
    

    let diff= (timestampmonth-firstDayOfNewMonthTimestamp)

    if(diff== 0 || firstDayOfNewMonthTimestamp<timestampmonth){


        backbtn.setAttribute("disabled", "");
    
        console.log("the day is less that new month")
    
    
    }else{
        backbtn.removeAttribute("disabled", "");

        // offset = -1;
        console.log("the moth is biggert than teew month")
        }


    setHeader(newCal.year, newCal.month);
    calendar.innerHTML = "";

    setCalBody(newCal.monthDetails);


    // let firstDayOfNewMonthTimestamp=new Date(newCal.year, newCal.month).getTime() + new Date().getTimezoneOffset() * 1000 * 60;
    let oneDay = 60 * 60 * 24 * 1000;

    // let firstDayOfNewMonthTimestamp=new Date(newCal.year, newCal.month).getTime() ;
    // let timestampmonth= new Date(yearthis, monththis).getTime();
    // console.log("here is the first day of the month timestampt" + firstDayOfNewMonthTimestamp);
    // console.log("here is today's time stamp" + monththis+ " "+ yearthis);
    // console.log(diff)

    // let todayTimestamp =
    //   Date.now() -
    //   (Date.now() % oneDay) +
    //   new Date().getTimezoneOffset() * 1000 * 60;




















    
    };

    // Only one calendar date is selected
    const selectOnClick = () => {
    document.querySelectorAll(".cell_wrapper").forEach((cell) => {
        cell.classList.contains("isSelected") && cell.classList.remove("active");

        if(cell.classList.contains("isCurrent") &&
        !cell.classList.contains("active")) {
        cell.querySelector("span").classList.add("inactive_indicator");
        }
    });
    };


    const updateInput = () => {
    let currentDay = document.querySelector(".isCurrent");

    // Update input based on clicked cell
    document.querySelectorAll(".cell_wrapper").forEach((cell) => {
        if (cell.classList.contains("current")) {
        cell.addEventListener("click", (e) => {
            let cell_date = e.target.textContent;

            currentDay !== null && currentDay.classList.remove("active");

            for (let i = 0; i < monthDetails.length; i++) {
            if (monthDetails[i].month === 0) {
                if (monthDetails[i].date.toString() === cell_date) {
                selectedDay = monthDetails[i].timestamp;
                setDateToInput(selectedDay);
                selectOnClick();

                isSelectedDay(monthDetails[i], cell);
                
                cell.querySelector('span').classList.contains('inactive_indicator') 
                && cell.querySelector('span').classList.remove('inactive_indicator');


                validateDatePicker();

                }
            }
            }
        });
        }
    });
    };

    updateInput();

    // Set header nav actions
    document.querySelectorAll(".cal-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            
            updateCalendar(btn);
            updateInput();
        });
    });

    // input.addEventListener('click', () => {
    // document.querySelector('#date_picker_calendar').classList.toggle('hidden');
    // document.querySelector('#date_picker_input').classList.toggle('showCal');
    // document.querySelector('#date').classList.toggle('onFocus');
    // });

    // cancelbtn.addEventListener('click', () => {
    // document.querySelector('#date_picker_calendar').classList.toggle('hidden');
    // document.querySelector('#date_picker_input').classList.toggle('showCal');
    // document.querySelector('#date').classList.toggle('onFocus');
    // });

    // input.addEventListener('blur', () => {
    // document.querySelector('#date_picker_calendar').classList.toggle('hidden');
    // document.querySelector('#date_picker_input').classList.toggle('showCal');
    // document.querySelector('#date').classList.toggle('onFocus');




    document.addEventListener("click" ,function (e) {
        var container = document.querySelector("#date_picker_calendar");
        var cancelbtn=document.querySelector(".datecanceliconbtn");
        var date=document.querySelector("#date");

        // console.log("e.target value     " + e.target);
        // console.log("container.containes    " +  container.contains(e.target));
        // console.log(Object.is(container, e.target))

        
        if(Object.is(date, e.target) ){
            // console.log("here I have the needed shit right here ")
            document.querySelector('#date_picker_calendar').classList.toggle('hidden');
            document.querySelector('#date_picker_input').classList.toggle('showCal');
            document.querySelector('#date').classList.toggle('onFocus');
        }
        else if(Object.is(container, e.target) || container.contains(e.target)){
            if(Object.is(cancelbtn, e.target)){
                document.querySelector('#date_picker_calendar').classList.add('hidden');
                // console.log(" I have been clicked and I am the cancel button ")
                // console.log(e.target)   
            }
            else{       
                // console.log("here no comment ")
                document.querySelector('#date_picker_calendar').classList.remove('hidden');
                // document.querySelector('#date_picker_input').classList.toggle('showCal');
                // document.querySelector('#date').classList.toggle('onFocus');

                // console.log(e.target)   

            }
        }
        else{
            // console.log("Clear date container on click outside of div ");
            document.querySelector('#date_picker_calendar').classList.add('hidden');
            // document.querySelector('#date_picker_input').classList.toggle('showCal');
            // document.querySelector('#date').classList.toggle('onFocus');
        }

    }); 





















    // Number of Travellers Main input parts code for the javascript code 
    $(document).on("click", function(e) {
        if($(".travellersiconcancelbtnicon").is(e.target)){
                $(".bothadultchilddiv").removeClass("hidetravellersdiv");
                $(".travellersmaininput").val("");
                $(".travellersiconcancelbtn").addClass("collapsetravellerscancelbtn");
                // console.log("travellers icon cancel buton has been clicked");
        }
        // var travellersmaininput=document.querySelector(".travellersmaininput");
        else if($(".travellersmaininput").is(e.target)){
            // if(Object.is(travellersmaininput, e.target) ){
                $(".bothadultchilddiv").toggleClass("hidetravellersdiv");
                    // console.log("this is it");  
                    // console.log($(".travellersmaininput").is(e.target));
                    // $(".hidetravellersdiv").toggle();
        }
        else if($(".bothadultchilddiv").is(e.target) ||  $(".bothadultchilddiv").has(e.target).length==1){
            if($(".btncanceltravellerscollapseicon").is(e.target)){
                $(".bothadultchilddiv").addClass("hidetravellersdiv");
           
                // console.log("btn canceltravellers colloapse has been clicked ");
            }
            else if( $(".travellersnumberdonebtn").is(e.target)){
                    // $(".bothadultchilddiv").removeClass("hidetravellersdiv");
                $(".bothadultchilddiv").addClass("hidetravellersdiv");

                // console.log("herei sthe4 number of travllers done button on click");

                if($(".adultinput").val()>1 && $(".childinput").val()>1 ){
                    $inputval=$(".adultinput").val() + " Adults ," + $(".childinput").val() + " Children";
                }else if($(".adultinput").val()>1 && $(".childinput").val()==0 ){
                    $inputval=$(".adultinput").val() + " Adults ," + $(".childinput").val() + " Children";     
                }
                else if($(".adultinput").val()>1 && $(".childinput").val()==1 ){ 
                    $inputval=$(".adultinput").val() + " Adult ," + $(".childinput").val() + " Child";     
                }
                else if($(".adultinput").val()<2 && $(".childinput").val()==0 ){
                    $inputval=$(".adultinput").val() + " Adult ," + $(".childinput").val() + " Children";     
                }
                else if($(".adultinput").val()<2 && $(".childinput").val()==1 ){ 
                    $inputval=$(".adultinput").val() + " Adult ," + $(".childinput").val() + " Child";     
                }
                else if($(".adultinput").val()<2 && $(".childinput").val()>1){
                    $inputval=$(".adultinput").val() + " Adult ," + $(".childinput").val() + " Children";     
                }

                $(".travellersmaininput").val($inputval)
                $(".travellersiconcancelbtn").removeClass("collapsetravellerscancelbtn");

          
                validateTravellersNumber();
            }
            else{       
                // $(".bothadultchilddiv").addClass("hidetravellersdiv");  
           
                $(".bothadultchilddiv").removeClass("hidetravellersdiv");

            }
        }
        else{
            $(".bothadultchilddiv").addClass("hidetravellersdiv");
            
        }

    }); 







        
        




    // Add the Number of travellers and subtract on click of the minus and add buttons
    $(".adultminusbtn").on("click", ()=>{
        $inputval=$(".adultinput").val();

        if( $inputval==1 ||  $inputval<2){
            $(".adultinput").val($inputval);
        }
        else{
            $inputval--;
            $(".adultinput").val($inputval);

        }
    })

    $(".adultaddbtn").on("click", ()=>{
        $(".adultinput").val();
        $inputval=$(".adultinput").val();

        $inputval++;
        $(".adultinput").val($inputval);

        // if( $inputval==20 ||  $inputval>20){
        //     $(".adultinput").val($inputval);
        // }
        // else{
        //     $inputval++;
        //     $(".adultinput").val($inputval);

        // }
    })
    
    $(".kidsminusbtn").on("click", ()=>{

        $(".childinput").val();
        $inputval=$(".childinput").val();

        if( $inputval==0 ||  $inputval<1){
            $(".childinput").val($inputval);
        }
        else{
            $inputval--;
            $(".childinput").val($inputval);

        }
    })
    
    $(".kidsaddbtn").on("click", ()=>{
        $(".childinput").val()
        $inputval=$(".childinput").val();

        $inputval++;
        $(".childinput").val($inputval);

        // if( $inputval==20 ||  $inputval>20){
            // $(".childinput").val($inputval);
        // }
        // else{
        //     $inputval++;
        //     $(".childinput").val($inputval);

        // }
    })
    





    // Select tour/Travel duration of of the tour input parts code for the javascript code 
    $(document).on("click", function(e) {
        if($(".tourdurationmaininput").is(e.target)){      
            $(".collapsetourdurationdiv").toggleClass("hidetourdurationdiv");
        }
        else if($(".tourdurationcanceliconbtnicon").is(e.target)){
                $(".collapsetourdurationdiv").removeClass("hidetourdurationdiv");  
                $(".tourdurationmaininput").val("");
                $(".tourdurationcanceliconbtn").addClass("collapsetourdurationcancelbtn");
        
                // if(!$(".travellersmaininput").val()==""){
                    // $(".travellersiconcancelbtn").addClass("collapsetravellerscancelbtn");
                //     console.log("here it  he value of the input of the maintravellers number ");
                //     console.log($(".travellersmaininput").val());
                // }else{
                //     $(".travellersiconcancelbtn").removeClass("collapsetravellerscancelbtn")
                //     console.log("here it  he value of the input of the maintravellers number of the elese ");
                //     console.log($(".travellersmaininput").val());
                // }
        }
        else if($(".collapsetourdurationdiv").is(e.target) ||  $(".collapsetourdurationdiv").has(e.target).length==1){
            if($(".btncanceltourdurationcollapseicon").is(e.target)){     
                $(".collapsetourdurationdiv").addClass("hidetourdurationdiv");
            }
            else if( $(".tourdurationdonebtn").is(e.target)){
                // $inputval;
                if($(".tourdurationinput").val()>1 ){
                    $inputval=$(".tourdurationinput").val() + " Days " ;
                }
                else{
                    $inputval=$(".tourdurationinput").val() + " Day " ;     
                }
                $(".tourdurationmaininput").val($inputval);
                $(".collapsetourdurationdiv").addClass("hidetourdurationdiv");
                $(".tourdurationcanceliconbtn").removeClass("collapsetourdurationcancelbtn")

      
                validateTourDuration();
 
            
            }
            else{       
                $(".collapsetourdurationdiv").removeClass("hidetourdurationdiv");
            }
        }
        else{
            $(".collapsetourdurationdiv").addClass("hidetourdurationdiv");
            
        }

    }); 


    // Add the Number of travellers and subtract on click of the minus and add buttons
    $(".tourdurationaddbtn").on("click", ()=>{
        $inputval=$(".tourdurationinput").val();
        $inputval++;
        $(".tourdurationinput").val($inputval);

    
    })



    $(".tourdurationminusbtn").on("click", ()=>{
        $inputval=$(".tourdurationinput").val();

        if( $inputval==1 ||  $inputval<2){
            $(".tourdurationinput").val($inputval);
        }
        else{
            $inputval--;
            $(".tourdurationinput").val($inputval);

        }
    })








































// Step 2 file upload partyh of the step 2 create4 new tour 
$imagevalidation=[]

function uploadImages(){
    $(".uploadimagesinput").on("change", function(e){
        
        // console.log(index);

        $image=$(".uploadimagesinput")[0].files[0];
        console.log("here is the images, Image");
        console.log($image);
        console.log($image.size/(1024*1024)  + " Mbs")
        console.log($image.type);
        $imgtype=$image.type.split("/");    
        console.log($imgtype[1]);
        $imagetype=$imgtype[1];
        console.log($imagetype);

        $imagevalidation=[]
        $imagetypesarray=["jpeg", "jpg", "png", "jpeg", "jpg", "svg", "jfif", "pjpeg", "pjp"];

        function validateimgtypes(){
            console.log($imagetype);

            for(let i=0; i<$imagetypesarray.length; i++){
                if($imagetype === $imagetypesarray[i]){
                    return true 
                }
                i++
            }    
        }

        $filereader=new FileReader();
        
        if($image.size>(1024*1024*10)){    
            $(`.imageerror`).html(`<div class="error mainerror" style="color:red; padding:0.5rem 0.2rem"> Image ${image.name} Size is More than 10 MBs </div>`);
        }
        else if(!validateimgtypes()){
            console.log(validateimgtypes())
            $(`.imageerror`).html(`<div class="error mainerror" style="color:red; padding:0.5rem 0.2rem"> Invalid image type, only accepts  ".png , .jpeg, .jpg, .svg, .jfif, .pjpeg, .pjp</div>`);
        }
        else{
            $(`.imageerror`).html("");

            // $filereader.onload=function(){
            $.previewimgdiv=document.createElement("div");
            let previewimg=document.createElement("img");
            $.imguploadcancelbtn=document.createElement("button");

            $.imguploadcancelbtn.setAttribute("type","button")
            
            $.imguploadcancelbtn.classList.add("uploadimgcancelbtn");

            console.log($.imguploadcancelbtn);
            $.imguploadcancelbtn.innerHTML=`<i class="fa-solid fa-x uploadimgcancelbtnicon"></i>`

            // $imguploadcancelicon.text(`<i class="fa-solid fa-x uploadimgcancelbtnicon"></i>`)


            previewimg.classList.add("previewimg")
            $.previewimgdiv.classList.add("previewimgdiv")
            
            $imgpath=URL.createObjectURL($image);
            
            // console.log($imgpath.width());
            
            
            console.log("heri s the url, createObjecturl  " + $imgpath)

            console.log(previewimg)
            console.log($.previewimgdiv)

            previewimg.setAttribute("src", $imgpath);
            $.previewimgdiv.setAttribute("style", "background-color:blue", );
            
            $imguploadcancelicon = $(".uploadimgcancelbtn:eq(0)").clone(true);

            console.log($imguploadcancelicon);
            console.log( $(".uploadimgcancelbtn:eq(0)"))

            $.previewimgdiv.append("")

            console.log($.previewimgdiv);

            $($.previewimgdiv).css({
                "background-color" :" green",
                "background-image" :`url(${$imgpath}) `,
                "background-repeat" :" no-repeat",
                // "background-attachment" :"fixed ",
                "background-position" :"center center ",
                "background-size" :"100% 100%",
            })

            // $previewimg.setAttribute("src", $imgpath);

            
            $.previewimgdiv.appendChild($.imguploadcancelbtn);
            
            $imagevalidation.push($.previewimgdiv);
            $(".uploadedimagescontainer")[0].appendChild($.previewimgdiv);
            
            console.log($(".uploadeimagescontainer").length)
            console.log($(".uploadeimagescontainer"))
            console.log($imagevalidation);
            // }
        

        // $filereader.onerror=function (){
        //     $(".mainerrormessage").html("unalbe to Select Image from Your Device")

        // }

        }
       

    })
}

uploadImages();


function validateImageContainer(){
    // console.log($("uploadedimagescontainer").length)
    if($imagevalidation.length>0){
        return true;
    }
    else{
        // $("uploadedimagescontainer")
        return false;
    }
    
    
}






// Step 3 Select the type of tour/Travel of the step 2 create4 new tour 


function typeOfTour(){

    $tourtypearray=[];

    $(".tourtypebtn").each(function(index){
        $(this).on("click", ()=>{
            $tourtypevalue=$(this).attr("value");

            if($(this).hasClass("activetourtype")){
                $(this).removeClass("activetourtype")
                $tourtypeindex=$tourtypearray.indexOf($tourtypevalue);
                $tourtypearray.splice($tourtypeindex, 1)
            }
            else{
                $(this).addClass("activetourtype")
                $tourtypearray.push($tourtypevalue)
            }

            
            $(this).css({
                
            }) 
            console.log($tourtypearray);
            console.log($(this));
            console.log($tourtypevalue)
        })
    })

}

typeOfTour()







// Step 3 Select the type of tour/Travel of the step 2 create4 new tour 


function featuresOfTour(){

    $tourfeaturesarray=[];

    $(".tourfeaturesbtn").each(function(index){
        $(this).on("click", ()=>{
            $tourfeaturevalue=$(this).attr("value");

            if($(this).hasClass("activetourfeature")){
                $(this).removeClass("activetourfeature")
                $tourfeatureindex=$tourfeaturesarray.indexOf($tourfeaturevalue);
                $tourfeaturesarray.splice($tourfeatureindex, 1)
            }
            else{
                $(this).addClass("activetourfeature")
                $tourfeaturesarray.push($tourfeaturevalue)
            }

            
            $(this).css({
                
            }) 
            console.log($tourfeaturesarray);
            console.log($(this));
            console.log($tourfeaturevalue)
        })
    })

}

featuresOfTour()


// Step 5 Select  the type of Transportation means of the tour/Travel of 


function transportmeansOfTour(){

    $transportmeansarray=[];

    $(".transportselectinput").each(function(index){
        $(this).on("click", ()=>{
            // console.log("here is the clickd on the input transprot ")
            // $(".pickupselect").addClass("toggletransportselect");
            
            // console.log(e.target)
            // $transportmeansvalue
            $(".transportselectoptions").each(function(index){
                $(this).on("click", ()=>{
                    $transportmeansvalue=$(this).attr("value");

                    $firstvaluecharacter=$transportmeansvalue.charAt(0).toUpperCase();
                    $restofvaluecharacters=$transportmeansvalue.slice(1);

                    $transportselectedvalue=$firstvaluecharacter + $restofvaluecharacters;
                    console.log($transportselectedvalue);

                    $(".transportselectinput").val($transportselectedvalue);
                    // console.log($transportmeansvalue)
                    $(".transportselectcancelbtn").addClass("transportcancelbtnshow")
                    console.log("consoele this first ")
                    console.log( $(".transportselectcancelbtn")) 

                })
            })

            $(".transportselectcancelbtn").on("click", ()=>{
                $(".transportselectinput").val("");
                $(".transportselectcancelbtn").removeClass("transportcancelbtnshow")
            })
            
            // console.log($transportmeansarray);
            // console.log($(this));
            // console.log($transportmeansvalue)
        })

        $(this).on("keyup", ()=>{
            if($(".transportselectinput").val()==""){
                $(".transportselectcancelbtn").removeClass("transportcancelbtnshow")
            }else{
                $(".transportselectcancelbtn").addClass("transportcancelbtnshow")
            }
        })

    })

    $(document).on("click", (e)=>{
        // console.log($(".transportselectcancelbtn"))
        
        $(".transportselectinput")
        console.log(e.target);
        if($(".transportselectinput").is(e.target)){
            $(".pickupselect").toggleClass("toggletransportselect");
            console.log("here is the togllge from inputtransport")
        }
        else if($(".pickupselectdiv").is(e.target) || $(".pickupselectdiv").has(e.target).length==1){
            
            if($(".transportselectcancelbtn").is(e.target)){
                $(".pickupselect").addClass("toggletransportselect");
                console.log("here content for cancelbtntransport ")

            }else if($(".transportselectoptions").is(e.target)){
                console.log("transportselectoptions");
                $(".pickupselect").removeClass("toggletransportselect");
                
            }
            else{
                $(".pickupselect").addClass("toggletransportselect");
                console.log("here content for inside container but is options ")
            }

        }
        else{
            $(".pickupselect").removeClass("toggletransportselect");
            console.log("here content Outside of whole container ")            
        }

    })

    function replecateTourDurationDays(){
        
            $(".addtransportday").on("click", ()=>{
        
            })

    }



    replecateTourDurationDays()

}

transportmeansOfTour()





})