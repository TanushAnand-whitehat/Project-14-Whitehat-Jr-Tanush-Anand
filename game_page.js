player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1_name").innerHTML = player1_name + ":";
document.getElementById("Player2_name").innerHTML = player2_name + ":";

document.getElementById("Score1").innerHTML = player1_score;
document.getElementById("Score2").innerHTML = player2_score;

document.getElementById("Question").innerHTML = "Question Turn:" + player1_name;
document.getElementById("Answer").innerHTML = "Answer Turn:" + player2_name;

function Send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    char1 = word.charAt(1);
    divide = Math.floor(word.length/2);
    char2 = word.charAt(divide);
    lengthMinus = word.length-1;
    char3 = word.charAt(lengthMinus);
    remove1 = word.replace(char1,"_");
    remove2 = remove1.replace(char2,"_");
    remove3 = remove2.replace(char3,"_");
    console.log(remove3);
    question = "<h4 id = 'question'> Question:" + remove3+"</h4>";
    text_input = "<br> Answer:<input id ='input_box'>";
    button = "<br> <br> <button class = 'btn btn-info' onclick = 'Check()'> Check </button>"; 
    row1 = question + text_input + button;
    document.getElementById("output").innerHTML = row1;
    document.getElementById("word").innerHTML = "";
}
question_turn = "player1";
answer_turn = "player2";

function Check() {
    getAnswer = document.getElementById("input_box").value;
    console.log(getAnswer);
    answer = getAnswer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("Score1").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("Score2").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("Question").innerHTML = "Question Turn:" + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("Question").innerHTML = "Question Turn:" + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("Answer").innerHTML = "Answer Turn:" + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("Answer").innerHTML = "Answer Turn:" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
