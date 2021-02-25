// Header navigation 목록 생성
let navigationKey = Object.keys(state.네비게이션);


function CreateNav (list, dataArray, key) {
  this.goToPageList = document.querySelector(list);
  this.dataArray = dataArray;

  this.createList = function () {
    for (let i=0; i<this.dataArray.length; i++) {
      let goToPageListItem = document.createElement("li");
      goToPageListItem.className = "go-to-page-list-items";
      this.goToPageList.append(goToPageListItem);

      let goToPageAnchor = document.createElement("a");
      goToPageAnchor.className = "go-to-page-anchor";
      goToPageAnchor.href = "../01-" + key + "/" + this.dataArray[i].id + "-" + this.dataArray[i].href + ".html";
      goToPageAnchor.textContent = this.dataArray[i].id + "-" + this.dataArray[i].href;
      goToPageListItem.append(goToPageAnchor);
    }
  };
}

let htmlNav = new CreateNav("#go-to-page-html", state.네비게이션.html, navigationKey[0]);
let cssNav = new CreateNav("#go-to-page-css", state.네비게이션.css, navigationKey[1]);
let jsNav = new CreateNav("#go-to-page-javascript", state.네비게이션.javascript, navigationKey[2]);

htmlNav.createList();
cssNav.createList();
jsNav.createList();



// Main 탐색경로 목록 생성
function navPath () {
  let mainTag = document.querySelector("main");
  let pageURL = document.URL;
  let fileName = pageURL.substring(pageURL.lastIndexOf("/") + 1, pageURL.lastIndexOf("."));
  console.log(fileName);
  let folderName = document.URL.split("/").slice(-2)[0];

  let divTag = document.createElement("div");
  divTag.textContent = folderName + " > " + fileName;
  divTag.className = "nav-path";
  mainTag.append(divTag);
};

navPath();
