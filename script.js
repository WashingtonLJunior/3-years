// JavaScript para controle do carrossel
let currentSlide = 0;

function showSlide(index) {
    const carousel = document.getElementById("carousel");
    const slides = carousel.children;
    const totalSlides = slides.length;

    currentSlide = (index + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Função para mostrar a animação de anel e fogos de artifício
function showAnimation() {
    const checkbox = document.getElementById("wantsToMarry");
    const ringAnimation = document.getElementById("ring-animation");
    const fireworksAnimation = document.getElementById("fireworks-animation");

    if (checkbox.checked) {
        ringAnimation.classList.remove("hidden");
        fireworksAnimation.classList.remove("hidden");

        // Remove as animações após 3 segundos
        setTimeout(() => {
            ringAnimation.classList.add("hidden");
            fireworksAnimation.classList.add("hidden");
        }, 3000);
    }
}

// Função para redirecionar para o site após aceitar o pedido
function acceptMarriage() {
    // Redireciona para o link após clicar no botão
    window.location.href = "https://w.app/Pm5v6b";
}

// Função para mostrar animação de casamento (opcional)
function showAnimation() {
    const checkbox = document.getElementById("wantsToMarry");
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        // Animação do anel de casamento e fogos de artifício
        alert("Anel e fogos de artifício aqui!"); // Exemplo, adicione a animação desejada
    }
}

let currentIndex = 0; // Começa no primeiro índice
const images = document.querySelectorAll('.carousel-image'); // Seleciona todas as imagens do carrossel
const totalImages = images.length; // Total de imagens no carrossel

// Função para mover o carrossel para a próxima imagem
function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementa o índice e garante que ele reinicie quando chegar ao fim
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Move o carrossel para a posição correta
}

// Chama a função moveCarousel a cada 1,5 segundos
setInterval(moveCarousel, 3740); // 1500 milissegundos = 1,5 segundos

// Seleciona o elemento de áudio
const audio = document.getElementById('myAudio');

// Função para silenciar o áudio
function muteAudio() {
    audio.muted = true; // Ativa o mudo
    console.log("Áudio silenciado!");

    // Após 3 minutos (180.000 milissegundos), desabilita o mudo
    setTimeout(function() {
        audio.muted = false; // Desativa o mudo
        console.log("Áudio ativado novamente!");
    }, 1000); // 180000 milissegundos = 3 minutos
}

// Chama a função para silenciar o áudio assim que a página carregar
muteAudio();


// Função para esconder a div por 3 minutos
        function hideMessage() {
            const messageDiv = document.getElementById('messageDiv');
            messageDiv.style.display = 'none'; // Torna a div invisível

            // Após 3 minutos, mostra a div novamente
            setTimeout(function() {
                messageDiv.style.display = 'block'; // Torna a div visível novamente
            }, 3000); // 180000 milissegundos = 3 minutos
        }

        // Chama a função para esconder a div ao carregar a página
        window.onload = hideMessage;

       