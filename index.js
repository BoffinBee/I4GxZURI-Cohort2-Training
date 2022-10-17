// guesser function
function guess(range) {
  return Math.floor((Math.random() * range) + 1)
}

// game flow
function game() {
  // initialize stage and points counter
  var stage = 1
  var point = 0
  
  // start an infinite loop
  while (true) {
    console.log("Stage", stage)
    const sysGuess = guess(stage+1)
    const userGuess = prompt("Guess > ")

    // Update the user's points and stage
    // accordingly if the guess was right
    // otherwise, end the game
    if (sysGuess == userGuess) {
      stage += 1
      point += 1
      console.log('Correct! On to the next\n')
    }
    else {
      break
    }
  }
  console.log("Wrong!\nGame over - You finished with", point, "points.") 
}

// game initializer 
function start() {
  const username = prompt("Username >")
  console.log("Hey " + username + ", Welcome!\n")
  game()
}

// start the game
start()
