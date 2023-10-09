// making sure javascript is connected and assign box classes to an array
let boxes = Array.from(document.getElementsByClassName('box'))
let resetButton = document.getElementById('resetButton')
let playerText = document.getElementById('playerText')

// making player moveslll
let O_Text = 'O'
let X_Text = 'X'
let currentPlayer = X_Text

// filling spaces with a null
let spaces = Array(9).fill(null)
console.log(spaces)
// adding an event listener for each box
let startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))

}
// player check boxes
function boxClicked (e){
    
    let id = e.target.id
     if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if(playerWon() !==false){
            playerText.innerHTML = `${currentPlayer} won`
            
         
            
          
            return
        }
        currentPlayer = currentPlayer == X_Text ? O_Text : X_Text //source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
     }
}
// adding the possible winning varients stored in an array
let winningVariants = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [2,5,8],
    [3,6,9],
    [3,6,9],
    [1,5,9],
    [3,5,7],
    [1,4,7]
    
]
function playerWon (){
    for (const condition of winningVariants) { //source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
      let [pos1, pos2, pos3] = condition  //source:https://www.w3schools.com/java/java_arrays_multi.asp
      if(spaces[pos1] && (spaces[pos1] == spaces[pos2] && spaces[pos1] == spaces[pos3])){
        //returning winning variants 
        return [pos1,pos2,pos3]

        }
        
    }

    return false
    
}


resetButton.addEventListener('click', restart)


function restart (){
    spaces.fill(null) //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    boxes.forEach( box =>{
        box.innerText = ''
        box.style.backgroundColor = ''
    })
    playerText.innerHTML = ''
    currentPlayer = X_Text
}
startGame()

// sources:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill, https://www.w3schools.com/java/java_arrays_multi.asp, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator,   https://www.jordanprindledesigns.com/blog/color-palettes, https://www.w3schools.com/css/css3_buttons.asp, https://fonts.google.com/specimen/Stylish, https://developer.mozilla.org/en-US/docs/Web/CSS/transform, https://www.youtube.com/watch?v=AnmwHjpEhtA&t=990s
