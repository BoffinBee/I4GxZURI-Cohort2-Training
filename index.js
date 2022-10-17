function guess(range) {
  return Math.floor((Math.random() * range) + 1)
}

function game() {
  var stage = 1
  var point = 0
  while (true) {
    console.log("Stage", stage)
    const sysGuess = guess(stage+1)
    const userGuess = prompt("Guess > ")
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

function start() {
  const username = prompt("Username >")
  console.log("Hey " + username + ", Welcome!\n")
  game()
}

start()
