// document.getElementById("interview_1").addEventListener("click", function() {
//     const interview1 = getInnerText("interview_1");
//     console.log(interview1);

//     const totalJobs = getInnerText("total_jobs");
//     console.log(totalJobs);

//     const interviewCount = getInnerText("interview_count");
//     console.log(interviewCount);

//     const rejectedCount = getInnerText("rejected_count");
//     console.log(rejectedCount);

//     const appliedButton1 = document.getElementById("applied_button_1");
//     appliedButton1.innerText = "Interview";
//     appliedButton1.classList.remove("bg-gray-300", "btn-outline");
//     appliedButton1.classList.add("btn-success", "text-white");

//     const updatedInterviewCount = updateCount("interview_count", Number(interviewCount) + 1);
//     const updatedTotalJobs = updateCount("total_jobs", Number(totalJobs) - 1);

// });

for (let i = 1; i <= 8; i++) {

    document.getElementById(`interview_${i}`)
        .addEventListener("click", () => markInterview(i));

    document.getElementById(`rejected_${i}`)
        .addEventListener("click", () => markRejected(i));
}

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const statusBtn = card.querySelector(".status-btn");
    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");

    if (interviewBtn) {
        interviewBtn.onclick = function() {
            card.dataset.status = "Interview";
            statusBtn.innerText = "Interview";
            statusBtn.className = "status-btn btn btn-success text-white";
        }
    }

    if (rejectedBtn) {
        rejectedBtn.onclick = function() {
            card.dataset.status = "Rejected";
            statusBtn.innerText = "Rejected";
            statusBtn.className = "status-btn btn btn-error text-white";
        }
    }
}

document.getElementById("delete-icon").onclick = function() {
    console.log("delete");
    
};