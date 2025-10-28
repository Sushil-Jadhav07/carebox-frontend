import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitType);

export { gsap, useGSAP, SplitType, ScrollTrigger };
