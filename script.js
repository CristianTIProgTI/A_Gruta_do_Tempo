document.addEventListener('DOMContentLoaded', function() {
    // Função para tocar a música com base na classe
    function playMusic(musicClass) {
        const music = document.querySelector(`.${musicClass}`);
        if (music) {
            music.play();
        }
    }

    // Função para parar a música com base na classe
    function stopMusic(musicClass) {
        const music = document.querySelector(`.${musicClass}`);
        if (music) {
            music.pause();
            music.currentTime = 0; // Reinicia a música
        }
    }

    // Adiciona um evento para tocar música ao clicar em links
    document.querySelectorAll('.play-music').forEach(function(element) {
        element.addEventListener('click', function() {
            const musicClass = this.getAttribute('data-music-class');
            playMusic(musicClass);
        });
    });

    // Para a música quando o botão "Voltar para o início" for clicado
    document.querySelectorAll('.stop-music').forEach(function(button) {
        button.addEventListener('click', function() {
            // Parar a música de todas as páginas
            document.querySelectorAll('.play-music').forEach(function(music) {
                stopMusic(music.getAttribute('data-music-class'));
            });
        });
    });
});
