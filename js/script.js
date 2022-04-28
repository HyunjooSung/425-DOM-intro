console.log('hello DOM')

// tell javascript to wait for the page to load
// wait for an event ot occur -- then run a function
// document.addEventListener('what to listen for', function() {
// what to do when the even happens
//}) 
document.addEventListener('DOMContentLoaded', function() {
  // interact with the page here
  const body = document.querySelector('body')
  // change the styles one at at a time
  body.style.backgroundColor = 'hotpink'
  body.style.color = 'black'

})

// change properties of html elements
// change styles (these are properties/attributes)
// execute javascript on user interactions