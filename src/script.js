// gsap.registerPlugin(Draggable, InertiaPlugin);

// Draggable.create(".pettle", {
//   type: "x,y",
//   inertia: true,
// });

console.log('linked outside of init');

const init = () => {
  console.log("linked");
};

init();
