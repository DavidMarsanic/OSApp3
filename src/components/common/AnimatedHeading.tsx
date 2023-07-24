import { useEffect } from 'react';

const AnimatedHeading = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
        @keyframes colorchange {
            0% { color: #3b82f6; } /* tailwind color blue-500 */
            20% { color: #4c6ef5; } /* tailwind color indigo-500 */
            40% { color: #6366f1; } /* tailwind color violet-500 */
            50% { color: #9333ea; } /* tailwind color purple-600 */
            60% { color: #6366f1; } /* tailwind color violet-500 */
            80% { color: #4c6ef5; } /* tailwind color indigo-500 */
            100% { color: #3b82f6; } /* tailwind color blue-500 */
        }
        `;
        document.head.append(style);
        return () => {
            document.head.removeChild(style);
        }
    }, []);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="max-w-2xl flex items-center justify-center">
                <h1 className="text-6xl font-bold flex">
                    <span className="text-purple-600">
                        Bright
                    </span>
                    <span className="text-6xl font-bold" style={{ animation: 'colorchange 10s infinite' }}>
                        en
                    </span>
                    <span className="text-blue-500">
                        code
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default AnimatedHeading;
