var tourchevron=document.getElementsByClassName("tourchevron")
    
    
var mainnavlink=document.getElementsByClassName("mainnavlink");



mainnavlink[0].addEventListener("click", ()=>{
    if(tourchevron[0].classList.contains("fa-rotate-180")){

        tourchevron[0].classList.remove("fa-rotate-180")    
    }
    else{
        tourchevron[0].classList.add("fa-rotate-180")            
    }
    
    
})


