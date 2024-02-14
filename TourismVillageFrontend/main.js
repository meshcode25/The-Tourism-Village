window.onload = ()=>{
    windowWidth();
}

function windowWidth(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    console.log("Window size: " + windowWidth + " x " + windowHeight);
    return windowWidth
}

var mediaQueries=["450", "768", "992", "1200" ]

var chevron=document.getElementsByClassName("dropdown")
    
    
var mainnavlinklist=document.getElementsByClassName("mainnavlinklisted");

    

var mainnavlink=[...mainnavlinklist];

mainnavlink.forEach((currentvalue, index,array)=>{
    var events= ["mouseenter", "mouseclick", "mouseleave"]
    
    // var screensize=windowWidth;
    
    console.log("Here is the screen size" )
    
    

    currentvalue.addEventListener("mouseenter" || "click", ()=>{
     
        console.log("lets see what these guys give out");
        console.log(currentvalue)
        
        // var clickedornot= currentvalue.isclicked()
        // console.log(clickedornot);
        
        if(chevron[index].classList.contains("fa-rotate-180")){
            // chevron[i].classList.remove("dropdown")
            chevron[index].style.transition="all 1s ease"          
            chevron[index].classList.remove("fa-rotate-180") 
            // chevron[index].style.transform="rotate(180deg)"
            chevron[index].style.color="green";


        }
        else{
            // chevron[i].classList.add("dropdown")
            chevron[index].style.transition="all 1s ease"                   
            chevron[index].classList.add("fa-rotate-180")  
            chevron[index].style.color="blue";

        }
            
        })

}, )

mainnavlink.forEach((currentvalue, index,array)=>{
    currentvalue.addEventListener("mouseleave" || "click", ()=>{
     
        console.log("lets see what these guys give out");
        console.log(currentvalue)
        
            
        if(chevron[index].classList.contains("fa-rotate-180")){
            // chevron[i].classList.remove("dropdown")
            chevron[index].style.transition="all 1s ease"          
            chevron[index].classList.remove("fa-rotate-180") 
            // chevron[index].style.transform="rotate(180deg)"
            chevron[index].style.color="green";


        }
        else{
            // chevron[i].classList.add("dropdown")
            chevron[index].style.transition="all 1s ease"                   
            chevron[index].classList.add("fa-rotate-180")  
            chevron[index].style.color="blue";

        }
            
        })

}, )
  



    
    



