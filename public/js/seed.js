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







const achData = [
    {
      "Name": "(island name) Miles!",
      "Award Criteria": "Awarded when Nook Miles program is first unlocked",
      "Number": 1,
      "Internal Category": "Event",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Angling for Perfection!",
      "Award Criteria": "Number of total fish caught",
      "Number": 2,
      "Internal Category": "Fish",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 100,
      "Tier 3": 500,
      "Tier 4": 2000,
      "Tier 5": 5000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Island Ichthyologist",
      "Award Criteria": "Number of unique fish caught",
      "Number": 3,
      "Internal Category": "Fish",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 20,
      "Tier 3": 40,
      "Tier 4": 60,
      "Tier 5": 80,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Island Togetherness",
      "Award Criteria":
        "Number of days in which you've talked to every one of your villagers",
      "Number": 4,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 30,
      "Tier 5": 50,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "You've Got the Bug",
      "Award Criteria": "Number of total bugs caught",
      "Number": 5,
      "Internal Category": "Insect",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 100,
      "Tier 3": 500,
      "Tier 4": 2000,
      "Tier 5": 5000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Bugs Don't Bug Me",
      "Award Criteria": "Number of unique bugs caught",
      "Number": 6,
      "Internal Category": "Insect",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 20,
      "Tier 3": 40,
      "Tier 4": 60,
      "Tier 5": 80,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Have a Nice DIY!",
      "Award Criteria": "Number of DIY recipes collected",
      "Number": 7,
      "Internal Category": "DIY",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 50,
      "Tier 3": 100,
      "Tier 4": 150,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Deep Dive",
      "Award Criteria": "Number of total sea creatures caught",
      "Number": 8,
      "Internal Category": "Seafood",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 50,
      "Tier 3": 250,
      "Tier 4": 1000,
      "Tier 5": 2500,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Underwater Understudy",
      "Award Criteria": "Number of unique sea creatures caught",
      "Number": 9,
      "Internal Category": "Seafood",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 30,
      "Tier 5": 40,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "DIY Tools",
      "Award Criteria": "Number of tools you've crafted",
      "Number": 10,
      "Internal Category": "DIY",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 50,
      "Tier 3": 200,
      "Tier 4": 1000,
      "Tier 5": 3000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "DIY Furniture",
      "Award Criteria": "Number of furniture pieces you've crafted",
      "Number": 11,
      "Internal Category": "DIY",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 50,
      "Tier 3": 200,
      "Tier 4": 1000,
      "Tier 5": 3000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Furniture Freshener",
      "Award Criteria":
        "Number of times you've customized furniture at a workbench",
      "Number": 12,
      "Internal Category": "DIY",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Rough-hewn",
      "Award Criteria":
        "Number of individual wood pieces you've chopped from trees",
      "Number": 13,
      "Internal Category": "DIY",
      "Num of Tiers": 5,
      "Tier 1": 20,
      "Tier 2": 100,
      "Tier 3": 500,
      "Tier 4": 2000,
      "Tier 5": 5000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Writing a Cookbook?",
      "Award Criteria": "Learn a certain number of cooking recipes",
      "Number": 14,
      "Internal Category": "Cooking",
      "Num of Tiers": 3,
      "Tier 1": 10,
      "Tier 2": 30,
      "Tier 3": 50,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Mmm-Mmm-Miles!",
      "Award Criteria": "Number of foods cooked",
      "Number": 15,
      "Internal Category": "Cooking",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 30,
      "Tier 3": 100,
      "Tier 4": 300,
      "Tier 5": 500,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Trashed Tools",
      "Award Criteria": "Number of tools you've broken",
      "Number": 16,
      "Internal Category": "HHA",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Rock-Splitting Champ",
      "Award Criteria":
        "Awarded the first time you get 8 materials from striking a single rock",
      "Number": 17,
      "Internal Category": "HHA",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Bona Fide Bone Finder!",
      "Award Criteria": "Awarded the first time you dig up a fossil",
      "Number": 18,
      "Internal Category": "HHA",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Fossil Assessment",
      "Award Criteria": "Number of fossils you've had assessed by Blathers",
      "Number": 19,
      "Internal Category": "HHA",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 30,
      "Tier 3": 100,
      "Tier 4": 300,
      "Tier 5": 500,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Nice to Meet You, Gyroid!",
      "Award Criteria": "Awarded the first time you dig up a gyroid",
      "Number": 20,
      "Internal Category": "HHA",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Gyroid Getter",
      "Award Criteria": "Number of unique gyroids you have touched",
      "Number": 21,
      "Internal Category": "HHA",
      "Num of Tiers": 3,
      "Tier 1": 5,
      "Tier 2": 15,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Greedy Weeder",
      "Award Criteria": "Number of weeds you've sold",
      "Number": 22,
      "Internal Category": "Plant",
      "Num of Tiers": 5,
      "Tier 1": 50,
      "Tier 2": 200,
      "Tier 3": 1000,
      "Tier 4": 2000,
      "Tier 5": 3000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Flower Power",
      "Award Criteria":
        "Number of flower seeds you've planted (does not count digging up and replanting existing flowers)",
      "Number": 23,
      "Internal Category": "Plant",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 50,
      "Tier 3": 100,
      "Tier 4": 200,
      "Tier 5": 300,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Flower Tender",
      "Award Criteria": "Number of flowers you've watered",
      "Number": 24,
      "Internal Category": "Plant",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 50,
      "Tier 3": 100,
      "Tier 4": 500,
      "Tier 5": 1000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Tomorrow's Trees Today",
      "Award Criteria":
        "Number of tree saplings you've planted (does not count planting fruits or replanting existing trees)",
      "Number": 25,
      "Internal Category": "Plant",
      "Num of Tiers": 3,
      "Tier 1": 5,
      "Tier 2": 10,
      "Tier 3": 30,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Pick of the Bunch",
      "Award Criteria": "Number of fruits you've sold to the shop",
      "Number": 26,
      "Internal Category": "Plant",
      "Num of Tiers": 5,
      "Tier 1": 20,
      "Tier 2": 100,
      "Tier 3": 500,
      "Tier 4": 1000,
      "Tier 5": 3000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Fruit Roots",
      "Award Criteria":
        "Awarded for each unique fruit you've planted (cherry, orange, pear, peach, apple, and coconut)",
      "Number": 27,
      "Internal Category": "Plant",
      "Num of Tiers": 6,
      "Tier 1": 1,
      "Tier 2": 1,
      "Tier 3": 1,
      "Tier 4": 1,
      "Tier 5": 1,
      "Tier 6": 1,
      "Reward Tier 1": 100,
      "Reward Tier 2": 200,
      "Reward Tier 3": 300,
      "Reward Tier 4": 500,
      "Reward Tier 5": 700,
      "Reward Tier 6": 1000,
      "Sequential": false,
      "Track": "./img/awards-6-blank-connected.svg",
      "TrackSolo": "./img/track-straight-6-connected.svg",
    },
    {
      "Name": "Shrubbery Hubbubbery",
      "Award Criteria":
        "Number of shrub starts you've planted (replanting existing shrubs does not count)",
      "Number": 28,
      "Internal Category": "Plant",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 5,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Sprout Out Loud",
      "Award Criteria":
        "Number of produce sprouts you've planted (replanting existing plants does not count)",
      "Number": 29,
      "Internal Category": "Vegetable",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Executive Producer",
      "Award Criteria":
        "Number of produce you've harvested",
      "Number": 30,
      "Internal Category": "Vegetable",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 50,
      "Tier 3": 150,
      "Tier 4": 500,
      "Tier 5": 1000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Go Ahead. Be Shellfish!",
      "Award Criteria": "Number of seashells you've sold",
      "Number": 31,
      "Internal Category": "Fish",
      "Num of Tiers": 5,
      "Tier 1": 10,
      "Tier 2": 50,
      "Tier 3": 200,
      "Tier 4": 500,
      "Tier 5": 1000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Clam and Collected",
      "Award Criteria": "Number of clams you've dug up",
      "Number": 32,
      "Internal Category": "Fish",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Trash Fishin'",
      "Award Criteria":
        "Number of trash items (cans, tires, or boots) you've fished up",
      "Number": 33,
      "Internal Category": "Fish",
      "Num of Tiers": 3,
      "Tier 1": 3,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Cast Master",
      "Award Criteria":
        "Number of fish you've caught in a single streak without any getting away (the streak can be across multiple days or weeks, you just can't miss a fish)",
      "Number": 34,
      "Internal Category": "Fish",
      "Num of Tiers": 3,
      "Tier 1": 10,
      "Tier 2": 50,
      "Tier 3": 100,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Dream House",
      "Award Criteria": "Number of times you've expanded your home",
      "Number": 35,
      "Internal Category": "Event",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 2,
      "Tier 3": 5,
      "Tier 4": 6,
      "Tier 5": 7,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 3000,
      "Reward Tier 5": 5000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Decorated Decorator",
      "Award Criteria":
        'Awarded the first time you get an "S" ranking from the HHA',
      "Number": 36,
      "Internal Category": "Event",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 1000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Hoard Reward",
      "Award Criteria": "Number of furniture pieces you've placed in your house",
      "Number": 37,
      "Internal Category": "Event",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 15,
      "Tier 3": 30,
      "Tier 4": 100,
      "Tier 5": 150,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 3000,
      "Reward Tier 5": 5000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Good Things in Store!",
      "Award Criteria": "Number of items you've stored in your home storage",
      "Number": 38,
      "Internal Category": "Event",
      "Num of Tiers": 5,
      "Tier 1": 20,
      "Tier 2": 50,
      "Tier 3": 100,
      "Tier 4": 200,
      "Tier 5": 300,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 3000,
      "Reward Tier 5": 5000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Remarkable Remodeler",
      "Award Criteria":
        "Number of times you've remodeled the outside appearance of your home",
      "Number": 39,
      "Internal Category": "Event",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 3,
      "Tier 3": 5,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Smile Isle",
      "Award Criteria":
        "Number of villager requests you've fulfilled (such as returning lost items or visiting their home when requested)",
      "Number": 40,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 300,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Reaction Ruler",
      "Award Criteria": "Number of reactions you've learned",
      "Number": 41,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 30,
      "Tier 5": 42,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Island Shutterbug",
      "Award Criteria":
        "Awarded the first time you take a photo using the camera app on the NookPhone (screenshot button does not count, must use the app)",
      "Number": 42,
      "Internal Category": "Smartphone",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Edit Credit",
      "Award Criteria":
        "Awarded the first time you edit your Passport (title, comment, or photo)",
      "Number": 43,
      "Internal Category": "Smartphone",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "NookPhone Life",
      "Award Criteria": "Awarded after the 10th time you open your NookPhone",
      "Number": 44,
      "Internal Category": "Smartphone",
      "Num of Tiers": 1,
      "Tier 1": 10,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "That's One Smart Phone",
      "Award Criteria": "Awarded after the 1000th time you open your NookPhone",
      "Number": 45,
      "Internal Category": "Smartphone",
      "Num of Tiers": 1,
      "Tier 1": 1000,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 1000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Shop to It",
      "Award Criteria":
        "Number of times you've ordered from the Nook Shopping catalog",
      "Number": 46,
      "Internal Category": "Smartphone",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Growing Collection",
      "Award Criteria":
        "Number of unique furniture pieces you've added to your catalog",
      "Number": 47,
      "Internal Category": "Smartphone",
      "Num of Tiers": 5,
      "Tier 1": 100,
      "Tier 2": 200,
      "Tier 3": 300,
      "Tier 4": 400,
      "Tier 5": 500,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Nook Miles for Miles!",
      "Award Criteria": "Number of Nook Miles+ goals you've completed",
      "Number": 48,
      "Internal Category": "Smartphone",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 50,
      "Tier 3": 200,
      "Tier 4": 1000,
      "Tier 5": 3000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "First-Time Buyer",
      "Award Criteria": "Awarded the first time you purchase an item from a shop",
      "Number": 49,
      "Internal Category": "Money",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Seller of Unwanted Stuff",
      "Award Criteria": "Awarded the first time you sell an item to a shop",
      "Number": 50,
      "Internal Category": "Money",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Moving Fees Paid!",
      "Award Criteria":
        "Awarded when you pay off your initial loan using Nook Miles",
      "Number": 51,
      "Internal Category": "Money",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Bell Ringer",
      "Award Criteria": "Number of total bells you've spent in shops",
      "Number": 52,
      "Internal Category": "Money",
      "Num of Tiers": 5,
      "Tier 1": 5000,
      "Tier 2": 50000,
      "Tier 3": 500000,
      "Tier 4": 2000000,
      "Tier 5": 5000000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Miles for Stalkholders",
      "Award Criteria": "Awarded the first time you purchase turnips",
      "Number": 53,
      "Internal Category": "Money",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Cornering the Stalk Market",
      "Award Criteria":
        "Number of total bells you've profited from selling turnips",
      "Number": 54,
      "Internal Category": "Money",
      "Num of Tiers": 5,
      "Tier 1": 1000,
      "Tier 2": 10000,
      "Tier 3": 100000,
      "Tier 4": 1000000,
      "Tier 5": 10000000,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "No More Loan Payments!",
      "Award Criteria":
        "Awarded after paying off your first house loan with bells",
      "Number": 55,
      "Internal Category": "Money",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 1000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Bulletin-Board Benefit",
      "Award Criteria":
        "Awarded the first time you post a message on your town bulletin board",
      "Number": 56,
      "Internal Category": "Communication",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Popular Pen Pal",
      "Award Criteria": "Number of letters you've sent",
      "Number": 57,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 200,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Flea Flicker",
      "Award Criteria": "Number of times you've caught fleas off a villager",
      "Number": 58,
      "Internal Category": "Insect",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 5,
      "Tier 3": 10,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Cicada Memories",
      "Award Criteria": "Awarded the first time you catch a cicada shell",
      "Number": 59,
      "Internal Category": "Insect",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 1000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Netting Better!",
      "Award Criteria":
        "Awarded the first time you catch five wasps in a row (in one day) without getting stung",
      "Number": 60,
      "Internal Category": "Insect",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 1000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Pit-y Party!",
      "Award Criteria": "Awarded the first time you bury a pitfall seed",
      "Number": 61,
      "Internal Category": "HHA",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Taking the Sting Out",
      "Award Criteria": "Awarded the first time you get knocked out from being stung by wasps (2 stings to a knockout)",
      "Number": 62,
      "Internal Category": "Negative",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Faint of Heart",
      "Award Criteria":
        "Awarded the first time you get knocked out by a Scorpion or Tarantula",
      "Number": 63,
      "Internal Category": "Negative",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Overcoming Pitfalls",
      "Award Criteria": "Awarded the first time you fall into a pitfall hole",
      "Number": 64,
      "Internal Category": "Negative",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Faked Out!",
      "Award Criteria": "Donated a fake piece of art",
      "Number": 65,
      "Internal Category": "Negative",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Lost Treasure",
      "Award Criteria":
        "Awarded the first time a balloon present you shot down lands in a body of water",
      "Number": 66,
      "Internal Category": "Negative",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "It's Raining Treasure!",
      "Award Criteria": "Number of balloons you've shot down with a slingshot",
      "Number": 67,
      "Internal Category": "LandMaking",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 300,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Fun with Fences",
      "Award Criteria": "Awarded when you place 20 fences",
      "Number": 68,
      "Internal Category": "LandMaking",
      "Num of Tiers": 1,
      "Tier 1": 20,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Snowmaestro",
      "Award Criteria": "Number of perfect snow-people you've built",
      "Number": 69,
      "Internal Category": "LandMaking",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Wishes Come True",
      "Award Criteria": "Number of shooting stars you've wished on",
      "Number": 70,
      "Internal Category": "LandMaking",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 30,
      "Tier 3": 200,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Exterior Decorator",
      "Award Criteria": "Awarded the first time you place some furniture outside (10 pieces - placing fish and bugs counts)",
      "Number": 71,
      "Internal Category": "LandMaking",
      "Num of Tiers": 1,
      "Tier 1": 10,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "(island name) Icons",
      "Award Criteria":
        "Awarded for changing your town tune and island flag for the first time",
      "Number": 72,
      "Internal Category": "LandMaking",
      "Num of Tiers": 2,
      "Tier 1": 1,
      "Tier 2": 1,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 500,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": false,
      "Track": "./img/track-straight-2-connected.svg",
      "TrackSolo": "./img/track-straight-2-connected.svg",
    },
    {
      "Name": "Island Designer",
      "Award Criteria":
        "Awarded the first time you use the Island Designer app to place a path, add/remove water, and build/destroy a cliff",
      "Number": 73,
      "Internal Category": "LandMaking",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 1,
      "Tier 3": 1,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": false,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Wispy Island Secrets",
      "Award Criteria":
        "Number of times you've helped Wisp find the pieces of his spirit",
      "Number": 74,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Gulliver's Travails",
      "Award Criteria":
        "Number of times you've helped Gulliver fix his communicator (OR help Gullivarrr locate his communicator)",
      "Number": 75,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "K.K. Mania",
      "Award Criteria": "Number of K.K. shows you've attended",
      "Number": 76,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 30,
      "Tier 4": 60,
      "Tier 5": 100,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "True Patron of the Arts",
      "Award Criteria":
        "Number of times you've purchased art that turned out to be real",
      "Number": 77,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "You Otter Know",
      "Award Criteria":
        "Number of times you've given scallops to Pascal",
      "Number": 78,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Set Sail for Adventure",
      "Award Criteria":
        "Number of times you've gone on a Kapp'n tour",
      "Number": 79,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 3,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 30,
      "Tier 5": 50,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Come Home to the Roost",
      "Award Criteria":
        "Number of days you've gotten coffee from Brewster (take-out coffee does not count)",
      "Number": 80,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 5,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 30,
      "Tier 5": 50,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Stretch to Refresh",
      "Award Criteria":
        "Number of days you've participated in group stretching",
      "Number": 81,
      "Internal Category": "Communication",
      "Num of Tiers": 5,
      "Tier 1": 3,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 30,
      "Tier 5": 50,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "True Friends",
      "Award Criteria": "Number of villagers you've become good friends with",
      "Number": 82,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 2,
      "Tier 3": 3,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Birthday Celebration",
      "Award Criteria": "Number of villager birthdays you've attended",
      "Number": 83,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Happy Birthday!",
      "Award Criteria":
        "Awarded the first time you play on your character's birthday",
      "Number": 84,
      "Internal Category": "Event",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 2000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Fishing Tourney!",
      "Award Criteria":
        "Awarded the first time you attend a fishing tourney in each season",
      "Number": 85,
      "Internal Category": "Fish",
      "Num of Tiers": 4,
      "Tier 1": 1,
      "Tier 2": 1,
      "Tier 3": 1,
      "Tier 4": 1,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": false,
      "Track": "./img/awards-4-blank-connected.svg",
      "TrackSolo": "./img/track-straight-4-connected.svg",
    },
    {
      "Name": "Bug-Off!",
      "Award Criteria":
        "Awarded the first time you attend a bug-off tourney in each month it is offered",
      "Number": 86,
      "Internal Category": "Insect",
      "Num of Tiers": 4,
      "Tier 1": 1,
      "Tier 2": 1,
      "Tier 3": 1,
      "Tier 4": 1,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": false,
      "Track": "./img/awards-4-blank-connected.svg",
      "TrackSolo": "./img/track-straight-4-connected.svg",
    },
    {
      "Name": "Countdown Celebration",
      "Award Criteria": "Awarded for attending the new year holiday event",
      "Number": 87,
      "Internal Category": "Event",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 1000,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Making a Change",
      "Award Criteria":
        "Awarded the first time you use a wardrobe to change your character's outfit",
      "Number": 88,
      "Internal Category": "MyDesign",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "First Custom Design!",
      "Award Criteria":
        "Awarded the first time you use the Custom Design app to edit or create a design",
      "Number": 89,
      "Internal Category": "MyDesign",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 500,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Custom Design Pro!",
      "Award Criteria":
        "Awarded the first time you use the Custom Design pro app to edit or create a design",
      "Number": 90,
      "Internal Category": "MyDesign",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Paydirt!",
      "Award Criteria":
        "Awarded the first time you dig up bells from a shining spot",
      "Number": 91,
      "Internal Category": "Money",
      "Num of Tiers": 1,
      "Tier 1": 1,
      "Tier 2": 0,
      "Tier 3": 0,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 0,
      "Reward Tier 3": 0,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-1.svg",
      "TrackSolo": "./img/track-straight-1.svg",
    },
    {
      "Name": "Shady Shakedown",
      "Award Criteria":
        "Number of furniture pieces you've found from shaking trees",
      "Number": 92,
      "Internal Category": "Plant",
      "Num of Tiers": 5,
      "Tier 1": 1,
      "Tier 2": 10,
      "Tier 3": 20,
      "Tier 4": 50,
      "Tier 5": 100,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 1000,
      "Reward Tier 3": 2000,
      "Reward Tier 4": 3000,
      "Reward Tier 5": 5000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
    {
      "Name": "Golden Milestone",
      "Award Criteria":
        "Awarded for each unique golden tool you've touched (shovel, net, fishing rod, watering can, axe, and slingshot)",
      "Number": 93,
      "Internal Category": "HHA",
      "Num of Tiers": 6,
      "Tier 1": 1,
      "Tier 2": 1,
      "Tier 3": 1,
      "Tier 4": 1,
      "Tier 5": 1,
      "Tier 6": 1,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 5000,
      "Sequential": false,
      "Track": "./img/awards-6-blank-connected.svg",
      "TrackSolo": "./img/track-straight-6-connected.svg",
    },
    {
      "Name": "Island and Yourland",
      "Award Criteria":
        "Number of times you've visited another player's island (does not count mystery islands using Nook Miles Tickets)",
      "Number": 94,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 5,
      "Tier 3": 10,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Host the Most",
      "Award Criteria": "Number of other players that have visited your island",
      "Number": 95,
      "Internal Category": "Communication",
      "Num of Tiers": 3,
      "Tier 1": 1,
      "Tier 2": 5,
      "Tier 3": 10,
      "Tier 4": 0,
      "Tier 5": 0,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 0,
      "Reward Tier 5": 0,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/track-straight-3-connected.svg",
      "TrackSolo": "./img/track-straight-3-connected.svg",
    },
    {
      "Name": "Active Island Resident",
      "Award Criteria": "Number of total unique days you've played the game",
      "Number": 96,
      "Internal Category": "Event",
      "Num of Tiers": 5,
      "Tier 1": 3,
      "Tier 2": 20,
      "Tier 3": 50,
      "Tier 4": 100,
      "Tier 5": 300,
      "Tier 6": 0,
      "Reward Tier 1": 300,
      "Reward Tier 2": 500,
      "Reward Tier 3": 1000,
      "Reward Tier 4": 2000,
      "Reward Tier 5": 3000,
      "Reward Tier 6": 0,
      "Sequential": true,
      "Track": "./img/awards-5-blank-connected.svg",
      "TrackSolo": "./img/track-straight-5-connected.svg",
    },
  ];
  
const jsonString = JSON.stringify(achData);
const achievements = JSON.parse(jsonString);
const saveAchievement = async () => {
  for (var i = 0; i < achievements.length; i++) {
    const id = achievements[i].Number;
    const name = achievements[i].Name;
    const awardCriteria = achievements[i]["Award Criteria"];
    const category = achievements[i]["Internal Category"].toLowerCase();
    const numTiers = achievements[i]["Num of Tiers"];
    const sequential = achievements[i].Sequential;
    const track = achievements[i].Track;
    const trackSolo = achievements[i].TrackSolo;
    const tiers = [0, achievements[i]["Tier 1"], achievements[i]["Tier 2"], achievements[i]["Tier 3"], achievements[i]["Tier 4"], achievements[i]["Tier 5"], achievements[i]["Tier 6"]];
    const rewards = [0, achievements[i]["Reward Tier 1"], achievements[i]["Reward Tier 2"], achievements[i]["Reward Tier 3"], achievements[i]["Reward Tier 4"], achievements[i]["Reward Tier 5"], achievements[i]["Reward Tier 6"] ];
    fetch("/api/achievement", {
      method: "POST",
      body: JSON.stringify({
        id,
        name,
        awardCriteria,
        category,
        numTiers,
        sequential, 
        track,
        trackSolo,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        saveStamp(id, numTiers, category, tiers, rewards);
      })
      .catch((error) => console.error("Error:", error));
  }
};

const saveStamp = async (id, numTiers, category, tiers, rewards) => {
  for (var j = 1; j <= numTiers; j++){
    const tierAmt = tiers[j];
    const reward = rewards[j];
    let stamp = `./img/stamp-${category}.png`;

    if (id === 27){
      if (j === 1) stamp = "./img/stamp-fruit-roots-cherry.png";
      if (j === 2) stamp = "./img/stamp-fruit-roots-orange.png";
      if (j === 3) stamp = "./img/stamp-fruit-roots-pear.png";
      if (j === 4) stamp = "./img/stamp-fruit-roots-peach.png";
      if (j === 5) stamp = "./img/stamp-plant.png";
      if (j === 6) stamp = "./img/stamp-fruit-roots-coconut.png";
    } 
    if (id === 28){
      stamp = "./img/stamp-shrubbery-hubbery.png";
    } 
    if (id === 72){
      if (j === 1) stamp = "./img/stamp-island-name-icons-flag.png";
      if (j === 2) stamp = "./img/stamp-island-name-icons-melody.png";
    } 
    if (id === 73){
      if (j === 1) stamp = "./img/stamp-island-designer-green.png";
      if (j === 2) stamp = "./img/stamp-island-designer-blue.png";
      if (j === 3) stamp = "./img/stamp-island-designer-brown.png";
    }
    if (id === 93){
      if (j === 1) stamp = "./img/stamp-golden-milestone-net.png";
      if (j === 2) stamp = "./img/stamp-golden-milestone-fishing.png";
      if (j === 3) stamp = "./img/stamp-golden-milestone-can.png";
      if (j === 4) stamp = "./img/stamp-golden-milestone-shot.png";
      if (j === 5) stamp = "./img/stamp-golden-milestone-axe.png";
      if (j === 6) stamp = "./img/stamp-golden-milestone-shovel.png";
    } 
    
    const achievement_id = id;
    fetch("/api/stamp", {
      method: "POST",
      body: JSON.stringify({
        category,
        tierAmt,
        reward,
        stamp,
        achievement_id,
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
};

let id=0;
const saveFurniture = async () => {
  var requestUrl = baseURL + "/nh/furniture?category=Housewares";
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
      for (let i = 0; i < data.length; i++) {
        id++;
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        let buyPriceNum = 0;
        let buyPriceString = "";
        if (data[i].buy.length > 0) {
          buyPriceNum = data[i].buy[0].price;
          buyPriceString = numberWithCommas(buyPriceNum);
        }
        let pokiBuyPriceNum = 0;
        let pokiBuyPriceString = "";
        if (data[i].buy.length === 2) {
          pokiBuyPriceNum = data[i].buy[1].price;
          pokiBuyPriceString = numberWithCommas(pokiBuyPriceNum);
        }
        const sellPriceNum = data[i].sell;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const category = data[i].category;
        const customizable = data[i].customizable;
        const custom_kits = data[i].custom_kits;
        let functionString = "";
        if (data[i].functions.length > 0){
          functionString = data[i].functions[0];
        }
        let variations = false;
        if (data[i].variation_total > 0 && customizable === false){
          variations = true;
        }
        let variationIcon1, variationIcon2, variationIcon3, variationIcon4, variationIcon5, variationIcon6, variationIcon7, variationIcon8;
        if (variations) {
          switch (data[i].variation_total) {
            case 0:
              variationIcon1 = data[i].variations[0].image_url;
              break;
            case 1:
              variationIcon1 = data[i].variations[0].image_url;
              break;
            case 2:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              break;
            case 3:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              break;
            case 4:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              break;
            case 5:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              break;
            case 6:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              break;
            case 7:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              variationIcon7 = data[i].variations[6].image_url;
              break;
            case 8:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              variationIcon7 = data[i].variations[6].image_url;
              variationIcon8 = data[i].variations[7].image_url;
          }
        }
          
        let availabilityString = '';
        for (let j = 0; j<data[i].availability.length; j++){
          availabilityString += `from: ${data[i].availability[j].from}, note: ${data[i].availability[j].note}; `
        }

        fetch("/api/furniture", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            buyPriceNum,
            buyPriceString,
            pokiBuyPriceNum,
            pokiBuyPriceString,
            sellPriceNum,
            sellPriceString,
            category,
            availabilityString,
            customizable,
            custom_kits,
            functionString,
            variations,
            variationIcon1,
            variationIcon2,
            variationIcon3,
            variationIcon4,
            variationIcon5,
            variationIcon6,
            variationIcon7,
            variationIcon8,
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

const saveWallMounted = async () => {
  var requestUrl = baseURL + "/nh/furniture?category=Wall-mounted";
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
      for (let i = 0; i < data.length; i++) {
        id++;
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        let buyPriceNum = 0;
        let buyPriceString = "";
        if (data[i].buy.length > 0) {
          buyPriceNum = data[i].buy[0].price;
          buyPriceString = numberWithCommas(buyPriceNum);
        }
        let pokiBuyPriceNum = 0;
        let pokiBuyPriceString = "";
        if (data[i].buy.length === 2) {
          pokiBuyPriceNum = data[i].buy[1].price;
          pokiBuyPriceString = numberWithCommas(pokiBuyPriceNum);
        }
        const sellPriceNum = data[i].sell;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const category = data[i].category;
        const customizable = data[i].customizable;
        const custom_kits = data[i].custom_kits;
        let functionString = "";
        if (data[i].functions.length > 0){
          functionString = data[i].functions[0];
        }
        let variations = false;
        if (data[i].variation_total > 0 && customizable === false){
          variations = true;
        }
        let variationIcon1, variationIcon2, variationIcon3, variationIcon4, variationIcon5, variationIcon6, variationIcon7, variationIcon8;
        if (variations) {
          switch (data[i].variation_total) {
            case 0:
              variationIcon1 = data[i].variations[0].image_url;
              break;
            case 1:
              variationIcon1 = data[i].variations[0].image_url;
              break;
            case 2:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              break;
            case 3:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              break;
            case 4:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              break;
            case 5:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              break;
            case 6:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              break;
            case 7:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              variationIcon7 = data[i].variations[6].image_url;
              break;
            case 8:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              variationIcon7 = data[i].variations[6].image_url;
              variationIcon8 = data[i].variations[7].image_url;
          }
        }
          
        let availabilityString = '';
        for (let j = 0; j<data[i].availability.length; j++){
          availabilityString += `from: ${data[i].availability[j].from}, note: ${data[i].availability[j].note}; `
        }

        fetch("/api/furniture", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            buyPriceNum,
            buyPriceString,
            pokiBuyPriceNum,
            pokiBuyPriceString,
            sellPriceNum,
            sellPriceString,
            category,
            availabilityString,
            customizable,
            custom_kits,
            functionString,
            variations,
            variationIcon1,
            variationIcon2,
            variationIcon3,
            variationIcon4,
            variationIcon5,
            variationIcon6,
            variationIcon7,
            variationIcon8,
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

const saveMiscFurn = async () => {
  var requestUrl = baseURL + "/nh/furniture?category=Miscellaneous";
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
      for (let i = 0; i < data.length; i++) {
        id++;
        const name = data[i].name;
        const words = name.split(" ");
        const capitalName = words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        let buyPriceNum = 0;
        let buyPriceString = "";
        if (data[i].buy.length > 0) {
          buyPriceNum = data[i].buy[0].price;
          buyPriceString = numberWithCommas(buyPriceNum);
        }
        let pokiBuyPriceNum = 0;
        let pokiBuyPriceString = "";
        if (data[i].buy.length === 2) {
          pokiBuyPriceNum = data[i].buy[1].price;
          pokiBuyPriceString = numberWithCommas(pokiBuyPriceNum);
        }
        const sellPriceNum = data[i].sell;
        const sellPriceString = numberWithCommas(sellPriceNum);
        const category = data[i].category;
        const customizable = data[i].customizable;
        const custom_kits = data[i].custom_kits;
        let functionString = "";
        if (data[i].functions.length > 0){
          functionString = data[i].functions[0];
        }
        let variations = false;
        if (data[i].variation_total > 0 && customizable === false){
          variations = true;
        }
        let variationIcon1, variationIcon2, variationIcon3, variationIcon4, variationIcon5, variationIcon6, variationIcon7, variationIcon8;
        if (variations) {
          switch (data[i].variation_total) {
            case 0:
              variationIcon1 = data[i].variations[0].image_url;
              break;
            case 1:
              variationIcon1 = data[i].variations[0].image_url;
              break;
            case 2:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              break;
            case 3:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              break;
            case 4:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              break;
            case 5:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              break;
            case 6:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              break;
            case 7:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              variationIcon7 = data[i].variations[6].image_url;
              break;
            case 8:
              variationIcon1 = data[i].variations[0].image_url;
              variationIcon2 = data[i].variations[1].image_url;
              variationIcon3 = data[i].variations[2].image_url;
              variationIcon4 = data[i].variations[3].image_url;
              variationIcon5 = data[i].variations[4].image_url;
              variationIcon6 = data[i].variations[5].image_url;
              variationIcon7 = data[i].variations[6].image_url;
              variationIcon8 = data[i].variations[7].image_url;
          }
        }
          
        let availabilityString = '';
        for (let j = 0; j<data[i].availability.length; j++){
          availabilityString += `from: ${data[i].availability[j].from}, note: ${data[i].availability[j].note}; `
        }

        fetch("/api/furniture", {
          method: "POST",
          body: JSON.stringify({
            id,
            capitalName,
            buyPriceNum,
            buyPriceString,
            pokiBuyPriceNum,
            pokiBuyPriceString,
            sellPriceNum,
            sellPriceString,
            category,
            availabilityString,
            customizable,
            custom_kits,
            functionString,
            variations,
            variationIcon1,
            variationIcon2,
            variationIcon3,
            variationIcon4,
            variationIcon5,
            variationIcon6,
            variationIcon7,
            variationIcon8,
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

document.querySelector("#seedBtnAchievement").addEventListener("click", saveAchievement);

document.querySelector("#seedBtnHousewares").addEventListener("click", saveFurniture);
document.querySelector("#seedBtnWallMounted").addEventListener("click", saveWallMounted);
document.querySelector("#seedBtnFurnMisc").addEventListener("click", saveMiscFurn);


document.querySelector("#homeBtn").addEventListener("click", function () {
  document.location.replace("/home");
});
