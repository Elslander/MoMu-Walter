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

console.log("file is linked here");

const init = () => {
  console.log("file is linked");
};

init();
