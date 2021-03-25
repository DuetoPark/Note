// Header navigation 목록 생성
const bodyData = document.body.dataset.home;
function CreateNav (list, dataArray, subject) {
  this.goToPageList = document.querySelector(list);
  this.dataArray = dataArray;

  this.createList = function () {
    for (let i=0; i<this.dataArray.length; i++) {
      let goToPageListItem = document.createElement("li");
      goToPageListItem.className = "go-to-page-list-items";
      this.goToPageList.append(goToPageListItem);

      let goToPageAnchor = document.createElement("a");
      goToPageAnchor.className = "go-to-page-anchor";

      if (bodyData) { // home 일때 앵커 링크
        goToPageAnchor.href = "./pages/01-" + subject + "/" + this.dataArray[i].id + "-" + this.dataArray[i].href + ".html";
      } else { // home 아닐 때 앵커 링크
        goToPageAnchor.href = "../01-" + subject + "/" + this.dataArray[i].id + "-" + this.dataArray[i].href + ".html";
        goToPageAnchor.setAttribute("data-subject", subject);
        goToPageAnchor.setAttribute("role", "menuitem");
      }

      goToPageAnchor.textContent = this.dataArray[i].id + "-" + this.dataArray[i].href;
      goToPageListItem.append(goToPageAnchor);
    }
  };
}

let htmlNav = new CreateNav("#go-to-page-html", state.네비게이션.html, "html");
let cssNav = new CreateNav("#go-to-page-css", state.네비게이션.css, "css");
let jsNav = new CreateNav("#go-to-page-javascript", state.네비게이션.javascript, "javascript");

htmlNav.createList();
cssNav.createList();
jsNav.createList();
