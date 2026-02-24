const icons = document.querySelectorAll(".delete-icon");
for (let i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {

        const card = this.parentElement.parentElement.parentElement; 
        const status = card.dataset.status;
        if (status === "Interview") {
            const interview = document.getElementById("interview_count");
            interview.innerText = Number(interview.innerText) - 1;
        }
        if (status === "Rejected") {
            const rejected = document.getElementById("rejected_count");
            rejected.innerText = Number(rejected.innerText) - 1;
        }
        card.remove();
        const total = document.getElementById("total_jobs");
        total.innerText = Number(total.innerText) - 1;
    }
}
