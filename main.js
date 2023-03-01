const rps = ['rock', 'paper', 'scissors']
let pc_choice, user_choice

function play (id) {
    // Have computer select random choice between rock, paper, or scissors
    // Compare computer choice with user choice
    const random = Math.floor(Math.random() * rps.length)
    pc_choice = rps[random]
    user_choice = id
    let text = ` You chose ${user_choice} and the computer chose ${pc_choice}.`
    var result

    if (pc_choice === user_choice){
        result = "It's a tie!"
        text = `You and the computer both chose ${user_choice}.`
    } else if (user_choice === 'rock') {
        if (pc_choice === 'paper'){
            result = 'You lose!'
        } else {
            result = 'You win!'
        }
    } else if (user_choice === 'paper') {
        if (pc_choice === 'scissors') {
            result = 'You lose!'
        } else {
            result = 'You win!'
        }
    } else if (user_choice === 'scissors') {
        if (pc_choice === 'rock') {
            result = 'You lose!'
        } else {
            result = 'You win!'
        }
    }
    console.log(result + text)
    document.getElementById('result').innerHTML =  result 
    document.getElementById('text').innerHTML = text
    
}