gsap.registerPlugin(Draggable, InertiaPlugin);

const $flowerPettles = document.querySelectorAll(".pettle");
const $flowerMiddle = document.querySelector(".center");

const petalState = new WeakMap();
const intersecting = (a, b) => {
  !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
};

$flowerPettles.forEach((pettle) => {
  petalState.set(pettle, {
    overlaps: intersecting(
      pettle.getBoundingClientRect(),
      $flowerMiddle.getBoundingClientRect()
    ),
  });
});

Draggable.create(".pettle", {
  type: "x,y",
  inertia: true,
  onDrag() {
    const pettleBox = this.target.getBoundingClientRect();
    const centerBox = $flowerMiddle.getBoundingClientRect();
    const overlaps = intersecting(pettleBox, centerBox);
    const previous = petalState.get(this.target)?.overlaps;

    if (!overlaps && previous) {
      console.log("pettle elft center")
      this.target.remove();
    }

    petalState.set(this.target, { overlaps });
  },
});

const init = () => {
  console.log("file is linked");
};

init();
