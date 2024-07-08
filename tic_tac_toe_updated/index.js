document.addEventListener("DOMContentLoaded", () => {
  let boxes;
  const turnButton = document.querySelector(".Turnbutton");
  const line = document.querySelector(".line");
  const resetButton = document.querySelector("#ResetButton");
  const gameChangeButton4 = document.querySelector(".button1");
  const gameChangeButton5 = document.querySelector(".button2");

  let currentPlayer = 0;
  let boxCount = 9;
  let moves = 0;

  function changeTurn() {
      currentPlayer = currentPlayer === 0 ? 1 : 0;
  }

  function updateTurnButton() {
      if (moves < boxCount) {
          turnButton.textContent = currentPlayer === 0 ? "Turn Of 1st Player" : "Turn Of 2nd Player";
      } else {
          turnButton.textContent = "Match Draw";
      }
  }

  function checkWin3() {
      const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];

      return winningCombinations.some(combination => {
          const [a, b, c] = combination;
          if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
              displayWin3(combination);
              return true;
          }
          return false;
      });
  }

  function checkWin4() {
      const winningCombinations = [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [8, 9, 10, 11],
          [12, 13, 14, 15],
          [0, 4, 8, 12],
          [1, 5, 9, 13],
          [2, 6, 10, 14],
          [3, 7, 11, 15],
          [0, 5, 10, 15],
          [3, 6, 9, 12],
      ];

      return winningCombinations.some(combination => {
          const [a, b, c, d] = combination;
          if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent && boxes[a].textContent === boxes[d].textContent) {
              displayWin4(combination);
              return true;
          }
          return false;
      });
  }

  function checkWin5() {
      const winningCombinations = [
          [0, 1, 2, 3, 4],
          [5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19],
          [20, 21, 22, 23, 24],
          [0, 5, 10, 15, 20],
          [1, 6, 11, 16, 21],
          [2, 7, 12, 17, 22],
          [3, 8, 13, 18, 23],
          [4, 9, 14, 19, 24],
          [0, 6, 12, 18, 24],
          [4, 8, 12, 16, 20],
      ];

      return winningCombinations.some(combination => {
          const [a, b, c, d, e] = combination;
          if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent && boxes[a].textContent === boxes[d].textContent && boxes[a].textContent === boxes[e].textContent) {
              displayWin5(combination);
              return true;
          }
          return false;
      });
  }

  function displayWin3(combination) {
      combination.forEach(index => {
          boxes[index].style.backgroundColor = "lightgreen";
      });
      turnButton.textContent = "Player " + (currentPlayer + 1) + " Wins!";
      boxes.forEach(box => box.removeEventListener("click", handleBoxClick));
      // line.style.display = "block";
      
        //line for 1st row

        if(combination[0]===0&&combination[1]===1&&combination[2]===2){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.transform="translate(120px,150px)";

        }

        //line for 2nd row
        if(combination[0]===3&&combination[1]===4&&combination[2]===5){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.transform="translate(120px,310px)";
        }

        //line for 3rd row
        if(combination[0]===6 && combination[1]===7 && combination[2]===8){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.transform="translate(120px,460px)";

        }

        // line for 1st column
      
        if(combination[0]===0 && combination[1]===3 && combination[2]===6){
          line.style.display="block";
          line.style.transform="translate(300px,35px)";
          line.style.rotate="90deg";
         
        }

        //line for 2nd column

        if(combination[0]===1 && combination[1]===4 && combination[2]===7){
          line.style.display="block";
          line.style.rotate="90deg";
          line.style.transform="translate(300px,-120px)";
        }

        //line for 3rd column
         
        if(combination[0]===2 && combination[1]===5 && combination[2]===8){
          line.style.transform="translate(300px,-277px)";
          line.style.rotate="90deg";
          line.style.display="block";
        }

        //line for 1st diagonal

        if(combination[0]===0 && combination[1]===4 && combination[2]===8){
          line.style.display="block";
          line.style.rotate="45deg";
          line.style.width="550px";
          line.style.transform="translate(250px,187px)";
        }

        //line for 2nd diagonal

        if(combination[0]===2 && combination[1]===4 && combination[2]===6){
          line.style.display="block";
          line.style.width="550px";
          line.style.rotate="-45deg";
          line.style.transform="translate(-190px,250px)";
        }
  }


  function displayWin4(combination) {
      combination.forEach(index => {
          boxes[index].style.backgroundColor = "lightgreen";
      });
      turnButton.textContent = "Player " + (currentPlayer + 1) + " Wins!";
      boxes.forEach(box => box.removeEventListener("click", handleBoxClick));
      // line.style.display = "block";
      
      if(combination[0]===0 && combination[1]===1 && combination[2]===2 &&combination[3]===3){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.width="550px";
          line.style.transform="translate(120px,155px)";
      }

      //line for 2nd row

      if(combination[0]===4 && combination[1]===5 && combination[2]===6 &&combination[3]===7){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.width="550px";
          line.style.transform="translate(120px,310px)";
      }

      //line for 3rd row

      if(combination[0]===8 && combination[1]===9 && combination[2]===10 &&combination[3]===11 ){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.width="550px";
          line.style.transform="translate(120px,465px)";
      }

      //line for 4th row
      if(combination[0]===12 && combination[1]===13 && combination[2]===14 &&combination[3]===15){
          line.style.display="block";
          line.style.rotate="0deg";
          line.style.width="550px";
          line.style.transform="translate(120px,620px)";}

          //line for 1st column

          if(combination[0]===0 && combination[1]===4 && combination[2]===8 && combination[3]===12){
              line.style.display="block";
              line.style.width="550px";
              line.style.rotate="90deg";
              line.style.transform="translate(390px,110px)";
          }

          //line for 2nd column

          if(combination[0]===1 && combination[1]===5 && combination[2]===9 && combination[3]===13){
              
              line.style.display="block";
              line.style.width="550px";
              line.style.rotate="90deg";
              line.style.transform="translate(390px,-45px)";
          }

          //line for 3rd column

          if(combination[0]===2 && combination[1]===6 && combination[2]===10 && combination[3]===14){
          
              line.style.display="block";
              line.style.width="550px";
              line.style.rotate="90deg";
              line.style.transform="translate(390px,-200px)";
          }

          //line for 4th column

          if(combination[0]===3 && combination[1]===7 && combination[2]===11 && combination[3]===15){
           
              line.style.display="block";
              line.style.width="550px";
              line.style.rotate="90deg";
              line.style.transform="translate(390px,-355px)";
          }

          //line for 1st diagonal

          if(combination[0]===0 && combination[1]===5 && combination[2]===10 && combination[3]===15){
              
              line.style.display="block";
              line.style.width="750px";
              line.style.rotate="45deg";
              line.style.transform="translate(290px,255px)";
          }

          //line for 2nd diagonal

          if(combination[0]===3 && combination[1]===6 && combination[2]===9 && combination[3]===12){
          
              line.style.display="block";
              line.style.width="750px";
              line.style.rotate="-45deg";
              line.style.transform="translate(-255px,288px)";
          }
  }


  function displayWin5(combination) {
      combination.forEach(index => {
          boxes[index].style.backgroundColor = "lightgreen";
      });
      turnButton.textContent = "Player " + (currentPlayer + 1) + " Wins!";
      boxes.forEach(box => box.removeEventListener("click", handleBoxClick));
      // line.style.display = "block";
      
      if(combination[0]===0 && combination[1]===1 && combination[2]===2 &&combination[3]===3 && combination[4]===4){
          line.style.rotate="0deg";
          line.style.display="block";
          line.style.width="750px";
          line.style.transform="translate(50px,150px)";
      }

      //line for 2nd row

      if(combination[0]===5 && combination[1]===6 && combination[2]===7 &&combination[3]===8&&combination[4]===9){
          line.style.rotate="0deg";
          line.style.display="block";
          line.style.width="750px";
          line.style.transform="translate(50px,310px)";
      }

      //line for 3rd row

      if(combination[0]===10 && combination[1]===11 && combination[2]===12 &&combination[3]===13 && combination[4]===14){

          line.style.rotate="0deg";
          line.style.display="block";
          line.style.width="750px";
          line.style.transform="translate(100px,460px)";
      }

      //line for 4th row
      if(combination[0]===15 && combination[1]===16 && combination[2]===17 &&combination[3]===18 && combination[4]===19){

        line.style.rotate="0deg";
          line.style.display="block";
          line.style.width="750px";
          line.style.transform="translate(100px,610px)";}

          //line for 5th row
      if(combination[0]===20 && combination[1]===21 && combination[2]===22 &&combination[3]===23 && combination[4]===24){

        line.style.rotate="0deg";
          line.style.display="block";
          line.style.width="750px";
          line.style.transform="translate(100px,770px)";}

          //line for 1st column

          if(combination[0]===0 && combination[1]===5 && combination[2]===10 && combination[3]===15 && combination[4]===20 ){
              line.style.display="block";
              line.style.width="700px";
              line.style.rotate="90deg";
              line.style.transform="translate(460px,185px)";
          }

          //line for 2nd column

          if(combination[0]===1 && combination[1]===6 && combination[2]===11 && combination[3]===16 && combination[4]===21 ){
              
              line.style.display="block";
              line.style.width="700px"
              line.style.rotate="90deg";
              line.style.transform="translate(460px,30px)";
          }

          //line for 3rd column

          if(combination[0]===2 && combination[1]===7 && combination[2]===12 && combination[3]===17 && combination[4]===22){
          
              line.style.display="block";
              line.style.width="700px";
              line.style.rotate="90deg";
              line.style.transform="translate(460px,-130px)";
          }

          //line for 4th column

          if(combination[0]===3 && combination[1]===8 && combination[2]===13 && combination[3]===18 && combination[4]===23){
           
              line.style.display="block";
              line.style.width="700px";
              line.style.rotate="90deg";
              line.style.transform="translate(460px,-280px)";
          }

          //line for 5th column 

          if(combination[0]===4 && combination[1]===9 && combination[2]===14 && combination[3]===19 && combination[4]===24){
           
              line.style.display="block";
              line.style.width="700px";
              line.style.rotate="90deg";
              line.style.transform="translate(460px,-440px)";
          }


          //line for 1st diagonal

          if(combination[0]===0 && combination[1]===6 && combination[2]===12 && combination[3]===18 && combination[4]===24){
  
              line.style.display="block";
              line.style.width="970px";
              line.style.rotate="45deg";
              line.style.transform="translate(310px,328px)";
          }

          //line for 2nd diagonal

          if(combination[0]===4 && combination[1]===8 && combination[2]===12 && combination[3]===16 && combination[4]===20){
          
              line.style.display="block";
              line.style.width="970px";
              line.style.rotate="-45deg";
              line.style.transform="translate(-310px,328px)";
          }
  }

  function resetGame() {
      boxes.forEach(box => {
          box.textContent = "";
          box.style.backgroundColor = "";
          box.addEventListener("click", handleBoxClick);
      });
      currentPlayer = 0;
      moves = 0;
      updateTurnButton();
      line.style.display = "none";
      line.style.rotate="0deg";
      line.style.width="400px";
  }

  function handleBoxClick(event) {
      const box = event.target;
      if (!box.textContent) {
          box.textContent = currentPlayer === 0 ? "X" : "O";
          moves++;
          if (!checkWin()) {
              changeTurn();
              updateTurnButton();
          }
      }
  }

  function checkWin() {
      if (boxCount === 9) {
          return checkWin3();
      } else if (boxCount === 16) {
          return checkWin4();
      } else if (boxCount === 25) {
          return checkWin5();
      }
  }

  function changeGrid(size) {
      const leftContainer = document.querySelector(".left_container");
      const existingBoxes = Array.from(leftContainer.children);
      const boxCountNeeded = size * size;

      // Preserve content of existing boxes
      const preservedContent = existingBoxes.map(box => box.textContent);

      // Remove excess boxes if needed
      while (leftContainer.children.length > boxCountNeeded) {
          leftContainer.removeChild(leftContainer.lastChild);
      }

      // Add new boxes if needed
      while (leftContainer.children.length < boxCountNeeded) {
          const box = document.createElement("div");
          box.id = "box";
          box.addEventListener("click", handleBoxClick);
          leftContainer.appendChild(box);
      }

      boxes = document.querySelectorAll("#box");

      // Restore preserved content
      boxes.forEach((box, index) => {
          box.textContent = preservedContent[index] || "";
          if (box.textContent) {
              box.style.backgroundColor = "rgba(129, 119, 119, 0.77)";
          }
          box.removeEventListener("click", handleBoxClick);
          box.addEventListener("click", handleBoxClick);
      });

      leftContainer.style.gridTemplateColumns = "repeat(" + size + ", 150px)";
      leftContainer.style.gridTemplateRows = "repeat(" + size + ", 150px)";
      boxCount = size * size;
      resetGame();
  }

  gameChangeButton4.addEventListener("click", () => changeGrid(4));
  gameChangeButton5.addEventListener("click", () => changeGrid(5));
  resetButton.addEventListener("click", resetGame);

  // Initialize boxes and event listeners
  boxes = document.querySelectorAll("#box");
  boxes.forEach(box => box.addEventListener("click", handleBoxClick));
  updateTurnButton();
});
