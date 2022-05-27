import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const gsapFadeIn = (ref, delay) => {
  const el = ref.current;
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      scrollTrigger: {
        trigger: el,
        markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "3rem",
        },
      },
    }
  );
};
