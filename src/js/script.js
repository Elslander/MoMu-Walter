console.log("heyheyy");

gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".pettle", {
  type: "x,y",
  inertia: true,
});

const init = () => {
  console.log("not linked");
  console.log("lellelle");

};

init();
