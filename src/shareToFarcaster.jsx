import React from 'react';
import { SiFarcaster } from "react-icons/si";

const ShareToFarcaster = ({ content }) => {
    const shareToFarcaster = () => {
        console.log('Sharing to Farcaster:', content);
        // Implement actual sharing logic here
        // For example, you might open a new window with a Farcaster sharing URL
        window.open(`https://warpcast.com/~/compose?text=${encodeURIComponent(content)}`, '_blank');
    }
    return (
        <div className="relative inline-block group">
            <button
                onClick={shareToFarcaster}
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-200"
            >
                <SiFarcaster className="w-5 h-5 mr-2" />
                Share to Farcaster
            </button>
            <div className="absolute z-10 w-48 p-2 mt-2 text-sm text-white bg-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                Share this Merch on Farcaster
            </div>
        </div>
    );
};

export default ShareToFarcaster;