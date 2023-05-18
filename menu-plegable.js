// Desplegar menú en premer el botó del menú hamburguesa.
function toggleMenu() {
  var block_nav = document.getElementById("block-nav");
  if(block_nav.style.display === "none") {
    block_nav.style.display = "block";
  } else {
    block_nav.style.display = "none";
  }
}

// Plegar menú en clicar fora del menú (i del botó)
$(document).click(function (e) {
  var container = $("#block-nav");
  var toggle = $("#menu");
  if (!container.is(e.target) && container.has(e.target).length === 0 && !toggle.is(e.target) && toggle.has(e.target).length === 0) {
    $("#block-nav").css("display", "none");
  }
});


// Emmagatzemar un objecte en format JSON (sessionStorage)
function storeObject(nom, object) {
  sessionStorage.setItem(nom, JSON.stringify(object));
}

// Recuperar un objecte del sessionStorage
function restoreObject(nom) {
  stored = sessionStorage.getItem(nom);
  if(stored) {
    return JSON.parse(stored);
  }
  return {};
}