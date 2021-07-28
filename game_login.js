function Login() {
    player1_name = document.getElementById("Player1_name").value;
    player2_name = document.getElementById("Player2_name").value;

    localStorage.setItem("Player1", player1_name);
    localStorage.setItem("Player2", player2_name);

    window.location = "game_page.html";
}