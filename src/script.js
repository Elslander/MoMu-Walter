gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".pettle", {
  type: "x,y",
  inertia: true,
});

const init = () => {
  console.log("linked");
};

init();
