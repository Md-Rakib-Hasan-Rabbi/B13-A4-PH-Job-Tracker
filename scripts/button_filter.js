const filterAll = document.getElementById("filterAll");
const filterInterview = document.getElementById("filterInterview");
const filterRejected = document.getElementById("filterRejected");

function setActive(button) {
    filterAll.className = "btn btn-soft w-[80px] h-[32px]";
    filterInterview.className = "btn btn-soft w-[80px] h-[32px]";
    filterRejected.className = "btn btn-soft w-[80px] h-[32px]";
    button.className = "btn btn-primary w-[80px] h-[32px]";
}
filterAll.onclick = function() {
    showOnly("all");
    setActive(filterAll);
}
filterInterview.onclick = function() {
    showOnly("Interview");  
    setActive(filterInterview);
}
filterRejected.onclick = function() {
    showOnly("Rejected");  
    setActive(filterRejected);
}