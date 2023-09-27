import React from "react";

interface GlitchTextProps {
    text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({text}) => {

    const glitchTextRef = React.useRef<HTMLHeadingElement>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (glitchTextRef.current) {
                glitchTextRef.current.classList.toggle("is-glitching");
            }
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="center">
            <h2 className="center-text glitch" ref={glitchTextRef} data-text={text}>
                {text}
            </h2>
        </div>
    );
};

export default GlitchText;
