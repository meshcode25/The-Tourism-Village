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



console.log(bigcollapse);
console.log(collapsedivs);
    


var mainnavlink=[...mainnavlinklist];
var bigcollapsecolumnheaders=[...bigcollapsecolumheader]
var showingcolumns=[...showingcolumn]
var bigcollapsecolumncontainers=[...bigcollapsecolumncontainer]
var mainnavlinks=[...mainnavlinke]

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
            "left":"0rem",
        });


        $(".searchcollapsediv").css({
            "display":"block"
        })
    })
// on focuss out 
    // $(".mainsearchinput").on("focusout", function (){
    //     $(".destinationsearchlabel").css({
    //         "position":"relative",
    //         "top":"-2.7rem",
    //         "font-size":"medium",
    //         "color":"gray",
    //         "left":"10px",
    //         "padding":"0.5rem", 
    //         /* /* margin-left:10px; */
    //         "padding":"0", 
    //         "margin":"0",
    //         "pointer-events":" none",
    //     });


    //     $(".searchcollapsediv").css({
    //         "display":"none"
    //     })
    // })

    // $(".searchcollapsediv").on("mousesenter", function (){
    //     $(".destinationsearchlabel").css({
    //         "position":"relative",
    //         "top":"-2.7rem",
    //         "font-size":"medium",
    //         "color":"gray",
    //         "left":"10px",
    //         "padding":"0.5rem", 
    //         /* /* margin-left:10px; */
    //         "padding":"0", 
    //         "margin":"0",
    //         "pointer-events":" none",
    //     });


    //     $(".searchcollapsediv").css({
    //         "display":"block    "
    //     })
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
                    
})   






