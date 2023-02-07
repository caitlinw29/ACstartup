const baseURL = "https://api.nookipedia.com/";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
        const sellPriceNum = data[i].sell_nook;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const monthN = data[i].n_availability;
        const arrayN = data[i].n_availability_array;
        const monthArrayN = arrayN.toString();
        const monthS = data[i].s_availability;
        const arrayS = data[i].s_availability_array;
        const monthArrayS = arrayS.toString();
        const time = data[i].time;
        const location = data[i].location;
        const flickPriceNum = data[i].sell_flick;
        const flickPriceString = numberWithCommas(flickPriceNum);
        const icon = data[i].image_url;
        const total_catch = data[i].total_catch;

        fetch("/api/bugs", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPriceNum,
            sellPriceString,
            monthN,
            monthArrayN,
            monthS,
            monthArrayS,
            time,
            location,
            flickPriceNum,
            flickPriceString,
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
        const sellPriceNum = data[i].sell_nook;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const shadow = data[i].shadow_size;
        const monthN = data[i].n_availability;
        const arrayN = data[i].n_availability_array;
        const monthArrayN = arrayN.toString();
        const monthS = data[i].s_availability;
        const arrayS = data[i].s_availability_array;
        const monthArrayS = arrayS.toString();
        const time = data[i].time;
        const location = data[i].location;
        const cjPriceNum = data[i].sell_cj;
        const cjPriceString = numberWithCommas(cjPriceNum);
        const icon = data[i].image_url;
        const total_catch = data[i].total_catch;

        fetch("/api/fish", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            sellPriceNum,
            sellPriceString,
            shadow,
            monthN,
            monthArrayN,
            monthS,
            monthArrayS,
            time,
            location,
            cjPriceNum,
            cjPriceString,
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
        const sellPriceNum = data[i].sell_nook;
        const sellPriceString = numberWithCommas(sellPriceNum);
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
            sellPriceNum,
            sellPriceString,
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

const saveFossil = async () => {
  var requestUrl = baseURL + "/nh/fossils/individuals";
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
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPriceNum = data[i].sell;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const icon = data[i].image_url;

        fetch("/api/fossil", {
          method: "POST",
          body: JSON.stringify({
            capitalName,
            sellPriceNum,
            sellPriceString,
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

const saveArt = async () => {
  var requestUrl = baseURL + "/nh/art";
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
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        const sellPriceNum = data[i].sell;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const buyPriceNum = data[i].buy;
        const buyPriceString = numberWithCommas(buyPriceNum);
        const icon = data[i].image_url;
        const hasFake = data[i].has_fake;
        const fakeIcon = data[i].fake_image_url;
        const authenticityNote = data[i].authenticity;

        fetch("/api/art", {
          method: "POST",
          body: JSON.stringify({
            capitalName,
            sellPriceNum,
            sellPriceString,
            icon,
            hasFake,
            fakeIcon,
            buyPriceNum,
            buyPriceString,
            authenticityNote,
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

document.querySelector("#seedBtnBug").addEventListener("click", saveBugs);

document.querySelector("#seedBtnFish").addEventListener("click", saveFish);

document.querySelector("#seedBtnSea").addEventListener("click", saveSea);

document.querySelector("#seedBtnFossil").addEventListener("click", saveFossil);

document.querySelector("#seedBtnArt").addEventListener("click", saveArt);

document.querySelector("#homeBtn").addEventListener("click", function () {
  document.location.replace("/home");
});
