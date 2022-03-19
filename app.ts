//일단 LI의 위치를 가져온다
//이벤트에 반응할수 있어야한다.
// 어떻게 애니메이션 처리를 할것인가>

const ulElement = document.querySelector("ul") as Element;
const ulStyle = window.getComputedStyle(ulElement);
const listElementArray = document.querySelectorAll<HTMLElement>("ul li.menu");
const audioElement = document.querySelector("audio");
const slideElement = document.querySelector<HTMLElement>("ul > li.slide");
const pElement = document.querySelector<HTMLElement>("p");

window.addEventListener('click', ()=>{
    if(audioElement != null){
        if (audioElement.paused) {audioElement.play();}
        else {audioElement.pause();}
        pElement?.classList.toggle("ani");
    }
})

if(slideElement != null){
    slideElement.style.width = `calc(100% / ${listElementArray.length})`;
}
function handleSlide(_E : any){
    if(slideElement != null && _E.target.tagName != "A"){
        _E.stopPropagation()
        slideElement.style.left = _E.target.offsetLeft + 'px';
    }
}

//https://www.codegrepper.com/code-examples/javascript/frameworks/node_modules/add+event+listener+for+multiple+elements
listElementArray.forEach(item => {
    item.addEventListener("mouseenter" , handleSlide);
})