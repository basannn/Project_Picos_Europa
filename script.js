//Diego González Basanta

//Creamos constantes para el botón del menú y el menú desplegable
const botonMenu = document.getElementById('button-menu');
const menuDesplegable = document.getElementById('menu-desplegable');

//Agregamos un evento de clic al botón del menú para mostrar u ocultar el menú desplegable
botonMenu.addEventListener('click', function() {
  // Alternamos la clase 'activo' en el menú desplegable para mostrarlo u ocultarlo
  menuDesplegable.classList.toggle('activo');
});



const year = document.getElementById('year'); // Obtenemos el año actual utilizando el objeto Date
const currentYear = new Date().getFullYear(); // Establecemos el texto del elemento con el año actual
year.textContent = currentYear; 

