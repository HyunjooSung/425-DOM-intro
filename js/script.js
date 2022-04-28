console.log('hello DOM')

function handleCoolColorClick(event) {
  console.log('a button was clicked!')
  console.log(event.target)
  event.target.classList.add('cool-color')
  // if (event.target.id === 'button-1') {
  //   // apply our cool color class to button 1
  //   document.querySelector('#button-1').classList.add('cool-color')
  // } else if (event.target.id === 'button-2') {
  //   // apply our cool color class to butto n2
  //   document.querySelector('#button-2').classList.add('cool-color')
  // }
}

// tell javascript to wait for the page to load
// wait for an event ot occur -- then run a function
// document.addEventListener('what to listen for', function() {
// what to do when the even happens
//}) 
// something.anything = working with an object
document.addEventListener('DOMContentLoaded', function() {
  // interact with the page here
  const body = document.querySelector('body')
  // change the styles one at at a time
  body.style.backgroundColor = 'hotpink'
  body.style.color = 'black'
  console.log(body) // examine the selected element POJO plain ol javascript object
  // explore the object as an object
  console.dir(body)

  // select the button and add a click event listener
  document.querySelector('#input-button').addEventListener('click', function() {
    console.log('the button was clicked! How exciting! 🎉')
    // get the text that the user has typed in
    const userInput = document.querySelector('#user-input')
    console.dir(userInput)
    console.log('the user typed in: ' + userInput.value)
    // put that text in the span to display it on the page
    const inputSpan = document.querySelector('#input-span')
    // innerText property
    inputSpan.innerText = userInput.value
    // reset the value of the input
    userInput.value = ''
  }) // EVENT listener


  // cool color buttons
  const buttonOne = document.querySelector('#button-1')
  const buttonTwo = document.querySelector('#button-2')
  // console.log(buttonOne, buttonTwo)
  buttonOne.addEventListener('click', handleCoolColorClick)
  buttonTwo.addEventListener('click', handleCoolColorClick)
}) // DOM 



// change properties of html elements
// change styles (these are properties/attributes)
// execute javascript on user interactions
document.querySelector('#input-button').addEventListener('click', function() {
  console.log('hello')
})