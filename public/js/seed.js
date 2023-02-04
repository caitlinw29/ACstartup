const saveBugs = async () => {
  var requestUrl = "https://acnhapi.com/v1a/bugs";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const id = data[i].id;
        const name = data[i].name["name-USen"];
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPrice = data[i].price;
        const monthN = data[i].availability["month-northern"];
        const monthS = data[i].availability["month-southern"];
        const isAllDay = data[i].availability.isAllDay;
        const isAllYear = data[i].availability.isAllYear;
        const time = data[i].availability.time;
        const location = data[i].availability.location;
        const flickPrice = data[i]["price-flick"];
        const image = data[i].image_uri;
        const icon = data[i].icon_uri;

        fetch("/api/bugs", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPrice,
            monthN,
            monthS,
            isAllDay,
            isAllYear,
            time,
            location,
            flickPrice,
            image,
            icon,
          }),
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

const saveFish = async () => {
  var requestUrl = "https://acnhapi.com/v1a/fish";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const id = data[i].id;
        const name = data[i].name["name-USen"];
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPrice = data[i].price;
        const shadow = data[i].shadow;
        const monthN = data[i].availability["month-northern"];
        const monthS = data[i].availability["month-southern"];
        const isAllDay = data[i].availability.isAllDay;
        const isAllYear = data[i].availability.isAllYear;
        const time = data[i].availability.time;
        const location = data[i].availability.location;
        const cjPrice = data[i]["price-cj"];
        const image = data[i].image_uri;
        const icon = data[i].icon_uri;

        fetch("/api/fish", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPrice,
            shadow,
            monthN,
            monthS,
            isAllDay,
            isAllYear,
            time,
            location,
            cjPrice,
            image,
            icon,
          }),
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

const saveSea = async () => {
  var requestUrl = "https://acnhapi.com/v1a/sea";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const id = data[i].id;
        const name = data[i].name["name-USen"];
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPrice = data[i].price;
        const shadow = data[i].shadow;
        const monthN = data[i].availability["month-northern"];
        const monthS = data[i].availability["month-southern"];
        const isAllDay = data[i].availability.isAllDay;
        const isAllYear = data[i].availability.isAllYear;
        const time = data[i].availability.time;
        const speed = data[i].speed;
        const image = data[i].image_uri;
        const icon = data[i].icon_uri;

        fetch("/api/sea", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPrice,
            shadow,
            monthN,
            monthS,
            isAllDay,
            isAllYear,
            time,
            speed,
            image,
            icon,
          }),
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

document.querySelector("#seedBtn").addEventListener("click", function () {
  saveBugs();
  saveFish();
  saveSea();
});

document.querySelector("#homeBtn").addEventListener("click", function () {
  document.location.replace("/home");
});
