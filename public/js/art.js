const donateArt = async (e) => {
  let id = e.currentTarget.id;
  let name = e.currentTarget.dataset.name;

  const response = await fetch(`/api/art/${id}`, {
    method: "POST",
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/art");
  } else {
    alert("Failed to donate");
  }
};

let artDonateButtons = document.querySelectorAll(".artDonateBtn");
artDonateButtons.forEach((btn) => btn.addEventListener("click", donateArt));
