function load(files) {
  files.forEach((file) => {
    const script = document.createElement('script');
    script.setAttribute('src', `${setLink(file) + file}.js`);
    document.body.appendChild(script);
  });
}

function setLink(file) {
  let path;
  let isIndexPage = document.body.dataset.page === 'index';

  if (isIndexPage) {
    path = file === 'data' ? './src/assets/' : './src/assets/app/';
  } else {
    path = file === 'data' ? '../assets/' : '../assets/app/';
  }

  return path;
}

const files = ['data', 'menu-buttons', 'nav', 'app'];

load(files);
