let choices = [{
  id: 0,
  name: "rock"
}, {
  id: 1,
  name: "paper"
}, {
  id: 2,
  name: "scissors"
}]


function play(choice) {
  let template = ""
  let compChoice = Math.floor(Math.random() * 3)
  if (choice == 'rock') {
    if (compChoice == 0) {
      template = "Tie"
    } else if (compChoice == 1) {
      template = "you loose"
    } else {
      template = "winning!"
    }
  }
  else if (choice == "paper") {
    if (compChoice == 0) {
      template = "Winning!"
    } else if (compChoice == 1) {
      template = "tie"
    } else {
      template = "you loose"
    }
  }
  else {
    if (compChoice == 0) {
      template = "you loose"
    } else if (compChoice == 1) {
      template = 'Winning!'
    } else {
      template = "its a tie"
    }
  }
  document.getElementById('result').innerText = template
}




  // if (playerChoice.id == compChoice.id) {
  //   return "tie"
  // } else if{ (playerChoice.id++ == compChoice.id){
  //   return "you lost"
  // } else {
  //   return "winning"
  // }






