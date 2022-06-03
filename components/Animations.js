import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const gsapFadeIn = (ref, delay) => {
  const el = ref.current;
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      ease: "power2",
      scrollTrigger: {
        trigger: el,
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "3rem",
        // },
      },
    }
  );
};

export const gsapFadeInStagger = (ref, stagger) => {
  const el = ref.current;
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: stagger,
      ease: "power2",
      scrollTrigger: {
        trigger: el,
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "3rem",
        // },
      },
    }
  );
};
