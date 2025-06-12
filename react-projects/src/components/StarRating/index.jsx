import { useState } from "react";
import "./style.css";

function StarRating({ numOfStars=8 }) {

    const [rating, setRating] = useState(0);
    const [hoverState, setHoverState] = useState(0);

    const handleMouseClick = (index) => {
        setRating(index);
        
    }
    const handleMouseHover = (index) => {
        setHoverState(index);
    }
    const handleMouseLeave = () => {
        hoverState(rating);
    }



    return (
        <main className="main-wrapper">
            <header className="main-wrapper-header">
                <p className="header-text">STAR RATING</p>
            </header>
            <section className="stars-wrapper">
                {
                    [...Array(numOfStars)].map((i, index) => {
                        return <div
                            className={`star ${index <= (hoverState || rating) ? 'star-selected':''}`}
                            key={index}
                            onClick={() => handleMouseClick(index)}
                            onMouseMove={() => handleMouseHover(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                        </div>
                    })
                }
            </section>
        </main>
    )
}

export default StarRating;