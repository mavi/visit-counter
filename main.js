var counterContainer = document.querySelector(".counter");
var visitCount = localStorage.getItem("page_view");
var resetButton = document.querySelector("#reset");

if (visitCount) {

    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);

} else {

    visitCount = 0;
    localStorage.setItem("page_view", 0);

};

counterContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {

    visitCount = 0;
    localStorage.setItem("page_view", 0);
    counterContainer.innerHTML = visitCount;
    
  });