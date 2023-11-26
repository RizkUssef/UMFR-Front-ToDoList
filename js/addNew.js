let containerDiv = document.getElementById("addNewList");
containerDiv.addEventListener("mouseenter",function () {
    let linkElement = document.createElement("a");
    linkElement.className = "addShow";
    linkElement.setAttribute("href","../pages/Create Forms/create first list.html")
    // linkElement.href ="pages/Create Forms/create first list.html"
    linkElement.innerHTML="<img id='del' src='../../images/sidebar icons/add.svg' alt='loading...'>"
    containerDiv.appendChild(linkElement);
});
containerDiv.addEventListener("mouseleave",function () {
    let dele = document.getElementById("del");
    dele.remove();
});


let containerTagDiv = document.getElementById("addNewTag");
containerTagDiv.addEventListener("mouseenter",function () {
    let linkElement = document.createElement("a");
    linkElement.className = "addShow";
    linkElement.href ="/Create Forms/create first list.html"
    linkElement.innerHTML="<img id='delTag' src='../../images/sidebar icons/add.svg' alt='loading...'>"
    containerTagDiv.appendChild(linkElement);
});
containerTagDiv.addEventListener("mouseleave",function () {
    let dele = document.getElementById("delTag");
    dele.remove();
});



// show form
let unSecBtn = document.getElementById('addTaskUnsec');
let unSecForm = document.getElementById('addTaskFormUnsec');

unSecBtn.addEventListener( "click",function(){
    if(unSecForm.classList.contains('vis')){
        unSecForm.classList.replace('vis','show');
        unSecBtn.classList.replace('clickToAdd','vis');
    }
});


let secBtn = document.getElementById('addTaskFirstSec');
let secForm = document.getElementById('addTaskFirstForm');

secBtn.addEventListener( "click",function(){
    if(secForm.classList.contains('vis')){
        secForm.classList.replace('vis','show');
        secBtn.classList.replace('clickToAdd','vis');
    }
});





