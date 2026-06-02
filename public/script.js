const questions = [
    {
        q: "Binary of decimal 10 is?",
        options: ["1010", "1001", "1111", "1100"],
        answer: "1010"
    },
    {
        q: "Decimal value of binary 1011?",
        options: ["10", "11", "12", "13"],
        answer: "11"
    },
    {
        q: "Which gate gives output 1 when both inputs are 1?",
        options: ["OR", "NOT", "AND", "XOR"],
        answer: "AND"
    },
    {
        q: "NOT gate is also called?",
        options: ["Inverter", "Buffer", "Encoder", "Decoder"],
        answer: "Inverter"
    },
    {
        q: "Which gate outputs 1 if any one input is 1?",
        options: ["AND", "OR", "NAND", "XNOR"],
        answer: "OR"
    },
    {
        q: "Truth table represents?",
        options: [
            "Program code",
            "Logic operation",
            "CPU speed",
            "Memory"
        ],
        answer: "Logic operation"
    },
    {
        q: "Algorithm means?",
        options: [
            "Step by step solution",
            "Hardware",
            "Compiler",
            "RAM"
        ],
        answer: "Step by step solution"
    },
    {
        q: "Flowchart uses?",
        options: [
            "Symbols",
            "Machine code",
            "Registers",
            "Tables"
        ],
        answer: "Symbols"
    },
    {
        q: "Which symbol represents decision in flowchart?",
        options: [
            "Rectangle",
            "Diamond",
            "Circle",
            "Arrow"
        ],
        answer: "Diamond"
    },
    {
        q: "First phase of SDLC?",
        options: [
            "Testing",
            "Design",
            "Requirement Analysis",
            "Deployment"
        ],
        answer: "Requirement Analysis"
    },
    {
        q: "RAM stands for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Rapid Access Memory",
            "Run Access Memory"
        ],
        answer: "Random Access Memory"
    },
    {
        q: "RAM is?",
        options: [
            "Permanent",
            "Volatile",
            "Secondary",
            "Optical"
        ],
        answer: "Volatile"
    },
    {
        q: "CPU is part of?",
        options: [
            "Computer Organisation",
            "Flowchart",
            "SDLC",
            "Algorithm"
        ],
        answer: "Computer Organisation"
    },
    {
        q: "Brain of computer?",
        options: [
            "RAM",
            "ROM",
            "CPU",
            "SSD"
        ],
        answer: "CPU"
    },
    {
        q: "Which memory is permanent?",
        options: [
            "RAM",
            "Cache",
            "ROM",
            "Register"
        ],
        answer: "ROM"
    },
    {
        q: "Which gate reverses input?",
        options: [
            "OR",
            "AND",
            "NOT",
            "NOR"
        ],
        answer: "NOT"
    },
    {
        q: "Flowchart start/end symbol?",
        options: [
            "Oval",
            "Diamond",
            "Rectangle",
            "Arrow"
        ],
        answer: "Oval"
    },
    {
        q: "Binary uses how many digits?",
        options: [
            "2",
            "8",
            "10",
            "16"
        ],
        answer: "2"
    },
    {
        q: "Which SDLC phase checks errors?",
        options: [
            "Testing",
            "Planning",
            "Coding",
            "Maintenance"
        ],
        answer: "Testing"
    },
    {
        q: "1 byte equals?",
        options: [
            "4 bits",
            "6 bits",
            "8 bits",
            "16 bits"
        ],
        answer: "8 bits"
    }
];

const quizForm = document.getElementById("quizForm");

questions.forEach((question, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
        <h3>Q${index + 1}. ${question.q}</h3>
        ${question.options.map(option => `
            <label>
                <input type="radio" name="q${index}" value="${option}">
                ${option}
            </label><br>
        `).join("")}
    `;

    quizForm.appendChild(div);
});



async function submitQuiz() {

    alert("Button Clicked");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerHTML =
        `<h2>Your Score: ${score}/20</h2>`;

    try {

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbzxwpmRPPpS6ErkMxmkCO-u7AwHazmAQUohpPNrAgalZ_corilCW2NLrTdAkK9WV2hSLw/exec",
            {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    score
                })
            }
        );

        alert("Fetch Completed");

        // const data = await response.json();
        const text = await response.text();
        alert(text);
        console.log(text);

        console.log(data);

        alert(JSON.stringify(data));

    } catch (error) {

        console.log(error);

        alert("ERROR => " + error.message);
    }
}




