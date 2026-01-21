import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";

//! FLOWER INTERACTION
gsap.registerPlugin(Draggable, InertiaPlugin);

const $flowerPetals = document.querySelectorAll(".flowerPetal");
const $flowerCenter = document.querySelector(".center");

const petalState = new WeakMap();
const intersecting = (a, b) => {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
};

$flowerPetals.forEach((petal) => {
  petalState.set(petal, {
    overlaps: intersecting(
      petal.getBoundingClientRect(),
      $flowerCenter.getBoundingClientRect()
    ),
  });
});

Draggable.create(".flowerPetal", {
  type: "x,y",
  inertia: true,
  onDrag() {
    const petalBox = this.target.getBoundingClientRect();
    const centerBox = $flowerCenter.getBoundingClientRect();
    const overlaps = intersecting(petalBox, centerBox);
    const previous = petalState.get(this.target)?.overlaps;

    if (!overlaps && previous) {
      console.log("petal left flower");
      this.target.remove();
    }

    petalState.set(this.target, { overlaps });
  },
});

//! CARD FLIP INTERACTION
const flipDuration = 600;
const $card = document.querySelector(".protest__suit");
let switching = false;

const flip = () => {
  if (switching || !$card) return;
  switching = true;
  $card.classList.toggle("isTurned");
  window.setTimeout(() => {
    switching = false;
  }, flipDuration);
};

//! ANGER MAN INTERACTION
const $angerMan = document.querySelector(".anger__man");
const $fireHead = document.querySelector(".fireHead");
const $frustration = document.querySelector(".frustration");

$fireHead.classList.toggle("fireHead--inactive");
$frustration.classList.toggle("frustration--inactive");

const changeMood = () => {
  $fireHead.classList.toggle("fireHead--inactive");
  $frustration.classList.toggle("frustration--inactive");
};

gsap.registerPlugin(Draggable);

//! SKULL INTERACTION
const $skull = document.querySelector(".skull--hover");
$skull.classList.remove('skull--hover');

Draggable.create(".skull__illustration", {
  type: "x",
  inertia: true,
  bounds: {minX: 0, maxX: 250},
});

//! TULIP INTERACTION
// const maxDistance = 100;

// Draggable.create("#flowerTop", {
//   type: "x,y",
//   inertia: true,

//   onDrag() {
//     const distance = Math.hypot(this.x, this.y);

//     if (distance > maxDistance) {
//       const angle = Math.atan2(this.y, this.x);
//       this.x = Math.cos(angle) * maxDistance;
//       this.y = Math.sin(angle) * maxDistance;
//     }
//   },

//   onRelease() {
//     gsap.to(this.target, {
//       x: 0,
//       y: 0,
//       duration: 0.6,
//       ease: "elastic.out(1, 0.4)",
//     });
//   }
// });

const init = () => {
  console.log("file is linked");
  $card?.addEventListener("click", flip);
  $angerMan.addEventListener("click", changeMood);
};

init();
