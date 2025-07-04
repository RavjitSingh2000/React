import "./infinite-scroll.css";
import { useEffect, useState } from "react";

export default function InfiniteScroll() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [count, setCount] = useState(0);

    async function productsApiFetch() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}&select=title,price,description`);
            if (!response.ok) {
                setIsLoading(false);
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setProducts(json);
            setIsLoading(true);
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        productsApiFetch();
    }, [])

    return (
        <div>index</div>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}