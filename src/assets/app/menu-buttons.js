const keys = Object.keys(state.nav);

(function populateMenuButtons() {
  const headerButtonGroup = document.querySelector(
    '.header-button-group > div'
  );
  const frag = document.createDocumentFragment();

  keys.forEach((menu) => {
    const button = document.createElement('button');
    button.setAttribute('class', `menu-button is-${menu}`);
    button.setAttribute('type', 'button');
    button.setAttribute('data-role', 'tab');
    button.setAttribute('aria-controls', 'nav');
    button.textContent = menu;

    frag.appendChild(button);
  });

  headerButtonGroup.appendChild(frag);
})();
