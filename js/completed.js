let complete = document.getElementById("chID");
let eleDiv = document.getElementById('changeEle');

complete.addEventListener("click", function() {
    if (eleDiv.classList.contains('ele')) {
        eleDiv.classList.replace('ele', 'eleCompleted');
        console.log("omp");

    } else if (eleDiv.classList.contains('eleCompleted')) {
        eleDiv.classList.replace('eleCompleted', 'ele');
        console.log("recomp");
    }
});
