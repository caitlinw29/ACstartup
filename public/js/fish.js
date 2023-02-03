const donateFish = async (e) => {
  let id = e.currentTarget.id;

  const response = await fetch(`/api/fish/${id}`, {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Failed to donate");
  }
};

let fishDonateButtons = document.querySelectorAll(".fishDonateBtn");
fishDonateButtons.forEach((btn) => btn.addEventListener("click", donateFish));
