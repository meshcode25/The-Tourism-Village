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


    console.log(mainsearchinput);


   
    
    //sign up validation //
    //gmail validation
    console.log(mainsearchinput);







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
                        "transition": "all 0.5s ease"
                    
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
            console.log(optionslist[i].getAttribute("value"));
            i++
        }

        $(`.searchselectcollapse:eq(${index})`).children(".mainsearchoptions").each((indexx, currentoption)=>{  
            // console.log(`here is the chosen option ${currentoption}`);   
            currentoption.addEventListener("mouseover", ()=>{
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
                console.log(`here is the index of mainserchoption ${index}`);

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
        cell.classList.add("active");
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


        console.log(monthDetails[i].timestamp);


        if(monthDetails[i].timestamp<today){
        div.classList.add("past");
        div.classList.remove("active");
        div.classList.remove("current")
        console.log("These cells should be in the past ")

        
        
        }else{
        // backbtn.removeAttribute("disabled", "");
    
        // offset = -1;
            console.log("These are dates from the future")
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

    input.addEventListener('click', () => {
    document.querySelector('#date_picker_calendar').classList.toggle('hidden');
    document.querySelector('#date_picker_input').classList.toggle('showCal');
    document.querySelector('#date').classList.toggle('onFocus');
    });

    cancelbtn.addEventListener('click', () => {
    document.querySelector('#date_picker_calendar').classList.toggle('hidden');
    document.querySelector('#date_picker_input').classList.toggle('showCal');
    document.querySelector('#date').classList.toggle('onFocus');
    });

    calwrapper.addEventListener('onblur', () => {
    document.querySelector('#date_picker_calendar').classList.toggle('hidden');
    document.querySelector('#date_picker_input').classList.toggle('showCal');
    document.querySelector('#date').classList.toggle('onFocus');




    document.addEventListener("click" ,function (e) {
        var container = calwrapper;
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            document.querySelector('#date_picker_calendar').classList.toggle('hidden');
            document.querySelector('#date_picker_input').classList.toggle('showCal');
            document.querySelector('#date').classList.toggle('onFocus');
        }
        else{
        console.log("boolshit")
        }
    }); 


    });


    // Number of Travellers Main input parts code for the javascript code 
    $(".travellersmaininput").on("click", ()=>{
        $(".bothadultchilddiv").removeClass("hidetravellersdiv");
    }) 

    $(".travellersiconcancelbtn").on("click",()=>{
        $(".bothadultchilddiv").removeClass("hidetravellersdiv");

        $(".travellersmaininput").val("");

        $(".travellersiconcancelbtn").addClass("collapsetravellerscancelbtn");

        // if(!$(".travellersmaininput").val()==""){
            // $(".travellersiconcancelbtn").addClass("collapsetravellerscancelbtn");
        //     console.log("here it  he value of the input of the maintravellers number ");
        //     console.log($(".travellersmaininput").val());
        // }else{
        //     $(".travellersiconcancelbtn").removeClass("collapsetravellerscancelbtn")
        //     console.log("here it  he value of the input of the maintravellers number of the elese ");
        //     console.log($(".travellersmaininput").val());
        // }



    })

    $(".btncanceltravellerscollapse").on("click",()=>{
        $(".bothadultchilddiv").addClass("hidetravellersdiv");
    })

    $(".travellersnumberdonebtn").on("click", ()=>{
        $(".bothadultchilddiv").addClass("hidetravellersdiv");

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


        $(".travellersiconcancelbtn").removeClass("collapsetravellerscancelbtn")
        
        
    })



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
    $(".tourdurationmaininput").on("click", ()=>{
        $(".collapsetourdurationdiv").removeClass("hidetourdurationdiv");
    }) 

    $(".tourdurationcanceliconbtn").on("click",()=>{
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



    })

    $(".btncanceltourdurationcollapse").on("click",()=>{
        $(".collapsetourdurationdiv").addClass("hidetourdurationdiv");
    })


    $(".tourdurationdonebtn").on("click", ()=>{
        $(".collapsetourdurationdiv").addClass("hidetourdurationdiv");

        // $inputval;

        if($(".tourdurationinput").val()>1 ){
            $inputval=$(".tourdurationinput").val() + " Days " ;
        }else{
            $inputval=$(".tourdurationinput").val() + " Day " ;     
        }

        $(".tourdurationmaininput").val($inputval);


        $(".tourdurationcanceliconbtn").removeClass("collapsetourdurationcancelbtn")
        
        
    })



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


    













})