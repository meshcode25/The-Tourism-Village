var chevron=document.getElementsByClassName("dropdown")
    
    
var mainnavlinklist=document.getElementsByClassName("mainnavlinklisted");

    

var mainnavlink=[...mainnavlinklist];

mainnavlink.forEach((currentvalue, index,array)=>{
    currentvalue.addEventListener("mouseenter", ()=>{
     
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

mainnavlink.forEach((currentvalue, index,array)=>{
    currentvalue.addEventListener("mouseleave", ()=>{
     
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
  



    
    



