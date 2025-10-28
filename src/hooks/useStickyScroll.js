import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const useStickyScroll = ({ container, stickySectionRef, scrollElementsRef, stickyElementsRef, blogData }) => {
    const { blogId } = useParams();


    useGSAP(() => {
        const stickySection = stickySectionRef.current;
        const scrollElements = scrollElementsRef.current;
        const stickyElements = stickyElementsRef.current;
        gsap.matchMedia().add("(min-width: 1199px)", () => {
            if (stickySection && scrollElements && stickyElements) {
                const sectionHeight = stickySection.clientHeight;
                const stickyHeight = stickyElements.clientHeight;
                const endPoint = sectionHeight - stickyHeight;

                ScrollTrigger.create({
                    trigger: stickySection,
                    pin: stickyElements,
                    start: "top top+=10",
                    end: `top+=${endPoint} top`,
                    endTrigger: scrollElements,
                });
            }
        })
    }, { scope: container, dependencies: [blogData, blogId], revertOnUpdate: true, });
};

export default useStickyScroll;
