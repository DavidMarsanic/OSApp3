import { useState, useEffect } from 'react';

const AnimatedHeading = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(prevOpacity => prevOpacity === 0 ? 1 : 0);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
            <div className="relative">
                <h1 className="text-6xl font-bold flex absolute">
                    <span className="text-red-600">
                        Bright
                    </span>
                    <span className="text-blue-400">
                        encode
                    </span>
                </h1>
                <h1 className="text-6xl font-bold flex absolute transition-opacity duration-5000 ease-in-out" style={{ opacity }}>
                    <span className="text-red-600">
                        Brighten
                    </span>
                    <span className="text-blue-400">
                        code
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default AnimatedHeading;
