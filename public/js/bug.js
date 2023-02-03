const donateBug = async (e) => {
  let id = e.currentTarget.id;

  const response = await fetch(`/api/bugs/${id}`, {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //This code updates the donated boolean...across all users.

  // const response2 = await fetch(`/api/bugs/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Failed to donate");
  }
};

// document.querySelector(".donateBtn").addEventListener("click", donateBug);
let bugDonateButtons = document.querySelectorAll(".bugDonateBtn");
bugDonateButtons.forEach((btn) => btn.addEventListener("click", donateBug));
