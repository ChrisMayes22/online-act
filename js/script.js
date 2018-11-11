var currentQuestion = null;

window.onload = function () {
    
    var aButton = document.getElementById("a");
    var bButton = document.getElementById("b");
    var cButton = document.getElementById("c");
    var dButton = document.getElementById("d");
    var eButton = document.getElementById("e");
    var buttonArray = [aButton, bButton, cButton, dButton, eButton]
    var timerMinutes = document.getElementById("timer-minutes");
    var timerSeconds = document.getElementById("timer-seconds");
    var startContainer = document.getElementById("startContainer");
    var quizContainer = document.getElementById("quizContainer");
    var endContainer = document.getElementById("endContainer");
    var feedbackContainer = document.getElementById("feedbackContainer");
    
    function endQuiz() {
        quizContainer.style.display = "none";
        endContainer.style.display = "flex";
    }
    
    function submitAnswers() {
        var confirmSubmission = window.confirm("Are you sure you want to submit your answers?");
        if(confirmSubmission){
            endQuiz();
        }
    }
    document.getElementById("submitAnswers").addEventListener("click", submitAnswers);
    
    function padZero(num) {
        if(num < 10) {
            num = "0" + num.toString();
        }
        return num;
    }
    
    function timer() {
        var now = new Date;
        var milliseconds = now.getTime();
        var seconds = milliseconds / (1000);
        var minutesLeft = Number(timerMinutes.innerHTML);
        var secondsLeft = Number(timerSeconds.innerHTML);
        if((minutesLeft <= 0) && (secondsLeft <= 0)) {
            endQuiz();
        } else if (secondsLeft <= 0) {
            var minutes = minutesLeft - 1;
            timerMinutes.innerHTML = padZero(minutes);
            timerSeconds.innerHTML = 59;
            window.setTimeout(timer, 1000);
        } else {
            var seconds = secondsLeft -1;
            timerSeconds.innerHTML = padZero(seconds);
            window.setTimeout(timer, 1000);
        }
    }
    
    function startQuiz() {
        startContainer.style.display = "none";
        quizContainer.style.display = "flex";
        timer();
    }
    document.getElementById("startButton").addEventListener("click", startQuiz);
    
    
    
    function TestItem (imageUrl, rightAnsw, a, b, c, d, e) {
        this.imageUrl = imageUrl;
        this.rightAnsw = rightAnsw;
        this.a = a; 
        this.b = b; 
        this.c = c; 
        this.d = d; 
        this.e = e;
        this.chosenAnsw = false;
    }
    
    var questionOne = new TestItem("images/thirds-question.jpg", "e", "a) 12", "b) 15", "c) 27", "d) 54", "e) 81");
    
    currentQuestion = questionOne;
    function chooseAnswer() {
        currentQuestion.chosenAnsw = currentLetter;
        console.log("Chose answer: " + currentQuestion.chosenAnsw);
    }
    function chooseA() {
        currentQuestion.chosenAnsw = "a";
        console.log("the user chose: " + currentQuestion.chosenAnsw);
    }
    function chooseB() {
        currentQuestion.chosenAnsw = "b";
        console.log("the user chose: " + currentQuestion.chosenAnsw);
    }
    function chooseC() {
        currentQuestion.chosenAnsw = "c";
        console.log("the user chose: " + currentQuestion.chosenAnsw);
    }
    function chooseD() {
        currentQuestion.chosenAnsw = "d";
        console.log("the user chose: " + currentQuestion.chosenAnsw);
    }
    function chooseE() {
        currentQuestion.chosenAnsw = "e";
        console.log("the user chose: " + currentQuestion.chosenAnsw);
    }
    document.getElementById("a").addEventListener("click", chooseA);
    document.getElementById("b").addEventListener("click", chooseB);
    document.getElementById("c").addEventListener("click", chooseC);
    document.getElementById("d").addEventListener("click", chooseD);
    document.getElementById("e").addEventListener("click", chooseE);
    
    
    var questionTwo = new TestItem("images/m-less-than-n.jpg", "d", "a) m is odd", "b) n is odd", "c) n - m is even", "d) n^2 - m^2 is odd", "e) m^2 + n^2 is even");
    var questionThree = new TestItem("images/graph-problem.jpg", "d", "a) I", "b) II", "c) III", "d) IV", "e) V");
    var questionFour = new TestItem("images/triangle-problem.jpg", "e", "a) 2(y + z) + x", "b) 2(x + y + z)", "c) 2(x + y)", "d) 2(x + z)", "e) 2(y + z)");
    var questionFive = new TestItem("images/trig-problem.jpg", "b", "a) 0 < a1 < a2", "b) 0 < a2 < a1", "c) a1 < 0 < a2", "d) a1 < a2 < 0", "e) a2 < a1 < 0");
    var questionSix = new TestItem("images/trig-identities.jpg", "c", "a) 0", "b) 1", "c) 2", "d) -tan(x)", "e) sin(2x)");
    var questionSeven = new TestItem("images/value-of-b.jpg", "a", "a) 8", "b) -8", "c) -25", "d) -26", "e) 4 - 7√6");
    var questionEight = new TestItem("images/logarithm-problem.jpg", "d", "a) 3", "b) 21", "c) 72", "d) 125", "e) 243");
    var questionNine = new TestItem("images/pentagon-quadrilateral.jpg", "c", "a) 18", "b) 30", "c) 36", "d) 45", "e) 72");
    var questionTen = new TestItem("images/cube-problem.jpg", "e", "a) 9", "b) 18", "c) 27", "d) 36", "e) 54");
    
    
    function callQuestion(question) {
        var letterArray = ["a", "b", "c", "d", "e"]
        for(char in letterArray) {
            document.getElementById(letterArray[char]).innerHTML=question[letterArray[char]]
        };
        document.getElementById("questionImg").src=question.imageUrl;
        if(question.chosenAnsw) {
            for (char in letterArray){
                 document.getElementById(letterArray[char]).classList.remove("selected-button");
                document.getElementById(letterArray[char]).classList.add("unselected-button");
            }
            document.getElementById(question.chosenAnsw).classList.add("selected-button");
            document.getElementById(question.chosenAnsw).classList.remove("unselected-button");
        }
        currentQuestion = question;
        document.getElementById("a").addEventListener("click", chooseA);
        document.getElementById("b").addEventListener("click", chooseB);
        document.getElementById("c").addEventListener("click", chooseC);
        document.getElementById("d").addEventListener("click", chooseD);
        document.getElementById("e").addEventListener("click", chooseE);
    }
    
    document.getElementById("nav-one").addEventListener("click", function(){
        callQuestion(questionOne);
    });
    document.getElementById("nav-two").addEventListener("click", function(){
        callQuestion(questionTwo);
    });
    document.getElementById("nav-three").addEventListener("click", function(){
        callQuestion(questionThree);
    });
    document.getElementById("nav-four").addEventListener("click", function(){
        callQuestion(questionFour);
    });
    document.getElementById("nav-five").addEventListener("click", function(){
        callQuestion(questionFive);
    });
    document.getElementById("nav-six").addEventListener("click", function(){
        callQuestion(questionSix);
    });
    document.getElementById("nav-seven").addEventListener("click", function(){
        callQuestion(questionSeven);
    });
    document.getElementById("nav-eight").addEventListener("click", function(){
        callQuestion(questionEight);
    });
    document.getElementById("nav-nine").addEventListener("click", function(){
        callQuestion(questionNine);
    });
    document.getElementById("nav-ten").addEventListener("click", function(){
        callQuestion(questionTen);
    });
    
    
    function getFeedback() {
        var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
        feedbackContainer.innerHTML = "";
        for(question in questionArray) {
            console.log("array place: " + question);
            var feedbackPara = document.createElement("P");
            var text = document.createTextNode("Question " + (Number(question) + 1) + ": ");
            feedbackPara.appendChild(text);
            if(questionArray[question].chosenAnsw === questionArray[question].rightAnsw){
                var mySpan = document.createElement("SPAN");
                mySpan.textContent = "CORRECT";
                feedbackPara.appendChild(mySpan);
                mySpan.style.color = "green";
            } else {
                var mySpan = document.createElement("SPAN");
                mySpan.textContent = "INCORRECT";
                feedbackPara.appendChild(mySpan);
                mySpan.style.color = "red";
            }
            feedbackContainer.appendChild(feedbackPara);
        }
    }
    document.getElementById("resultsButton").addEventListener("click", getFeedback);
    
    
    $(document).ready(function(){
    $(".anchor-button").click(function() {
        $(this).siblings(".anchor-button").removeClass("selected-button").addClass("unselected-button"); 
        $(this).toggleClass("selected-button unselected-button");   
    });
    $(".nav-button-container").click(function() {
        $(this).siblings(".container").children().removeClass("selected-button").addClass("unselected-button");
        if(!currentQuestion.chosenAnsw){
            $(".answer-container").children().removeClass("selected-button").addClass("unselected-button");
        }
    });
})
    
};

