console.log("heyheyy");

gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".pettle", {
  type: "x,y",
  inertia: true,
});

const init = () => {
  console.log("file is linked");
};

init();
