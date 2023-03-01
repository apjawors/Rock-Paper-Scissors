const rps = ['rock', 'paper', 'scissors']
let pc_choice, user_choice
let user_score = 0
let pc_score = 0

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
            pc_score++
        } else {
            result = 'You win!'
            user_score++
        }
    } else if (user_choice === 'paper') {
        if (pc_choice === 'scissors') {
            result = 'You lose!'
            pc_score++
        } else {
            result = 'You win!'
            user_score++
        }
    } else if (user_choice === 'scissors') {
        if (pc_choice === 'rock') {
            result = 'You lose!'
            pc_score++
        } else {
            result = 'You win!'
            user_score++
        }
    }
    document.getElementById('result').innerHTML =  result 
    document.getElementById('text').innerHTML = text
    document.getElementById('you-score').innerHTML = user_score
    document.getElementById('computer-score').innerHTML = pc_score
    
    if (pc_score === 5 || user_score === 5) {
        document.getElementById('text').innerHTML = `You: ${user_score} Computer: ${pc_score}`
        if (pc_score > user_score) {
            document.getElementById('result').innerHTML =  'Oh no! You lost the game! Bummer!' 
        } else {
            document.getElementById('result').innerHTML = 'Congratultions! You won the game!'
        }
        pc_score = 0
        user_score = 0
    }
}