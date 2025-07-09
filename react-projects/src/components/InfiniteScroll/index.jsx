import "./infinite-scroll.css";
import { useEffect, useRef, useState } from "react";

export default function InfiniteScroll() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);
    const initialLoad = useRef(true);

    async function productsApiFetch() {
        try {
            setIsLoading(true); // start loading
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count * 10}&select=title,price,description`);
            if (!response.ok) throw new Error(`Response status: ${response.status}`);

            const json = await response.json();
            setProducts((prevData) => [...prevData, ...json.products]);
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLoading(false); // stop loading
        }

    }

    useEffect(() => {
        if (initialLoad.current) {
            initialLoad.current = false;
            productsApiFetch(); //run only once on first render
        } else if (count > 0) {
            productsApiFetch(); //run on count changes only
        }
    }, [count]);

    return (
        <div>
            <h2>INFINITE SCROLL</h2>
            <div className="container">
                {
                    products.map((product) => (
                        <article key={product.id}>
                            <h4 className="text-title">{product.id}. {product.title}</h4>
                            <p className="text-body">{product.description}</p>
                        </article>
                    ))
                }
                {isLoading ? <Loading /> : null}
            </div>
            <button onClick={() => setCount(count + 1)}>Load more content</button>
        </div>
    )
}

function Loading() {
    return <span>🌀 Loading...</span>;
}