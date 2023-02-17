const achievementCards = document.querySelectorAll(".transform");
for (const achievement of achievementCards) {
  achievement.addEventListener("click", function(e){
    const currentTarget = e.currentTarget;
    //remove all achievements, and set back button where home button used to be
    document.querySelector("#homeAchievement").removeAttribute("name");
    document.querySelector("#homeAchievement").setAttribute("name", "arrow-undo");
    document.querySelector("#allAchievements").style.display = "none";
    document.querySelector("#logoHref").setAttribute("href", "/achievement");
   
    //pull in data for current achievement
    document.querySelector("#noDisplaySolo").style.display = "initial";
    document.querySelector(`#solo${currentTarget.id}`).classList.remove("display-none");

    //arrows
    const leftArrow = document.querySelector("#prevCard");
    const rightArrow = document.querySelector("#nextCard");
    //make sure id is being pulled in as a number since we decrement and increment below
    let currentTargetId = parseInt(currentTarget.id);
    //moving left with solo achievements
    const moveLeft = () => {
      if (currentTargetId === 1){
        document.querySelector(`#solo${currentTargetId}`).classList.add("display-none");
        currentTargetId = 96;
        document.querySelector(`#solo${currentTargetId}`).classList.remove("display-none");
      } else {
        //remove old achievement, decrement to target correct card, add achievement back to page
        document.querySelector(`#solo${currentTargetId}`).classList.add("display-none");
        currentTargetId -= 1;
        document.querySelector(`#solo${currentTargetId}`).classList.remove("display-none");
      }
    };
    leftArrow.addEventListener("click", moveLeft);

    //moving right with solo achievements
    const moveRight = () => {
      if (currentTargetId === 96){
        document.querySelector(`#solo${currentTargetId}`).classList.add("display-none");
        currentTargetId = 1;
        document.querySelector(`#solo${currentTargetId}`).classList.remove("display-none");
      } else {
        document.querySelector(`#solo${currentTargetId}`).classList.add("display-none");
        currentTargetId += 1;
        document.querySelector(`#solo${currentTargetId}`).classList.remove("display-none");
      }
    };
    rightArrow.addEventListener("click", moveRight);

    //using swipe to move left and right
    document
    .querySelector("body")
    .addEventListener("touchstart", startTouch, { passive: true });
    document
    .querySelector("body")
    .addEventListener("touchmove", moveTouch, { passive: true });

    var initialX = null;
    function startTouch(e) {
      initialX = e.touches[0].clientX;
    }

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }
      var currentX = e.touches[0].clientX;
      var diffX = initialX - currentX;

      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        moveRight();
      } else {
        // swiped right
        moveLeft();
      }
      initialX = null;
      e.preventDefault();
    }


    //create stamp buttons dynamically
    // const tiers = currentTarget.dataset.tiers;
    // for (let i=1; i<=tiers; i++){
    //   const btn = document.createElement("button");
    //   btn.innerHTML = "Achieve";
    //   btn.setAttribute("id", i);
    //   btn.classList.add("stampBtn");
    //   btn.setAttribute("name", `${currentTarget.dataset.category}`);
    //   document.querySelector(".stamps").appendChild(btn);
    // }

    let stampButtons = document.querySelectorAll(".stampBtn");
    stampButtons.forEach((btn) =>
      btn.addEventListener("click", achieveStamp)
    );
  
    //media query for matching background to the current category on phone
    var x = window.matchMedia("(max-width: 575px)");
    if (x.matches) {
      // If media query matches
      document.body.classList.add(`achievement--${currentTarget.dataset.category}`);
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



