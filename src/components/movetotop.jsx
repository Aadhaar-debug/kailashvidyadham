import React, { useState, useEffect } from "react";

const MoveToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / windowHeight) * 100;

        if (scrollPercentage > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        right: "20px",
                        backgroundColor: "rgb(191,0,0)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontWeight:"900",
                        fontSize: "36px",
                        cursor: "pointer",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div>^</div>
                </button>
            )}
        </div>
    );
};

export default MoveToTop;