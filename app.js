"use strict";
//일단 LI의 위치를 가져온다
//이벤트에 반응할수 있어야한다.
// 어떻게 애니메이션 처리를 할것인가>
var ulElement = document.querySelector("ul");
var ulStyle = window.getComputedStyle(ulElement);
var listElementArray = document.querySelectorAll("ul li.menu");
var audioElement = document.querySelector("audio");
var slideElement = document.querySelector("ul > li.slide");
var pElement = document.querySelector("p");
var togglePlay = true;
window.addEventListener('click', function () {
    togglePlay = togglePlay ? false : true;
    if (togglePlay == true) {
        audioElement === null || audioElement === void 0 ? void 0 : audioElement.pause();
    }
    else {
        audioElement === null || audioElement === void 0 ? void 0 : audioElement.play();
    }
    if (pElement != null) {
        pElement.classList.toggle("ani");
    }
});
if (slideElement != null) {
    slideElement.style.width = "calc(100% / ".concat(listElementArray.length, ")");
}
function handleSlide(_E) {
    if (slideElement != null && _E.target.tagName != "A") {
        _E.stopPropagation();
        slideElement.style.left = _E.target.offsetLeft + 'px';
    }
}
//https://www.codegrepper.com/code-examples/javascript/frameworks/node_modules/add+event+listener+for+multiple+elements
listElementArray.forEach(function (item) {
    item.addEventListener("mouseenter", handleSlide);
});
