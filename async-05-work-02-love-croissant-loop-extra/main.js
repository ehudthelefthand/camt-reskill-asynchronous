let answer = ''
let counter = 0

function checkAnswer() {
    if (answer === 'yes') {
        $('div:nth-child(2)').html(`<div>Yes, I love croissant</div>`)
    }
    else if (answer === 'no') {
        $('div:nth-child(2)').html(`<div>No, I don't like croissant :(</div>`)
    } else {
        let dots = '.'
        for (let i = 0; i < counter; i++) {
            dots += '.'
        }
        counter++
        if (counter === 3) {
            counter = 0
        }
        $('div:nth-child(2)').html(`<div>Well${dots}</div>`)
        setTimeout(checkAnswer, 1000)
    }
}

setTimeout(checkAnswer, 1000)

$('#yes').on('click', function() {
    answer = 'yes'
})

$('#no').on('click', function() {
    answer = 'no'
})

$('#again').on('click', function() {
    if (answer !== '') {
        answer = undefined
        checkAnswer()
    }
})
