// Variables para el carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Funciones del carrusel
function showNextImage() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver a la primera imagen si llegamos al final
    }
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Volver a la última imagen si estamos en la primera
    }
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoSlide() {
    setInterval(showNextImage, 4000); // Transición automática cada 4 segundos
}

// Llamar la función para empezar el carrusel automático
startAutoSlide();
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active'); // Ocultar menú
    } else {
        sideMenu.classList.add('active'); // Mostrar menú
    }
}
// Funcionalidad del menú desplegable
const menuBtn = document.querySelector('.menu-btn');  // Botón para abrir el menú
const closeBtn = document.querySelector('.close-btn'); // Botón para cerrar el menú
const navMenu = document.querySelector('.nav-menu');   // El menú de navegación

// Abrir menú
menuBtn.addEventListener('click', () => {
    navMenu.style.display = 'block';  // Mostrar el menú al hacer clic en el botón
    navMenu.classList.add('show');
});

// Cerrar menú
closeBtn.addEventListener('click', () => {
    navMenu.style.display = 'none';  // Ocultar el menú al hacer clic en el botón de cerrar
    navMenu.classList.remove('show');
});

// Hacer que el menú se cierre al hacer clic en cualquier enlace del menú
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';  // Ocultar el menú cuando se hace clic en un enlace
        navMenu.classList.remove('show');
    });
});

// Funcionalidad para las tarjetas (si las tienes en tu archivo)
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
});

// Función para cambiar el color de los enlaces en la barra de navegación al hacer hover (según lo solicitado anteriormente)
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff0000'; // Cambia el color del enlace al pasar el mouse
        link.style.textDecoration = 'underline'; // Subrayado al hacer hover
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Vuelve al color original
        link.style.textDecoration = ''; // Quita el subrayado
    });
});
