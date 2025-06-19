import { Suspense, useEffect, useState } from "react"


export default function ImageSlider() {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(async () => {
        const res = await fetch(`https://picsum.photos/v2/list/seed/picsum/200&limit=10`);
        const data = await res.json();

        if (data) {
            setImages(data);
            console.log(data);
            
        } else {
            console.log("Error loading images");
        }
    }, [])

    return (
        <main className="main-wrapper">
            <Suspense fallback={<Loading/>}>
                <ul>
                    {
                        images.map((img, index)=>{
                            return <li><img src={""}></img></li>
                        })
                    }
                </ul>
            </Suspense>
        </main>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
