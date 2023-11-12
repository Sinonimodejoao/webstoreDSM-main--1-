///categories
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  let currentSlide = 1;
  let slides;
  
  // Função para inicializar o carrossel
  function initCarousel() {
    slides = document.querySelectorAll(".mySlides");
    showSlides(currentSlide);
  
    // Adicione um ouvinte de clique para a seta esquerda
    document.querySelector(".prev").addEventListener("click", function () {
      plusSlides(-1);
    });
  
    // Adicione um ouvinte de clique para a seta direita
    document.querySelector(".next").addEventListener("click", function () {
      plusSlides(1);
    });
  
    // Ouvinte de evento de teclado
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        plusSlides(-1);
      } else if (event.key === "ArrowRight") {
        plusSlides(1);
      }
    });
  
    // Autoplay
    setInterval(function () {
      plusSlides(1);
    }, 5000);
  
    // Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    document.getElementById('aventura').addEventListener('click', function () {
      window.location.href = "adventure.html";
    });
  }
  
  // Função para navegar para o slide anterior/próximo
  function plusSlides(n) {
    currentSlide += n;
    if (currentSlide > slides.length) {
      currentSlide = 1;
    } else if (currentSlide < 1) {
      currentSlide = slides.length;
    }
    showSlides(currentSlide);
  }
  
  // Função para exibir os slides
  function showSlides(currentSlide) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[currentSlide - 1].style.display = "block";
  }
  
  // Chame a função de inicialização do carrossel quando a página carregar
  window.addEventListener("load", initCarousel);
  
