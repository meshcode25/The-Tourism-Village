$(document).ready(function(){


//on load 

let screensize;

window.onload = ()=>{
    windowWidth();
}


//Meadi queries 
var mediaQueries=["450", "768", "992", "1200"]

function windowWidth(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    console.log("Window size: " + windowWidth + " x " + windowHeight);
    return screensize=windowWidth;
    
}

console.log( "here is the media queries " + windowWidth());

//importing Elements from HTML
var chevron=document.getElementsByClassName("dropdown");
var caret =document.getElementsByClassName("caret");
var mainnavlinklist=document.getElementsByClassName("mainnavlinklisted");
var mainnavlinke= document.getElementsByClassName("mainnavlink");    

var bigcollapse=document.getElementsByClassName("bigCollapsediv");
var collapsedivs=document.getElementsByClassName("collapsediv");
var collapsingdiv=document.getElementsByClassName("showing");
var bigcollapsecolumncontainer=document.getElementsByClassName("bigcollapsecolumncontainer");
var bigcollapsecolumheader=document.getElementsByClassName("bigcollapsecolumheader");
var showingcolumn=document.getElementsByClassName("showingcolumn");
var searchcollapseoption=document.getElementsByClassName('mainsearchoptions');


console.log(bigcollapse);
console.log(collapsedivs);
    


var mainnavlink=[...mainnavlinklist];
var bigcollapsecolumnheaders=[...bigcollapsecolumheader]
var showingcolumns=[...showingcolumn]
var bigcollapsecolumncontainers=[...bigcollapsecolumncontainer]
var mainnavlinks=[...mainnavlinke]
var mainsearchoptions=[...searchcollapseoption]

if(screensize < mediaQueries[1]){
    //This is the beginnning of the of the mobile responsiveneness media querry
        //this is the end of the mobile responsiveneness media querry
    //this is the end of the mobile responsiveneness media querry
    console.log("this is the width of this shit and it's less than the mobile screen size by " +  screensize)




    mainnavlink.forEach((currentvalue, index,array)=>{
        var events= ["mouseenter", "mouseclick", "mouseleave"]
        
        // var screensize=windowWidth;
        
        console.log("Here is the screen size" )
        
        
    
        currentvalue.addEventListener("mouseover", ()=>{
         
    
            console.log("lets see what these guys give out");
            console.log(currentvalue)
            
            
    
            
            if(chevron[index].classList.contains("fa-rotate-180")){
    
                chevron[index].style.transition="all 1s ease"          
                chevron[index].classList.remove("fa-rotate-180") 
    
                chevron[index].style.color="green";
    
            
                collapsingdiv[index].classList.add("collapsing")
             
           
    
            }
            else{
                chevron[index].style.transition="all 1s ease"                   
                chevron[index].classList.add("fa-rotate-180")  
                chevron[index].style.color="blue";
    
                
    
                console.log('I the cheveron has gotten a mouseover ')
    
                collapsingdiv[index].classList.remove("collapsing")
             
                
            }
        })
    })
    
    // mainnavlink.forEach((currentvalue, index,array)=>{
     mainnavlinks.forEach((currentvalue, index,array)=>{


            currentvalue[index].addEventListener("click", ()=>{
                
                
                
                if(chevron[index].classList.contains("fa-rotate-180")){
    
                    chevron[index].style.transition="all 1s ease"          
                    chevron[index].classList.remove("fa-rotate-180") 
                    
                    chevron[index].style.color="green";
                    
    
                    console.log('I the cheveron have been clicked')
    
                    collapsingdiv[index].classList.add("collapsing")
     
                }
                else{
                    chevron[index].style.transition="all 1s ease"                   
                    chevron[index].classList.add("fa-rotate-180")  
                    chevron[index].style.color="blue";
    
             
    
                    console.log("Attribute should be removed ")
                    collapsingdiv[index].classList.remove("collapsing")
    
                  }
            })
                
    })
    
    
    
    mainnavlink.forEach((currentvalue, index,array)=>{
        currentvalue.addEventListener("mouseout", ()=>{
         
            console.log("lets see what these guys give out");
            console.log(currentvalue)
    
    
            chevron[index].style.transition="all 1s ease"          
            chevron[index].classList.remove("fa-rotate-180") 
            chevron[index].style.color="green";
    
            collapsingdiv[index].classList.add("collapsing")
    
            
                
            mainnavlinks[index].addEventListener("click", ()=>{
                
                
                if(chevron[index].classList.contains("fa-rotate-180")){
                    
                    chevron[index].style.transition="all 1s ease"          
                    chevron[index].classList.remove("fa-rotate-180") 
                    
                    chevron[index].style.color="green";
                    
    
                    console.log('I the cheveron have been clicked')
    
                    collapsingdiv[index].classList.add("collapsing")
     
                }
                else{
                    chevron[index].style.transition="all 1s ease"                   
                    chevron[index].classList.add("fa-rotate-180")  
                    chevron[index].style.color="blue";
    
    
                    console.log("Attribute should be removed ")
                    collapsingdiv[index].classList.remove("collapsing")
    
                  }
            })
            })
    
    }, )
      
    
    bigcollapsecolumncontainers.forEach((currentvalue,index, array)=>{
    
        currentvalue.addEventListener("mousover", ()=>{
    
            if(caret[index].classList.contains("fa-rotate-180")){
                    
                caret[index].style.transition="all 1s ease"          
                caret[index].classList.remove("fa-rotate-180") 
                
                caret[index].style.color="green";
                
    
                console.log('Bigcollapsedivs has been I the cheveron have been clicked')
    
                showingcolumn[index].classList.add("collapsingcolumn")
    
            }
            else{
                caret[index].style.transition="all 1s ease"                   
                caret[index].classList.add("fa-rotate-180")  
                caret[index].style.color="blue";
    
    
                console.log('Bigcollapsedivs has been I the cheveron have been clicked')
                showingcolumn[index].classList.remove("collapsingcolumn")
    
            }
    
    
    
    
        })
    
    
    
    
    })
        bigcollapsecolumncontainers.forEach((currentvalue,index, array)=>{

            bigcollapsecolumnheaders[index].addEventListener("click", ()=>{
    
                console.log("here is the current value")  
                console.log(currentvalue)
        
                if(caret[index].classList.contains("fa-rotate-180")){
                        
                    caret[index].style.transition="all 1s ease"          
                    caret[index].classList.remove("fa-rotate-180") 
                    
                    caret[index].style.color="green";
                    
        
                    console.log('Bigcollapsedivs has been I the cheveron have been clicked')
        
                    showingcolumn[index].classList.add("collapsingcolumn")
        
                }
    
                else{
                    caret[index].style.transition="all 1s ease"                   
                    caret[index].classList.add("fa-rotate-180")  
                    caret[index].style.color="blue";
        
        
                    console.log('Bigcollapsedivs has been I the cheveron have been clicked')
                    showingcolumn[index].classList.remove("collapsingcolumn")
        
                    }
        })
        
        })

        bigcollapsecolumncontainers.forEach((currentvalue,index, array)=>{

        currentvalue.addEventListener("mouseleave", ()=>{
    
            caret[index].style.transition="all 1s ease"          
            caret[index].classList.remove("fa-rotate-180") 
            
            caret[index].style.color="green";
            
    
            showingcolumn[index].classList.add("collapsingcolumn")
        })
    
    
    })
    
            
        
}
    //this is the end of the mobile responsiveneness media querry


else{

    mainnavlink.forEach((currentvalue, index,array)=>{
        var events= ["mouseenter", "mouseclick", "mouseleave"]
        
        // var screensize=windowWidth;
        
        console.log("Here is the screen size" )
        
        
    
        currentvalue.addEventListener("mouseover", ()=>{
         
    
            console.log("lets see what these guys give out");
            console.log(currentvalue)
            
            
    
            
            if(chevron[index].classList.contains("fa-rotate-180")){
    
                chevron[index].style.transition="all 1s ease"          
                chevron[index].classList.remove("fa-rotate-180") 
    
                chevron[index].style.color="green";
    
            
                collapsingdiv[index].classList.add("collapsing")
             
           
    
            }
            else{
                chevron[index].style.transition="all 1s ease"                   
                chevron[index].classList.add("fa-rotate-180")  
                chevron[index].style.color="blue";
    
                
    
                console.log('I the cheveron has gotten a mouseover ')
    
                collapsingdiv[index].classList.remove("collapsing")
             
                
            }
    
    
            mainnavlinks[index].addEventListener("click", ()=>{
                
                
                
                if(chevron[index].classList.contains("fa-rotate-180")){
    
                    chevron[index].style.transition="all 1s ease"          
                    chevron[index].classList.remove("fa-rotate-180") 
                    
                    chevron[index].style.color="green";
                    
    
                    console.log('I the cheveron have been clicked')
    
                    collapsingdiv[index].classList.add("collapsing")
     
                }
                else{
                    chevron[index].style.transition="all 1s ease"                   
                    chevron[index].classList.add("fa-rotate-180")  
                    chevron[index].style.color="blue";
    
             
    
                    console.log("Attribute should be removed ")
                    collapsingdiv[index].classList.remove("collapsing")
    
                  }
            })
                
            })
    
    })
    
    mainnavlink.forEach((currentvalue, index,array)=>{

        currentvalue.addEventListener("mouseout", ()=>{
         
            console.log("lets see what these guys give out");
            console.log(currentvalue)
    
    
            chevron[index].style.transition="all 1s ease"          
            chevron[index].classList.remove("fa-rotate-180") 
            chevron[index].style.color="green";
    
            collapsingdiv[index].classList.add("collapsing")
    
            
                
            mainnavlinks[index].addEventListener("click", ()=>{
                
                
                if(chevron[index].classList.contains("fa-rotate-180")){
                    
                    chevron[index].style.transition="all 1s ease"          
                    chevron[index].classList.remove("fa-rotate-180") 
                    
                    chevron[index].style.color="green";
                    
    
                    console.log('I the cheveron have been clicked')
    
                    collapsingdiv[index].classList.add("collapsing")
     
                }
                else{
                    chevron[index].style.transition="all 1s ease"                   
                    chevron[index].classList.add("fa-rotate-180")  
                    chevron[index].style.color="blue";
    
    
                    console.log("Attribute should be removed ")
                    collapsingdiv[index].classList.remove("collapsing")
    
                }
            })
        })
    
    })
      
    
    
    
}
    // This is the beginining of the body part of the website
    // .introjumbotron{
    //     /* background-color:yellow; */
    // }
    // .formdiv{
    //     background-color: bisque; 
    //     padding:1rem;
    //     /* background-color:blue; */
    // }
    // .mainsearchform{
        
    // }
    // .selectdestinycheckbox{
    //     background-color: blue;
    //     height:500px;
    //     width:100%;
    // }
    // .destinationsearchlabel{
    //     position:relative;
    //     top:-2.7rem;
    //     font-size:medium;
    //     color:gray;
    //     left:0rem;
    //     padding:0.5rem;
    // }

    // .mainsearchinput{
    //     font-size:medium;
    //     padding:1.5rem 0.5rem ;
    //     outline: none;
    //     border:3px solid violet;
    //     color:blue;
    // }
    // .searchcollapsediv{
    //     width:100%;
    //     height:500px;
    //     border-radius: 15px;
    //     background-color: green;
    //     display:none;
    // }
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






