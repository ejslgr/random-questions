<script src="questions.js"></script>

function newQuestion() {
    var randomNumber = Math.floor(Math.random() * (questions.length));
    document.getElementById('questionDisplay').innerHTML = questions[randomNumber];
}
