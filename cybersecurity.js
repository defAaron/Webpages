function submitQuiz() {
    const correctAnswers = {
        q1: ["Ignore it.","Report it","Call the actual organization and verify"],  // Only correct answer for checkbox question
        q2: ["Ignore it.","Report it","Call the actual organization and verify"],  // Only correct answer for checkbox question
        q3: ["Ignore it.","Report it"],  // Only correct answer for checkbox question
        q4: "Phishing",
        q5: "Smishing",
        q6: "Pharming",
        q7: "Vishing",
        q8: "None"
    };

    let score = 0;

    const form = document.getElementById("quizForm");

    // Check question 1 (checkboxes)
    const q1Answers = [];
    form.querySelectorAll("input[name='q1']:checked").forEach((checkbox) => {
        q1Answers.push(checkbox.value);
    });
    if (JSON.stringify(q1Answers.sort()) === JSON.stringify(correctAnswers.q1.sort())) {
        score++;
    }

    // Check question 2 (checkboxes)
    const q2Answers = [];
    form.querySelectorAll("input[name='q2']:checked").forEach((checkbox) => {
        q2Answers.push(checkbox.value);
    });
    if (JSON.stringify(q2Answers.sort()) === JSON.stringify(correctAnswers.q2.sort())) {
        score++;
    }

    // Check question 3 (checkboxes)
    const q3Answers = [];
    form.querySelectorAll("input[name='q3']:checked").forEach((checkbox) => {
        q3Answers.push(checkbox.value);
    });
    if (JSON.stringify(q3Answers.sort()) === JSON.stringify(correctAnswers.q3.sort())) {
        score++;
    }

    // Check question 4 (radio buttons)
    const q4 = form.q4.value;
    if (q4 === correctAnswers.q4) {
        score++;
    }

    // Check question 5 (radio buttons)
    const q5 = form.q5.value;
    if (q5 === correctAnswers.q5) {
        score++;
    }

    // Check question 6 (radio buttons)
    const q6 = form.q6.value;
    if (q6 === correctAnswers.q6) {
        score++;
    }
    
    // Check question 7 (radio buttons)
    const q7 = form.q7.value;
    if (q7 === correctAnswers.q7) {
        score++;
    }
    
    // Check question 8 (radio buttons)
    const q8 = form.q8.value;
    if (q8 === correctAnswers.q8) {
        score++;
    }


    // Display the result
    document.getElementById("result").innerText = `You scored ${score} out of 8.`;
}
