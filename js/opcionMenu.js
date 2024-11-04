export const menuItems = document.createElement('nav');
menuItems.className = 'menu-items';
menuItems.innerHTML = `
  <a href="#cantos">Cantos</a>
  <a href="#favoritos">Favoritos</a>
  <div class="dropdown">
    <a href="#personales">Personales</a>
    <div class="dropdown-content">
      <a href="#lista-personales">Lista Personales</a>
      <a href="#nuevo-editar">Nuevo o Editar</a>
    </div>
  </div>
  <div class="dropdown">
    <a href="#informacion">Información</a>
    <div class="dropdown-content">
      <a href="#contacto">Contacto</a>
      <a href="#comentarios">Comentarios</a>
    </div>
  </div>
`;