const donateFossil = async (e) => {
  let id = e.currentTarget.id;
  let name = e.currentTarget.dataset.name;

  const response = await fetch(`/api/fossil/${id}`, {
    method: "POST",
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/fossil");
  } else {
    alert("Failed to donate");
  }
};

let fossilDonateButtons = document.querySelectorAll(".fossilDonateBtn");
fossilDonateButtons.forEach((btn) =>
  btn.addEventListener("click", donateFossil)
);
