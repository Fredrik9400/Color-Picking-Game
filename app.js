/* Get elements */
const mainDiv = document.getElementById("main-div");
const div1 = document.getElementById("div-1");
const div2 = document.getElementById("div-2");
const div3 = document.getElementById("div-3");
const answerResult = document.getElementById("answer-result");
const correctAnswerNumber = document.getElementById("correct-answer-number");
const wrongAnswerNumber = document.getElementById("wrong-answer-number");


/* Random colors */
var getRandomColor1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
var getRandomColor2 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
var getRandomColor3 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]

/* Variables to be used inside event listender */
var backgroundColor1 = div1.style.backgroundColor;
var backgroundColor2 = div2.style.backgroundColor;
var backgroundColor3 = div3.style.backgroundColor;
var backgroundColorMain = mainDiv.style.backgroundColor;
correctAnswerCounter = 0;
wrongAnswerCounter = 0;


/* Styling functions */
mainDivStyling();
choiceBoxStyling();

function mainDivStyling() {
    var boxArray = [getRandomColor1, getRandomColor2, getRandomColor3];
    var randomBox = Math.floor(Math.random() * boxArray.length);
    Object.assign(mainDiv.style, {
        height: "300px",
        width: "300px",
        backgroundColor: `rgb(${boxArray[randomBox]})`
    });
}

function choiceBoxStyling() {
    Object.assign(div1.style, {
        height: "150px",
        width: "150px",
        backgroundColor: `rgb(${getRandomColor1})`,
    });
    Object.assign(div2.style, {
        height: "150px",
        width: "150px",
        backgroundColor: `rgb(${getRandomColor2})`,
    });
    Object.assign(div3.style, {
        height: "150px",
        width: "150px",
        backgroundColor: `rgb(${getRandomColor3})`,
    });
}

function colorRefresh() {
    getRandomColor1 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    getRandomColor2 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    getRandomColor3 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    mainDivStyling();
    choiceBoxStyling();
    backgroundColor1 = div1.style.backgroundColor;
    backgroundColor2 = div2.style.backgroundColor;
    backgroundColor3 = div3.style.backgroundColor;
    backgroundColorMain = mainDiv.style.backgroundColor;
}


/* Click-event listeners */
div1.addEventListener("click", () => {
    if (backgroundColorMain == backgroundColor1) {
        answerResult.innerHTML = "Riktig svar!";
        answerResult.style.color = "rgb(0, 256, 0)";
        correctAnswerCounter += 1;
        correctAnswerNumber.innerHTML = `Riktige svar: ${correctAnswerCounter}`;
        colorRefresh();

    } else {
        answerResult.innerHTML = "Feil svar!";
        answerResult.style.color = "rgb(256, 0, 0)";
        wrongAnswerCounter += 1;
        wrongAnswerNumber.innerHTML = `Riktige svar: ${wrongAnswerCounter}`;
        colorRefresh();
    }

});

div2.addEventListener("click", () => {
    if (backgroundColorMain == backgroundColor2) {
        answerResult.innerHTML = "Riktig svar!";
        answerResult.style.color = "rgb(0, 256, 0)";
        correctAnswerCounter += 1;
        correctAnswerNumber.innerHTML = `Riktige svar: ${correctAnswerCounter}`;
        colorRefresh();

    } else {
        answerResult.innerHTML = "Feil svar!";
        answerResult.style.color = "rgb(256, 0, 0)";
        wrongAnswerCounter += 1;
        wrongAnswerNumber.innerHTML = `Riktige svar: ${wrongAnswerCounter}`;
        colorRefresh();
    }
});

div3.addEventListener("click", () => {
    if (backgroundColorMain == backgroundColor3) {
        answerResult.innerHTML = "Riktig svar!";
        answerResult.style.color = "rgb(0, 256, 0)";
        correctAnswerCounter += 1;
        correctAnswerNumber.innerHTML = `Riktige svar: ${correctAnswerCounter}`;
        colorRefresh();

    } else {
        answerResult.innerHTML = "Feil svar!";
        answerResult.style.color = "rgb(256, 0, 0)";
        wrongAnswerCounter += 1;
        wrongAnswerNumber.innerHTML = `Riktige svar: ${wrongAnswerCounter}`;
        colorRefresh();
    }
});