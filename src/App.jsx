import { useEffect, useState } from 'react'
import './App.css'
import { SiFarcaster } from "react-icons/si";
import ShareToFarcaster from "./shareToFarcaster.jsx";
import "tailwindcss/tailwind.css"
import ShopCard from "./shopCard.jsx";

function App() {
    const [shop, setShop] = useState({ products: [] });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://coinswag.adaptable.app/api/v1/store/find?name=sebastoree`);
                const data = await response.json();
                setShop(data.data);
            } catch (e) {
                console.error(e.message);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="header">
                <h1 className={"m-2"}>{shop.name}'s Shop</h1>
                <h4 className={"py-4"}> <a href={`https://www.{shop.url}`}>Go To Store</a></h4>
            </div>

            <div className="flex items-center gap-4 pb-4">
                {shop.products.length > 0 && shop.products.map((product, index) => (
                    <ShopCard
                        key={index}
                        images={product.images}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
}

export default App;