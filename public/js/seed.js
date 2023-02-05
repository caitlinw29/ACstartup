const baseURL = "https://api.nookipedia.com/";

const saveBugs = async () => {
  var requestUrl = baseURL + "/nh/bugs";
  fetch(requestUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": "",
      "Accept-Version": "1.0.0",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const id = data[i].number;
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPrice = data[i].sell_nook;
        const monthN = data[i].n_availability;
        const arrayN = data[i].n_availability_array;
        const monthArrayN = arrayN.toString();
        const monthS = data[i].s_availability;
        const arrayS = data[i].s_availability_array;
        const monthArrayS = arrayS.toString();
        const time = data[i].time;
        const location = data[i].location;
        const flickPrice = data[i].sell_flick;
        const icon = data[i].image_url;
        const total_catch = data[i].total_catch;

        fetch("/api/bugs", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPrice,
            monthN,
            monthArrayN,
            monthS,
            monthArrayS,
            time,
            location,
            flickPrice,
            icon,
            total_catch,
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
  var requestUrl = baseURL + "/nh/fish";
  fetch(requestUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": "",
      "Accept-Version": "1.0.0",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const id = data[i].number;
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPrice = data[i].sell_nook;
        const shadow = data[i].shadow_size;
        const monthN = data[i].n_availability;
        const arrayN = data[i].n_availability_array;
        const monthArrayN = arrayN.toString();
        const monthS = data[i].s_availability;
        const arrayS = data[i].s_availability_array;
        const monthArrayS = arrayS.toString();
        const time = data[i].time;
        const location = data[i].location;
        const cjPrice = data[i].sell_cj;
        const icon = data[i].image_url;
        const total_catch = data[i].total_catch;

        fetch("/api/fish", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPrice,
            shadow,
            monthN,
            monthArrayN,
            monthS,
            monthArrayS,
            time,
            location,
            cjPrice,
            icon,
            total_catch,
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
  var requestUrl = baseURL + "/nh/sea";
  fetch(requestUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": "",
      "Accept-Version": "1.0.0",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const id = data[i].number;
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPrice = data[i].sell_nook;
        const shadow = data[i].shadow_size;
        const monthN = data[i].n_availability;
        const arrayN = data[i].n_availability_array;
        const monthArrayN = arrayN.toString();
        const monthS = data[i].s_availability;
        const arrayS = data[i].s_availability_array;
        const monthArrayS = arrayS.toString();
        const time = data[i].time;
        const speed = data[i].shadow_movement;
        const icon = data[i].image_url;
        const total_catch = data[i].total_catch;

        fetch("/api/sea", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPrice,
            shadow,
            monthN,
            monthArrayN,
            monthS,
            monthArrayS,
            time,
            speed,
            icon,
            total_catch,
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
