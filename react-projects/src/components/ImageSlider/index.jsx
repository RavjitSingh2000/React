import { useEffect, useState } from "react"
import "./image-slider-style.css";

export default function ImageSlider() {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(null);

    async function imageApiFetch() {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=8`);
            if (!response.ok) {
                setIsLoading(false);
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setImages(json);
            setIsLoading(true);
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    }

    function handleNextImage() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    function handlePreviousImage() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    useEffect(() => {
        imageApiFetch();
    }, [])


    return (
        <main className="main-wrapper">
            <h2>IMAGE SLIDER</h2>
            <ul>
                {isLoading ? images.map((img, index) => (
                    <li key={index}>
                        <img
                            className={currentSlide === index ? "img-dimensions" : "hide-image"}
                            key={`${img.id}`}
                            src={`${img.download_url}`}
                            alt={`${img.author}`}
                        />
                    </li>
                )) : <Loading />}
            </ul>
            <section>
                <button onClick={()=>{handlePreviousImage()}}>Previous</button>
                <span>{`${currentSlide}/${images.length}`}</span>
                <button onClick={()=>{handleNextImage()}}>Next</button>
            </section>
        </main>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
