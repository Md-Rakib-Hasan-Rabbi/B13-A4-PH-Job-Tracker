function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}

function updateCount(id, count) {
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

function markRejected(cardId) {
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

function showOnly(id) {
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");
  const card4 = document.getElementById("card-4");
  const card5 = document.getElementById("card-5");
  const card6 = document.getElementById("card-6");
  const card7 = document.getElementById("card-7");
  const card8 = document.getElementById("card-8");

  card1.classList.add("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  card4.classList.add("hidden");
  card5.classList.add("hidden");
  card6.classList.add("hidden");
  card7.classList.add("hidden");
  card8.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

  
}
