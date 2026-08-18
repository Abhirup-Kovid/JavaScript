# Projects related to DOM

## Project link
[Click here]https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

# Solution code 

## Project 1

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    else if (e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    else if (e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
    else if (e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
  })
})
``` 

# Project 2 Solution
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML="Please give a valid height"
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML="Please give a valid weight"
  }
  else{
    const bmi = (weight / ((height*height)/1000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.6){
      results.innerHTML = `<span>Under Weight</span>`
    }
    if(bmi>18.6 && bmi<24.9){
      results.innerHTML = `<span>Normal Weight</span>`
    }
    if(bmi>24.9){
      results.innerHTML = `<span>Over Weight</span>`
    }
  }
  
  
})

```
# Project 3 Solution
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();  
},1000)
```

# Project 4 Solution

```javascript
const randomNumber = parseInt(Math.random()*10+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter valid Number')
  }
  else if(guess<1){
    alert('Please enter valid Number')
  }
  else if(guess>100){
    alert('Please enter valid Number')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame();
    }
    else{
      displayGuess(guess)
      checkGuess(guess)

    }
  }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`Number is too low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is too high`)
  }
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
  lowOrHigh.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p);
  playGame =false;
  newGame()
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random()*10+1); 
    prevGuess =[]
    guessSlot = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    
    playGame = true
  })
}
```
