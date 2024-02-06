var chevron=document.getElementsByClassName("dropdown")
    
    
var mainnavlinklist=document.getElementsByClassName("mainnavlink");

    

var mainnavlink=[...mainnavlinklist];

mainnavlink.forEach((currentvalue, index,array)=>{
    currentvalue.addEventListener("click", ()=>{
     
        console.log("lets see what these guys give out");
        console.log(currentvalue)
        console.log(index);
        console.log(array)

        console.log(chevron)
            
        if(currentvalue.classList.contains("fa-rotate-180")){
            // chevron[i].classList.remove("dropdown")
            chevron[index].style.transition="all 1s ease"          
            chevron[index].classList.remove("fa-rotate-180") 

        }
        else{
            // chevron[i].classList.add("dropdown")
            chevron[index].style.transition="all 1s ease"                   
            chevron[index].classList.add("fa-rotate-180")  

        }
            
        })

}, )
  



    
    



