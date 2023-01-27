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


