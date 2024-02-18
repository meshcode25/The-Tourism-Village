//on load 
window.onload = ()=>{
    windowWidth();
}


//Meadi queries 
var mediaQueries=["450", "768", "992", "1200"]

function windowWidth(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    console.log("Window size: " + windowWidth + " x " + windowHeight);
    return windowWidth
}

//importing Elements from HTML
var chevron=document.getElementsByClassName("dropdown")
var mainnavlinklist=document.getElementsByClassName("mainnavlinklisted");
var mainnavlinks= document.getElementsByClassName("mainnavlink");    

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

if(innerWidth < mediaQueries[0]){


}
else{

}

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

}, )

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


    currentvalue.addEventListener("click", ()=>{

        console.log("here is the current value")  
        console.log(currentvalue)

        if(chevron[index].classList.contains("fa-rotate-180")){
                
            chevron[index].style.transition="all 1s ease"          
            chevron[index].classList.remove("fa-rotate-180") 
            
            chevron[index].style.color="green";
            

            console.log('Bigcollapsedivs has been I the cheveron have been clicked')

            showingcolumn[index].classList.add("collapsingcolumn")

        }
        else{
            chevron[index].style.transition="all 1s ease"                   
            chevron[index].classList.add("fa-rotate-180")  
            chevron[index].style.color="blue";


            console.log('Bigcollapsedivs has been I the cheveron have been clicked')
            showingcolumn[index].classList.remove("collapsingcolumn")

          }
    })
})

    
    



