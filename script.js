
document.addEventListener('DOMContentLoaded', function() {
   // Função para tocar a música
function playMusicPast() {
    const music = document.getElementById('musicPast');
    music.play();
}

// Função para parar a música
function stopMusic() {
    const music = document.getElementById('musicPast');
    music.pause();
    music.currentTime = 0; // Reinicia a música
}

// Toca a música quando um link com a classe 'play-music' for clicado
document.querySelectorAll('.play-music').forEach(function(element) {
    element.addEventListener('click', function() {
        playMusicPast();
    });
});

// Para a música quando o botão "Voltar para o início" for clicado
document.querySelector('#modalSheet a[href="#"]').addEventListener('click', function() {
    stopMusic();
});

});

