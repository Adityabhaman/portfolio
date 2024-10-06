function page1() {
  var tl = gsap.timeline();

  tl.from(".logo h1,nav", {
    y: -30,
    opacity: 0,
    delay: 1.5,
    duration: 0.7,
    stagger: 0.2,
  });
  // tl.from("nav a", {
  //   y: -30,
  //   opacity: 0,
  //   delay: 1.8,
  //   duration: 0.7,
  //   stagger: 0.2,
  // });
  tl.from(".right-panel", {
    x: 500,
    opacity: 0,
    duration: 0.2,
  });
  tl.from(".left-panel,.underline h2", {
    x: -500,
    opacity: 0,
    duration: 0.2,
    stagger: 2,
  });
  tl.from(".btn-1", {
    opacity: 0,
    duration: 1,
  });
  tl.from(".social-links a", {
    x: -500,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
  });
}
function tl2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
  tl2.from(".card__container article", {
    x: 0,
    opacity: 0,
  });
}
function tl3() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".more",
      scroller: "body",
      start: "top 120%",
      end: "top 100%",
      stagger: 2,
      scrub: 2,
    },
  });

  tl3.from(".cta-section,.text-container,.btn", {
    z: 0,
    opacity: 0,
    duration: 5,
  });
  tl3.from("footer", {
    y: 100,
    opacity: 0,
  });
  tl3.from("footer .container", {
    y: 100,
    opacity: 0,
  });
}
page1();
tl2();
tl3();

var tl4 = gsap.timeline();

tl4.to("nav ", {
  right: 0,
  duration: 0.5,
});
// tl4.from("nav a", {
//   x: 1,
//   duration: 0.1,
//   stagger: 0.28,
// });
tl4.pause();
var menu = document.getElementById("hamburger-icon");
var nav = document.getElementById("nav-1");
menu.addEventListener("click", () => {
  tl4.play();
});
var nav = document.getElementById("nav-1");
menu.addEventListener("dblclick", () => {
tl4.reverse();
});