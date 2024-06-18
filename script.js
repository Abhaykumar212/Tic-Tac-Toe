let boxes = document.getElementsByClassName('boxes')
let boxArr = Array.from(boxes)
let reset = document.getElementById('reset')

let turn = true // for O

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const checkWinner = () => {
    let isWinnerFound = false;

    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                document.getElementById('winner').innerHTML = `Congratulations Winner is:- ${val1}`;
                endGame();
                isWinnerFound = true;
            }
        }
    }

    if (!isWinnerFound) {
        let isTie = true;

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML === "") {
                isTie = false;
                break;
            }
        }

        if (isTie) {
            document.getElementById('winner').innerHTML = "Match Tie";
            endGame();
        }
    }
}

function endGame(){
    for(let i=0; i<boxArr.length; i++){
        boxArr[i].disabled = true
        turn  = true
    }
}

boxArr.forEach((boxes) =>{
    boxes.addEventListener('click',()=>{
        if(turn){
            boxes.innerHTML = 'O'
            boxes.style.color = 'red'
        }
        else{
            boxes.innerHTML = 'X'
        }
        turn = !turn
        boxes.disabled = true
        if(boxes.disabled){
            boxes.style.background = 'rgba(56,84,71)'   
        }

        checkWinner();
    })
})

reset.addEventListener('click',()=>{
    for(let i=0; i<boxArr.length; i++){
        boxArr[i].innerHTML = ""
        boxArr[i].style.background = '#f5f5dccc'
        boxArr[i].disabled = false
        document.getElementById('winner').innerHTML = ""
        turn = true
    }
})