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
      start: "top 75%",
      end: "top 25%",
      // ease: "power1.inout",
      // stagger: {
      //   grid: [7, 15],
      //   from: "End",
      //   amount: 1.5,
      scrub: 2,
      // markers:true,
    },
  });
  tl2.from(".conatiner-card .card__container", {
    x: 0,
    // duration: 1,
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

tl4.to("#nav-1",{
  right: 0,
  duration: 0.1,
});
tl4.from("#nav-1 a",{
  x: 15,
  duration: 0.1,
  // stagger: 0.3,
  // opacity:0,
});
tl4.pause();
var menu = document.getElementById("hamburger-icon");
var cross = document.getElementById("hamburger-icon-1");
var nav = document.getElementById("nav-1");
menu.addEventListener("click", () => {
  tl4.play();
  menu.style.display = "none";
  cross.style.display ="block";
});

var nav = document.getElementById("nav-1");
cross.addEventListener("click", () => {
  tl4.reverse();
  menu.style.display ="block";
  cross.style.display ="none"
});
