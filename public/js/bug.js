
const saveBugs = async () => {
  var requestUrl = "https://acnhapi.com/v1a/bugs";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const name = data[i].name["name-USen"];
        const sellPrice = data[i].price;
        fetch("/api/bugs", {
          method: "POST",
          body: JSON.stringify({ name, sellPrice }),
          headers: { "Content-Type": "application/json" },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
          })
          .catch((error) => console.error("Error:", error));
      }
    });
};

document.querySelector(".saveBugs").addEventListener("click", saveBugs);

const donateBug = async (e) => {
  let id = e.currentTarget.id;

  const response = await fetch(`/api/bugs/${id}`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
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
    document.location.replace('/home');
  } else {
    alert('Failed to donate');
  }
}

// document.querySelector(".donateBtn").addEventListener("click", donateBug);
donateButtons = document.querySelectorAll('.donateBtn');
donateButtons.forEach((btn) => btn.addEventListener("click", donateBug));
