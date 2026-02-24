function getInnerText(id) {
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

function updateCount(id, count) {
    document.getElementById(id).innerText = count;
}

function markInterview(cardId) {
    const interviewCount = Number(getInnerText("interview_count"));
    const rejectedCount = Number(getInnerText("rejected_count"));

    const btn = document.getElementById(`applied_button_${cardId}`);
    const card = document.getElementById(`card-${cardId}`);

    if (btn.innerText === "Interview") return;
    if (btn.innerText === "Rejected") {
        updateCount("rejected_count", rejectedCount - 1);
    }

    btn.innerText = "Interview";
    btn.classList.remove("bg-gray-300", "btn-outline", "btn-error");
    btn.classList.add("btn-success", "text-white");
    updateCount("interview_count", interviewCount + 1);
    card.dataset.status = "Interview";
}
function markRejected(cardId) {
    const interviewCount = Number(getInnerText("interview_count"));
    const rejectedCount = Number(getInnerText("rejected_count"));

    const btn = document.getElementById(`applied_button_${cardId}`);
    if (btn.innerText === "Rejected") return;

    if (btn.innerText === "Interview") {
        updateCount("interview_count", interviewCount - 1);
    }

    btn.innerText = "Rejected";
    btn.classList.remove("bg-gray-300", "btn-outline");
    btn.classList.add("btn-error", "text-white");
    updateCount("rejected_count", rejectedCount + 1);

    const card = document.getElementById(`card-${cardId}`);
    card.dataset.status = "Rejected";
}

function showOnly(filter) {
    const cards = document.querySelectorAll(".card");
    const noJobs = document.getElementById("noJobsSection");

    let found = false;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        if (filter === "all") {
            card.classList.remove("hidden");
            found = true;
        }
        else if (card.dataset.status === filter) {
            card.classList.remove("hidden");
            found = true;
        }
        else {
            card.classList.add("hidden");
        }
    }
    
    if (found) {
        noJobs.classList.add("hidden");
    } else {
        noJobs.classList.remove("hidden");
    }
}