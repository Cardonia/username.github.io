document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progressBar = document.getElementById('progress');
    
    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];
    
    const quizQuestions = [
    {
        question: "What does CPU stand for?",
        options: [
            "A) Central Processing Unit",
            "B) Control Processing Unit",
            "C) Computer Personal Unit",
            "D) Central Peripheral Unit"
        ],
        answer: 0
    },
    {
        question: "Which unit supervises the flow of information between other components?",
        options: [
            "A) ALU",
            "B) CU (Control Unit)",
            "C) Storage Unit",
            "D) Output Unit"
        ],
        answer: 1
    },
    {
        question: "The ALU performs:",
        options: [
            "A) Data storage",
            "B) Arithmetic and logic operations",
            "C) Input/output operations",
            "D) Network communication"
        ],
        answer: 1
    },
    {
        question: "Which number system uses digits 0-7?",
        options: [
            "A) Binary",
            "B) Octal",
            "C) Hexadecimal",
            "D) Decimal"
        ],
        answer: 1
    },
    {
        question: "The hexadecimal digit 'D' represents which decimal value?",
        options: [
            "A) 12",
            "B) 13",
            "C) 14",
            "D) 15"
        ],
        answer: 1
    },
    {
        question: "Convert the binary number `1010` to decimal.",
        options: [
            "A) 8",
            "B) 10",
            "C) 12",
            "D) 14"
        ],
        answer: 1
    },
    {
        question: "What is the octal equivalent of binary `110101`?",
        options: [
            "A) 65",
            "B) 55",
            "C) 75",
            "D) 45"
        ],
        answer: 0
    },
    {
        question: "The hexadecimal (base-16) representation of binary `1111` is:",
        options: [
            "A) E",
            "B) F",
            "C) 15",
            "D) 1F"
        ],
        answer: 1
    },
    {
        question: "How many values can a 4-bit binary number represent?",
        options: [
            "A) 8",
            "B) 16",
            "C) 32",
            "D) 64"
        ],
        answer: 1
    },
    {
        question: "Which gate outputs 1 only if all inputs are 1?",
        options: [
            "A) OR",
            "B) AND",
            "C) NOT",
            "D) XOR"
        ],
        answer: 1
    },
    {
        question: "The complement of a variable in Boolean algebra is represented by:",
        options: [
            "A) +",
            "B) •",
            "C) Overbar (example. Ā)",
            "D) ⊕"
        ],
        answer: 2
    },
    {
        question: "What is the output of a NAND gate when both inputs are 1?",
        options: [
            "A) 0",
            "B) 1",
            "C) 10",
            "D) 11"
        ],
        answer: 0
    },
    {
        question: "An XOR gate outputs 1 when:",
        options: [
            "A) Both inputs are 1",
            "B) Both inputs are 0",
            "C) Inputs are unequal",
            "D) Inputs are equal"
        ],
        answer: 2
    },
    {
        question: "The XNOR gate produces an output of 1 when inputs are equal. It is equivalent to:",
        options: [
            "A) An XOR gate followed by a NOT gate",
            "B) An OR gate followed by an AND gate",
            "C) A NOR gate with shorted inputs",
            "D) An AND gate with one inverted input"
        ],
        answer: 0
    },
    {
        question: "What is the output of an XOR gate when both inputs are 1?",
        options: [
            "A) 0",
            "B) 1",
            "C) 10",
            "D) 11"
        ],
        answer: 0
    },
    {
        question: "Boolean addition corresponds to which operation?",
        options: [
            "A) AND",
            "B) OR",
            "C) XOR",
            "D) NAND"
        ],
        answer: 1
    },
    {
        question: "A product term in Boolean algebra is formed by:",
        options: [
            "A) OR operations",
            "B) AND operations",
            "C) NOT operations",
            "D) XOR operations"
        ],
        answer: 1
    },
    {
        question: "The expression A + A•B simplifies to:",
        options: [
            "A) A",
            "B) B",
            "C) A•B",
            "D) A + B"
        ],
        answer: 0
    },
    {
        question: "A minterm is a:",
        options: [
            "A) Sum of literals",
            "B) Product of literals",
            "C) Complement of literals",
            "D) XOR of literals"
        ],
        answer: 1
    },
    {
        question: "To create a sum-of-products expression, you combine:",
        options: [
            "A) Minterms where the output is 1",
            "B) Maxterms where the output is 0",
            "C) All input combinations",
            "D) Only complemented variables"
        ],
        answer: 0
    },
    {
        question: "For the input A=0, B=1, C=1, the maxterm (a sum of literals where a variable is uncomplemented if its value is 0, and complemented if its value is 1) is:",
        options: [
            "A) A + B + C",
            "B) A + B' + C'",
            "C) A' + B + C",
            "D) A' + B' + C'"
        ],
        answer: 1
    },
    {
        question: "Which of the following shows DeMorgan’s Theorem:",
        options: [
            "A) (A•B)’ = A’ + B’",
            "B) (A + B)’ = A’ • B’",
            "C) Both A and B",
            "D) None of the above"
        ],
        answer: 2
    },
    {
        question: "What is the binary value of the hexadecimal number 3F:",
        options: [
            "A) 00111111",
            "B) 11110000",
            "C) 11111111",
            "D) 11001100"
        ],
        answer: 0
    },
    {
        question: "Simplify (A + B')' using DeMorgan's:",
        options: [
            "A) A'•B",
            "B) A' + B",
            "C) A•B'",
            "D) A + B'"
        ],
        answer: 0
    },
    {
        question: "Which gate can be used to build ANY logic circuit?",
        options: [
            "A) AND",
            "B) OR",
            "C) NAND",
            "D) XOR"
        ],
        answer: 2
    },
    {
        question: "To use a NOR gate as an inverter (NOT gate), you must:",
        options: [
            "A) Tie one input to 0 and feed the signal to the other",
            "B) Short both inputs together",
            "C) Connect both inputs to Vcc (logic 1)",
            "D) Use a feedback loop from the output"
        ],
        answer: 1
    },
    {
        question: "How can you make an OR gate using only NAND gates?",
        options: [
            "A) NAND the inputs, then NAND the output",
            "B) NOT the inputs first, then NAND them",
            "C) NAND the inputs, then NOT the output",
            "D) NOT the inputs first, then AND them"
        ],
        answer: 1
    },
    {
        question: "The expression G = xyz + x'y'z outputs 1 for which input combinations? (Assume order: xyz)",
        options: [
            "A) 000, 111",
            "B) 001, 110",
            "C) 011, 101",
            "D) 010, 100"
        ],
        answer: 1
    },
    {
        question: "The expression F = (x + y')•z corresponds to:",
        options: [
            "A) AND-OR circuit",
            "B) OR-AND circuit",
            "C) NAND-only circuit",
            "D) NOR-only circuit"
        ],
        answer: 1
    },
    {
        question: "To convert a circuit to a truth table, you first derive the:",
        options: [
            "A) Boolean expression",
            "B) Minterms",
            "C) Maxterms",
            "D) Karnaugh map"
        ],
        answer: 0
    }
];
    
    // Initialize the quiz
    function initQuiz() {
        userAnswers = new Array(quizQuestions.length).fill(null);
        showQuestion();
        updateButtons();
    }
    
    // Display the current question
    function showQuestion() {
        const question = quizQuestions[currentQuestion];
        
        const questionHTML = `
            <div class="question-container">
                <div class="question">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}" 
                             data-index="${index}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        quizContainer.innerHTML = questionHTML;
        
        // Add event listeners to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', selectOption);
        });
        
        // Update progress bar
        progressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
    }
    
    // Handle option selection
    function selectOption(e) {
        const selectedOption = e.currentTarget;
        const options = document.querySelectorAll('.option');
        const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
        
        // Remove selected class from all options
        options.forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        selectedOption.classList.add('selected');
        
        // Store user's answer
        userAnswers[currentQuestion] = selectedIndex;
    }
    
    // Update navigation buttons state
    function updateButtons() {
        prevButton.disabled = currentQuestion === 0;
        nextButton.disabled = currentQuestion === quizQuestions.length - 1;
        submitButton.style.display = currentQuestion === quizQuestions.length - 1 ? 'block' : 'none';
    }
    
    // Show next question
    function showNextQuestion() {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
            updateButtons();
        }
    }
    
    // Show previous question
    function showPrevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
            updateButtons();
        }
    }
    
    // Calculate and display results
    function showResults() {
        score = 0;
        let resultsHTML = `
            <h2>Quiz Results</h2>
            <div class="answers">
        `;
        
        quizQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.answer;
            
            if (isCorrect) {
                score++;
            }
            
            resultsHTML += `
                <div class="answer-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                    <p><strong>Your answer:</strong> ${question.options[userAnswer] || 'Not answered'}</p>
                    <p><strong>Correct answer:</strong> ${question.options[question.answer]}</p>
                </div>
            `;
        });
        
        resultsHTML += `
            </div>
            <div class="score">You scored ${score} out of ${quizQuestions.length}</div>
        `;
        
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = 'block';
        quizContainer.style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
    }
    
    // Event listeners
    nextButton.addEventListener('click', showNextQuestion);
    prevButton.addEventListener('click', showPrevQuestion);
    submitButton.addEventListener('click', showResults);
    
    // Initialize the quiz
    initQuiz();
});