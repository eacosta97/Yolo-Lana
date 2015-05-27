/**
* Created with Pac-Man.
* User: eacosta97
* Date: 2015-03-02
* Time: 10:26 PM
* To change this template use Tools | Templates.
*/
$(document).ready(function(){
var pacMan = document.getElementById("Memo");
/*
if(collision('#Memo','#Wall1')){
    
}
*/
  
  
document.addEventListener('keydown', movepacman);

/* @Desc: The code makes pacman move
 *
 */

/*
switch(direction){
       case 'left':
        console.log('going left')
        break;
    case 'right':
        console.log('going right')
       break;
        default:
        console.log('no direction')    
        break;
}
*/

function movepacman(evt) {
    if(evt.keyCode === 87){
        //block of code to be excuted if the condition is true  

       
    }
    if(evt.keyCode === 83 ){ // Down Arrow
        
    
        // Grab the current top value and store in a temp variable called "tempTop"
        var tempTop = pacMan.style.top
        
        // Change the value of tempTop into an integer
         tempTop = parseInt(tempTop); 
        
        // Increase the value of tempTop by 5
        tempTop = tempTop + 5;
        
        // Change the value of tempTop to a string with "px" at the end
        tempTop = tempTop + "px"
        
       
        // set the top value to tempTop
          pacMan.style.top = tempTop; 
    }
    if(evt.keyCode === 65 ){//left
        // Grab the current top value and store in a temp variable called "tempTop"
        var tempLeft = pacMan.style.left;
        
        // Change the value of tempTop into an integer
         tempLeft = parseInt(tempLeft); 
        
        // Increase the value of tempTop by 5
        tempLeft = tempLeft - 5;
        
        // Change the value of tempTop to a string with "px" at the end
        tempLeft = tempLeft + "px"
        
        // set the top value to tempTop
          pacMan.style.left = tempLeft;   

    }
    if(evt.keyCode === 80){
       // Grab the current top value and store in a temp variable called "tempTop"
        var tempLeft = pacMan.style.left;
        
        // Change the value of tempTop into an integer
         tempLeft = parseInt(tempLeft); 
        
        // Increase the value of tempTop by 5
        tempLeft = tempLeft - 5;
        
        // Change the value of tempTop to a string with "px" at the end
        tempLeft = tempLeft + "px"
        
        // set the top value to tempTop
          pacMan.style.left = tempLeft;   
       }
    
    
pacMan.innerHTML = collision("#Memo", "Wall1");
    
  if(collision($("#Memo"), $("Wall1")) || collision($("#Memo"), $("Wall2")) || collision($("#Memo"), $("Wall3")) || collision($("Memo"), $("#Wall4")) || collision($("#Memo"), $("Wall5")) || collision($("#Memo"), $("Wall6")) || collision($("#Memo"), $("Wall7")) || collision($("#Memo"), $("Wall8")) || collision($("#Memo"), $("Wall9")) || collision($("#Memo"), $("Wall10")) || collision($("#Memo"), $("Wall11")) || collision($("#Memo"), $("Wall12"))){
      
      pacMan.innerHTML = "You Lose!";
  } 
}     
 
    
      
function collision(div1, div2) {
      var x1 = $(div1).offset().left;
      var y1 = $(div1).offset().top;
      var h1 = $(div1).outerHeight(true);
      var w1 = $(div1).outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $(div2).offset().left;
      var y2 = $(div2).offset().top;
      var h2 = $(div2).outerHeight(true);
      var w2 = $(div2).outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }    
     });