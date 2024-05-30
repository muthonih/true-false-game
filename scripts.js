function validateAnswers() {
    const answers = {
        q1: 'true',
        q2: 'true',
        q3: 'true'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const resultElement = document.getElementById('result');

    for (let key in answers) {
        const selectedOption = form.querySelector(`input[name="${key}"]:checked`);

        if (selectedOption && selectedOption.value === answers[key]) {
            score++;
            selectedOption.parentElement.classList.add('correct');
            selectedOption.parentElement.classList.remove('incorrect');
        } else {
            const incorrectOption = form.querySelector(`input[name="${key}"]:checked`);
            if (incorrectOption) {
                incorrectOption.parentElement.classList.add('incorrect');
                incorrectOption.parentElement.classList.remove('correct');
            }
        }
    }

    if (score === Object.keys(answers).length) {
        resultElement.textContent = `Congratulations! You got all answers correct.`;
        resultElement.classList.add('correct');
        resultElement.classList.remove('incorrect');
    } else {
        resultElement.textContent = `You got ${score} out of ${Object.keys(answers).length} correct. Try again!`;
        resultElement.classList.add('incorrect');
        resultElement.classList.remove('correct');
    }
}

function undoSelection() {
    const form = document.getElementById('quizForm');
    form.reset();
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    resultElement.classList.remove('correct', 'incorrect');
    const labels = form.querySelectorAll('label');
    labels.forEach(label => {
        label.classList.remove('correct', 'incorrect');
    });
}
