import { useState, useRef, useEffect } from "react";

const useStickyHeader = (headerRef) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;

            const headerHeight = headerRef.current.offsetHeight + 30;
            const windowTop = window.scrollY || document.documentElement.scrollTop;

            setIsSticky(windowTop >= headerHeight);
            setIsHeaderVisible(windowTop < lastScrollTop.current);

            lastScrollTop.current = windowTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return { isSticky, isHeaderVisible };
};

export default useStickyHeader;
