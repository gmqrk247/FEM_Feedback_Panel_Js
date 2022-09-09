const btn = document.getElementById('btn')
const scoreList = document.querySelector('.score-container')
const scores = document.querySelectorAll('.score')
const feedbackPanel = document.querySelector('.card')
let selectedFeedback = '5'


// select a score
scores.forEach(score => {
    score.addEventListener('click', () => {
        removeActive()
        score.classList.add('active')
        selectedFeedback = score.innerText
        
    })
})

// submit review and feedback panel
btn.addEventListener('click', () => {
    feedbackPanel.innerHTML = 
        `
        <section style='text-align:center;' class='card'>
            <img class="feedback-img" src='images/illustration-thank-you.svg' >
            <p class='feedback'> You selected ${selectedFeedback} out of 5 </p>
            <div class="text">
            <h2> Thank You! </h2>
            <p> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
            </div>
        </section>
        `
})

// Remove active / selected state //
const removeActive = function () {
    scores.forEach(score => {
        score.classList.remove('active')
    })
}