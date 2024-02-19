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
    screensize=windowWidth;
    return windowWidth
}

console.log( "here is the media queries " + screensize);

//importing Elements from HTML
var chevron=document.getElementsByClassName("dropdown");
var caret =document.getElementsByClassName("caret");
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

if(screensize < mediaQueries[1]){
    //This is the beginnning of the of the mobile responsiveneness media querry
        //this is the end of the mobile responsiveneness media querry
    //this is the end of the mobile responsiveneness media querry
    mainnavlink.forEach((currentvalue, index,array)=>{
        var events= ["mouseenter", "mouseclick", "mouseleave"]
        
        // var screensize=windowWidth;
        
        console.log("Here is the screen size" )
        
        
    
        currentvalue.addEventListener("mouseenter", ()=>{
         
    
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
    
        currentvalue.addEventListener("mouseenter", ()=>{
    
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
        
    
       
        currentvalue.addEventListener("mouseleave", ()=>{
    
            caret[index].style.transition="all 1s ease"          
            caret[index].classList.remove("fa-rotate-180") 
            
            caret[index].style.color="green";
            
    
            showingcolumn[index].classList.add("collapsingcolumn")
        })
    
    
    })
    
        
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
    
    
    
        currentvalue.addEventListener("mouseout", ()=>{
    
        caret[index].style.transition="all 1s ease"          
        caret[index].classList.remove("fa-rotate-180") 
    
        caret[index].style.color="green";
    
    
        showingcolumn[index].classList.add("collapsingcolumn")
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
    
        currentvalue.addEventListener("mouseover", ()=>{
    
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
        
    
       
        currentvalue.addEventListener("mouseout", ()=>{
    
            caret[index].style.transition="all 1s ease"          
            caret[index].classList.remove("fa-rotate-180") 
            
            caret[index].style.color="green";
            
    
            showingcolumn[index].classList.add("collapsingcolumn")
        })
    
    
    })
    
        
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
    
    
    
        currentvalue.addEventListener("mouseout", ()=>{
    
        caret[index].style.transition="all 1s ease"          
        caret[index].classList.remove("fa-rotate-180") 
    
        caret[index].style.color="green";
    
    
        showingcolumn[index].classList.add("collapsingcolumn")
        })
    
            
        
}





