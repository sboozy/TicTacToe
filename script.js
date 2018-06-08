let player1Name = prompt("Welcome! What is the name of player 1?");
while (!player1Name) {
  prompt("What is the name of player 1?")
};
let player2Name = prompt("Welcome! What is the name of player 2?");
while (!player2Name) {
  prompt("What is the name of player 2?");
};

$(document).ready(function() {
  $(".player1-text").text(`${player1Name}`);
  $(".player2-text").text(`${player2Name}`);

let turn = 1; // 1=player1 turn, 0=player2 turn
let player1Count = 0;
let player2Count = 0;

function playGame() {
  $('.boxes').click(function() {
    if(turn === 1) {
      $(this).html("X");
      $(".player1Turn").html("");
      $(".player2Turn").html("Your Turn!");
      $(this).off("click");  //solves problem of being able to click again in a box
      player1Count += 1;
      if (player1Count >= 3) { //don't need to check until each player has gone 3 times
         checkWin();
      }
      turn = 0;

    } else {
      $(this).html("O");
      $(".player2Turn").html("");
      $(".player1Turn").html("Your Turn!");
      $(this).off("click"); //solves problem of being able to click again in a box
      player2Count += 1;
      if (player2Count >= 3) { //don't need to check until each player has gone 3 times
        checkWin();
      }
      turn = 1;
      }
    });
  }

function checkWin () {
  if ($(".b1").html() === "X" && $(".b2").html() === "X" && $(".b3").html() === "X" || //across top row
      $(".b4").html() === "X" && $(".b5").html() === "X" && $(".b6").html() === "X" || //across middle row
      $(".b7").html() === "X" && $(".b8").html() === "X" && $(".b9").html() === "X" || // across bottom row
      $(".b1").html() === "X" && $(".b4").html() === "X" && $(".b7").html() === "X" || //down 1st column
      $(".b2").html() === "X" && $(".b5").html() === "X" && $(".b8").html() === "X" || //down 2nd column
      $(".b3").html() === "X" && $(".b6").html() === "X" && $(".b9").html() === "X" || //down 3rd column
      $(".b1").html() === "X" && $(".b5").html() === "X" && $(".b9").html() === "X" || //diagnal
      $(".b3").html() === "X" && $(".b5").html() === "X" && $(".b7").html() === "X") { //diagonal
        alert(`${player1Name} is the winner!`);
  } else if ($(".b1").html() === "O" && $(".b2").html() === "O" && $(".b3").html() === "O" || //across top row
             $(".b4").html() === "O" && $(".b5").html() === "O" && $(".b6").html() === "O" || //across middle row
             $(".b7").html() === "O" && $(".b8").html() === "O" && $(".b9").html() === "O" || // across bottom row
             $(".b1").html() === "O" && $(".b4").html() === "O" && $(".b7").html() === "O" || //down 1st column
             $(".b2").html() === "O" && $(".b5").html() === "O" && $(".b8").html() === "O" || //down 2nd column
             $(".b3").html() === "O" && $(".b6").html() === "O" && $(".b9").html() === "O" || //down 3rd column
             $(".b1").html() === "O" && $(".b5").html() === "O" && $(".b9").html() === "O" || //diagnal
             $(".b3").html() === "O" && $(".b5").html() === "O" && $(".b7").html() === "O") { //diagonal
               alert(`${player2Name} is the winner!`);
    }
    else {
      if (player1Count + player2Count === 9) {
        alert("Darn! Its a tie.  Hit Reset to play again!")
      }
  }
}

function playAgain() {
  $('button').click(function() {
    location.reload(true);
  });
}
$(".player1Turn").html("Your Turn!");  //not working
playGame();
playAgain();

})
