const catalogFurniture = async (e) => {
  let id = e.currentTarget.id;
  let name = e.currentTarget.dataset.name;

  const response = await fetch(`/api/furniture/${id}`, {
    method: "POST",
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/furniture");
  } else {
    alert("Failed to donate");
  }
};

let furnitureDonateButtons = document.querySelectorAll(".furnitureDonateBtn");
furnitureDonateButtons.forEach((btn) =>
  btn.addEventListener("click", catalogFurniture)
);
