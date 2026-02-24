function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

function updateCount(id, count){
    document.getElementById(id).innerText = count;
}

function markInterview(cardId) {

    const totalJobs = Number(getInnerText("total_jobs"));
    const interviewCount = Number(getInnerText("interview_count"));

    const appliedButton = document.getElementById(`applied_button_${cardId}`);

    appliedButton.innerText = "Interview";
    appliedButton.classList.remove("bg-gray-300", "btn-outline");
    appliedButton.classList.add("btn-success", "text-white");

    updateCount("interview_count", interviewCount + 1);
    updateCount("total_jobs", totalJobs - 1);

}

function markRejected(cardId){

    const totalJobs = Number(getInnerText("total_jobs"));
    const rejectedCount = Number(getInnerText("rejected_count"));

    const btn = document.getElementById(`applied_button_${cardId}`);

    if (btn.innerText !== "Not Applied") return;

    btn.innerText = "Rejected";
    btn.classList.remove("bg-gray-300", "btn-outline");
    btn.classList.add("btn-error", "text-white");

    updateCount("rejected_count", rejectedCount + 1);
    updateCount("total_jobs", totalJobs - 1);
}