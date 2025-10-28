import { useState, useRef, useEffect } from "react";


const useSidebar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const sidebarBtnRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (
                isSideBarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setIsSideBarOpen(false);
            }
        };

        if (sidebarBtnRef.current) {
            sidebarBtnRef.current.addEventListener("click", handleClick);
        }

        return () => {
            if (sidebarBtnRef.current) {
                sidebarBtnRef.current.removeEventListener("click", handleClick);
            }
        };
    }, [isSideBarOpen]);


    return { isSideBarOpen, setIsSideBarOpen, sidebarRef, sidebarBtnRef };
};

export default useSidebar;
