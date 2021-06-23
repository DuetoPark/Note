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

  path = isIndexPage ? './src/assets/app/' : '../assets/app/';

  return path;
}

const files = ['menu-buttons', 'nav', 'app', 'toggle'];

load(files);
