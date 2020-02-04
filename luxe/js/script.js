let loadMore=document.getElementById('toLoad')
let buttonLM=document.getElementById('button')


buttonLM.addEventListener("click", () => {
    loadMore.style.display = "grid";
    buttonLM.style.display="none";
});
