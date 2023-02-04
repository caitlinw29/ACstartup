const donateSea = async (e) => {
  let id = e.currentTarget.id;
  let name = e.currentTarget.dataset.name;

  const response = await fetch(`/api/sea/${id}`, {
    method: "POST",
    body: JSON.stringify({ id, name }),
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

let seaDonateButtons = document.querySelectorAll(".seaDonateBtn");
seaDonateButtons.forEach((btn) => btn.addEventListener("click", donateSea));
