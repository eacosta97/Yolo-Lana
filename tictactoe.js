
var cell1 = document.getElementById("cell1");
var debug = document.getElementById("debug");
cell1.addEventListener("click", output);
document.getElementById("cell2").addEventListener("click", output);
document.getElementById("cell3").addEventListener("click", output);
document.getElementById("cell4").addEventListener("click", output);
document.getElementById("cell5").addEventListener("click", output);
document.getElementById("cell6").addEventListener("click", output);
document.getElementById("cell7").addEventListener("click", output);
document.getElementById("cell8").addEventListener("click", output);
document.getElementById("cell9").addEventListener("click", output);
var roundNum = 1;
var turn = "X";

function output(e){
    var clickedCell = e.target;
//    find which cell was clicked.

    
//    check cell is blank.
    if (clickedCell.innerHTML === "") {
      //place mark.
       clickedCell.innerHTML = turn;
                
        
//    update whose turn it is.
        if (turn === "X") {
             turn = "O";
        } else{
            turn = "X";
            
 //       alert(turn);
        }
        checkBoard();
    }
}

function checkBoard(){
    

    // check horizontals
    //alert(document.getElementById("cell1").innerHTML.length);
    if ((cell1.innerHTML == document.getElementById("cell2").innerHTML) && (document.getElementById("cell2").innerHTML ==  document.getElementById("cell3").innerHTML && cell1.innerHTML.length === 1)){
 
        
        alert("You WIN!");
    }
    if ((document.getElementById("cell4").innerHTML == document.getElementById("cell5").innerHTML) && (document.getElementById("cell5").innerHTML ==  document.getElementById("cell6").innerHTML && document.getElementById("cell4").innerHTML.length === 1)){
        
        
        alert("You WIN!");
    }
    if ((document.getElementById("cell7").innerHTML == document.getElementById("cell8").innerHTML) && (document.getElementById("cell8").innerHTML ==  document.getElementById("cell9").innerHTML && document.getElementById("cell7").innerHTML.length === 1)){
        
        
        alert("You WIN!");
    }
    // check verticals
    if ((document.getElementById("cell1").innerHTML == document.getElementById("cell4").innerHTML) && (document.getElementById("cell4").innerHTML ==  document.getElementById("cell7").innerHTML && cell1.innerHTML.length === 1)){
        alert("You WIN!");
    }
    if ((document.getElementById("cell2").innerHTML == document.getElementById("cell5").innerHTML) && (document.getElementById("cell5").innerHTML ==  document.getElementById("cell8").innerHTML && document.getElementById("cell2").innerHTML.length === 1)){
        
        alert("You WIN!");
    }
    if ((document.getElementById("cell3").innerHTML == document.getElementById("cell6").innerHTML) && (document.getElementById("cell6").innerHTML ==  document.getElementById("cell9").innerHTML && document.getElementById("cell3").innerHTML.length === 1)){
        
        
        alert("You WIN!");
    }
    // check diaganols
    if ((document.getElementById("cell1").innerHTML == document.getElementById("cell5").innerHTML) && (document.getElementById("cell5").innerHTML ==  document.getElementById("cell9").innerHTML && document.getElementById("cell1").innerHTML.length === 1)){
    
        alert("You WIN!");
    }
    if ((document.getElementById("cell3").innerHTML == document.getElementById("cell5").innerHTML) && (document.getElementById("cell5").innerHTML ==  document.getElementById("cell7").innerHTML && document.getElementById("cell3").innerHTML.length === 1)){
        
        
        alert("You WIN!");
    }
}