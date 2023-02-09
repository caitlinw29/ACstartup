const achievementCards = document.querySelectorAll(".achievement");
for (const achievement of achievementCards) {
  achievement.addEventListener("click", function(e){
    //remove all achievements, and set back button where home button used to be
    document.querySelector("#homeAchievement").removeAttribute("name");
    document.querySelector("#homeAchievement").setAttribute("name", "arrow-undo");
    document.querySelector(".achievements-wrapper").style.display = "none";
    document.querySelector("#logoHref").setAttribute("href", "/achievement");
   

    document.querySelector("#noDisplaySolo").style.display = "initial";
    document.querySelector("#noDisplaySolo").classList.add(e.currentTarget.classList);
    document.querySelector("#noDisplaySolo.achievement__title").innerText = e.currentTarget.achievement__title.innerText;

  })
}

const achieveStamp = async (e) => {
  let id = e.currentTarget.id;
  let name = e.currentTarget.dataset.name;

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

let stampButtons = document.querySelectorAll(".stampBtn");
stampButtons.forEach((btn) =>
  btn.addEventListener("click", achieveStamp)
);

