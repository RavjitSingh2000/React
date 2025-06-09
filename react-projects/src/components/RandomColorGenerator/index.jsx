import { useState } from "react";
import "./style.css";

export default function RandomColorGenerator() {

    const [colorType, setColorType] = useState('rgb');
    const [defColor, setDefColor] = useState(`#ffffff`);

    const handleRandomColor = () => {
        switch (colorType) {
            case "hex":
                setDefColor(randomHexColor());
                break;
            case "rgb":
                setDefColor(randomRGBColor());
                break;
        }
    }


    return (
        <div className="main-container">
            <nav className="main-nav">
                <button onClick={() => handleRandomColor()}>Generate Random Color</button>
                <button onClick={() => setColorType('hex')}>Genrate Hex Color</button>
                <button onClick={() => setColorType('rgb')}>Generate RGB Colors</button>
            </nav>
            <section style={{
                backgroundColor: defColor,
                transition: 'background-color 0.5s ease'
            }}>
                <header>
                    <span>Color type: {colorType}</span>
                    <span>{defColor}</span>
                </header>
            </section>
        </div>
    )
}


//util functions

const randomHexColor = () => {

    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hexArray[Math.floor(Math.random() * (hexArray.length))];
    }
    return hexColor;
}

const randomRGBColor = () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}