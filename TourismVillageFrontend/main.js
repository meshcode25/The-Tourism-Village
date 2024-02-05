var chevron=document.getElementsByClassName("dropdown")
    
    
var mainnavlink=document.querySelectorAll(".mainnavlink");


console.log(`here is the list of the chevron  ${chevron}`)
console.log(chevron)
console.log( `here is the list for the mainnavlink ${ mainnavlink} `)
console.log(mainnavlink)
    
    

for(i=0; i<mainnavlink.length; i++){
    mainnavlink[i].addEventListener("click", ()=>{
        console.log(`here is the clicked shit  ${mainnavlink[i]}   `)
    })

}

// mainnavlink[i].addEventListener("click", ()=>{   
//     console.log("here is the i for chevron  " + i)

//     console.log("here is the i for mainnavlink + "+ i) 

//     if(mainnavlink[].classList.contains("fa-rotate-180")){
//         // chevron[i].classList.remove("dropdown")
//         chevron[count].style.transition="all 1s ease"          
//         chevron[count].classList.remove("fa-rotate-180") 

//     }

//     else{
//         // chevron[i].classList.add("dropdown")
//         chevron[count].style.transition="all 1s ease"                   
//         chevron[count].classList.add("fa-rotate-180")  

//     }


// })

    
    



