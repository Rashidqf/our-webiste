import React, { useEffect } from "react";

const RollingText = ({ text }) => {
    useEffect(() => {
        const elements = document.querySelectorAll(".rolling-text");

        elements.forEach((element) => {
            const innerText = element.innerText;
            element.innerHTML = "";

            const textContainer = document.createElement("div");
            textContainer.classList.add("block");

            for (let letter of innerText) {
                const span = document.createElement("span");
                span.innerText = letter.trim() === "" ? "\xa0" : letter;
                span.classList.add("letter");
                textContainer.appendChild(span);
            }

            element.appendChild(textContainer);
            element.appendChild(textContainer.cloneNode(true));
        });

        elements.forEach((element) => {
            element.addEventListener("mouseover", () => {
                element.classList.remove("play");
            });
        });

     
        return () => {
            elements.forEach((element) => {
                element.removeEventListener("mouseover", () => {
                    element.classList.remove("play");
                });
            });
        };
    }, []);

    return <span className="rolling-text">{text}</span>;
};

export default RollingText;
