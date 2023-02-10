const achievementCards = document.querySelectorAll(".transform");
for (const achievement of achievementCards) {
  achievement.addEventListener("click", function(e){
    //remove all achievements, and set back button where home button used to be
    document.querySelector("#homeAchievement").removeAttribute("name");
    document.querySelector("#homeAchievement").setAttribute("name", "arrow-undo");
    document.querySelector("#allAchievements").style.display = "none";
    document.querySelector("#logoHref").setAttribute("href", "/achievement");
   
    //pull in data for current achievement
    document.querySelector("#noDisplaySolo").style.display = "initial";
    document.querySelector("#noDisplaySolo").getElementsByClassName("achievement")[0].classList.replace('achievement--event', `achievement--${e.currentTarget.dataset.category}`);
    document.getElementById("noDisplaySolo").getElementsByClassName("achievement__title")[0].innerText = e.currentTarget.getElementsByClassName("achievement__title")[0].innerText;
    document.getElementById("noDisplaySolo").getElementsByClassName("trackImg")[0].src = e.currentTarget.getElementsByClassName("trackImg")[0].dataset.track;

    //create stamp buttons dynamically
    const tiers = e.currentTarget.dataset.tiers;
    for (let i=1; i<=tiers; i++){
      const btn = document.createElement("button");
      btn.innerHTML = "Achieve";
      btn.setAttribute("id", i);
      btn.classList.add("stampBtn");
      btn.setAttribute("name", `${e.currentTarget.dataset.category}`);
      document.querySelector(".stamps").appendChild(btn);
    }
    let stampButtons = document.querySelectorAll(".stampBtn");
    stampButtons.forEach((btn) =>
      btn.addEventListener("click", achieveStamp)
    );
  
    //media query for matching background to the current category on phone
    var x = window.matchMedia("(max-width: 500px)");
    if (x.matches) {
      // If media query matches
      document.body.classList.add(`achievement--${e.currentTarget.dataset.category}`);
    }
  })
}

const achieveStamp = async (e) => {
  let id = e.currentTarget.id;
  let name = e.currentTarget.name;

  const response = await fetch(`/api/stamp/${id}`, {
    method: "POST",
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/achievement");
  } else {
    alert("Failed to achieve stamp");
  }
};



