import { useState } from "react";
import ShareToFarcaster from "./shareToFarcaster.jsx";


function ShopCard(props) {
    const [currentImage, setCurrentImage] = useState(props.images[0]);
    const handleImageChange =() => {
        setCurrentImage(props.images[1])
    }
    const handleImageReset =() => {
        setCurrentImage(props.images[0])
    }
    return (
        <article className=" bg-white pb-4 shadow-md rounded-lg overflow-hidden">
            <div className="relative " onMouseOver={handleImageChange} onMouseLeave={handleImageReset}>
                <img
                    className="block mx-auto"
                    src={currentImage}
                    alt={currentImage}
                />
            </div>
            <div>
                <div>
                    <p className="font-semibold text-gray-700 px-4 py-3 text-center">
                        {props.name}
                    </p>
                    <div className="flex justify-between items-center px-3 py-2 border-t border-t-gray-200">
                        <div className="flex justify-center gap-1 items-center  top-3 right-3 px-4 py-2">
                            <img
                                className="w-5 invert-[.4]"
                                src="/icons/cloth.svg"
                                alt=""
                            />
                            <p className="font-semibold text-gray-800 ">23</p>
                        </div>
                        <div className="flex justify-center gap-1 items-center  top-3 right-3 px-4 py-2">
                            <img className="w-6" src="/icons/usdt.svg" alt="" />
                            <p className="font-semibold text-gray-800 ">{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ShareToFarcaster />

        </article>
    );
}
export default ShopCard;