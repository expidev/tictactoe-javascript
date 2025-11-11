
// Step 1: declare the object for player1 and player2 with name and color
const player1 = {
    name : "X",
    color : "red"
}
const player2 = {
    name : "O",
    color : "green"
}
// Step 2 : Declare the overall function output the 3*3 grid with their corresponding attributes
const output = function(){
    // First, set the tictactoe ID where to display the grid with empty string
    // disable the the player's input while the button play is clicked
    // Set a print to show the Player's turn
    document.querySelector('#tictactoe').textContent = "";
    document.querySelector("#print").textContent = "Player 1' s turn!";

    //iterate to get the boxes from 1 to 9 with ID from b1 to b9
    //Append them as input elements to the section tag with the tictactoe ID
    //Set their attribute such as the readonly = true, type= text
    for (let i=1; i<10; i++){
        let id = 'b' + i;
        const input = document.createElement("input");        
        input.textContent ="";
        input.setAttribute('type', 'text');
        input.setAttribute('readonly', true);
        input.id = id;

        // declare a function that track the Players' turn 
        // The id print is a reference for the Players' turn
        // disable the box while clicked
        const update = function(){
            if (document.querySelector("#print").innerHTML == "Player 1' s turn!"){
                document.querySelector("#" + id).value = "X";
                document.querySelector("#" + id).style.color = player1.color;
                document.querySelector("#" + id).disabled = true;
                document.querySelector('#print').innerHTML = "Player 2' s turn!";
            }else if(document.querySelector("#print").innerHTML == "Player 2' s turn!") {
                document.querySelector('#'+id).value = "O";
                document.querySelector("#" + id).style.color = player2.color;
                document.querySelector("#" + id).disabled = true;
                document.querySelector('#print').innerHTML = "Player 1' s turn!";
            }
        }

        // declare a function to check which of the players win or if the game is a tie
        const isWin = function(){
            let b1 = document.querySelector("#b1").value;
            let b2 = document.querySelector("#b2").value;
            let b3 = document.querySelector("#b3").value;
            let b4 = document.querySelector("#b4").value;
            let b5 = document.querySelector("#b5").value;
            let b6 = document.querySelector("#b6").value;
            let b7 = document.querySelector("#b7").value;
            let b8 = document.querySelector("#b8").value;
            let b9 = document.querySelector("#b9").value;
        
            let case1 = (b1 == b2) && (b1 == b3);
            let case2 = (b1 == b4) && (b1 == b7);
            let case3 = (b1 == b5) && (b1 == b9);
            let case4 = (b2 == b5) && (b2 == b8);
            let case5 = (b3 == b6) && (b3 == b9);
            let case6 = (b3 == b5) && (b3 == b7);
            let case7 = (b4 == b5) && (b4 == b6);
            let case8 = (b7 == b8) && (b7 == b9);
            
            // if the player 1 aligns 3 moves in a row , the player 1 win,
            // Same as for the player 2
            // The game is a draw when the boxes are filled but the players don't win
            if ((b1 == "X" && case1) || (b1 == "X" && case2) || 
            (b1 == "X" && case3) || (b2 == "X" && case4) || 
            (b3 == "X" && case5) || (b3 == "X" && case6)||(b4 == "X" && case7)
            || (b7 == "X" && case8))
                {
                    for (let i=1; i<10; i++){
                        document.querySelector("#b"+i).disabled = true;
                    }
                document.querySelector("#" + id).textContent = "X";
                document.querySelector('#print').innerHTML = "Player 1 won!";
            }
            else if ((b1 == "O" && case1) || (b1 == "O" && case2) || 
            (b1 == "O" && case3) || (b2 == "O" && case4) || 
            (b3 == "O" && case5) || (b3 == "O" && case6)||(b4 == "O" && case7)
            || (b7 == "O" && case8))
                {
                    for (let i=1; i<10; i++){
                        document.querySelector("#b"+i).disabled = true;
                    }
                document.querySelector("#" + id).textContent = "O";
                document.querySelector('#print').innerHTML = "Player 2 won!";
            }
            else if ((b1 == "X" || b1 == "O") && (b2 == "X"
                || b2 == "O") && (b3 == "X" || b3 == "O") &&
                (b4 == "X" || b4 == "O") && (b5 == "X" ||
                b5 == "O") && (b6 == "X" || b6 == "O") &&
                (b7 == "X" || b7 == "O") && (b8 == "X" ||
                b8 == "O") && (b9 == "X" || b9 == "O")) {

                    document.querySelector('#print').innerHTML = "Draw!";
                }

        }

        // Append the input element to the section tag with the tictactoe id
        // Add an Event Listener to each box with the function update that tracks the players'turn and setting their moves, and the function is_win to check if they win
        document.querySelector('#tictactoe').appendChild(input);
        document.querySelector('#'+ id).addEventListener('click', update);
        document.querySelector('#'+ id).addEventListener('click', isWin);
        if (i%3 == 0){
            let space1 = document.createElement("br");
            document.querySelector('#tictactoe').appendChild(space1);
            let space2 = document.createElement("br");
            document.querySelector('#tictactoe').appendChild(space2);
        }

    }
    // after the button Play is clicked, it will turn into a Reset button
    document.querySelector('#play').innerHTML = 'Reset';

}

// Output everything by adding an Event Listener to the play button that links to the overall function named output
document.querySelector("#play").addEventListener('click', output);