import BaseLayout from '@/layouts/BaseLayout';
import { ReactElement } from 'react';
import Link from 'next/link';

function JoinPage() {
    return (
        <div className="p-4 space-y-4 text-white">
            <h1 className="text-2xl font-bold">Welcome to Our Open Source Platform</h1>
            <h2 className="text-xl">Redefining the Way We Interact with Technology</h2>

            <div className="bg-hero bg-cover h-64 rounded-md shadow-sm"></div>

            <h2 className="text-xl">Explore the Most Popular Apps</h2>
            <div className="grid grid-cols-2 gap-4">
                <p>Discover a wide range of popular apps, from productivity tools to fitness trackers, all in one place. With Open Source Platform, you have access to all the apps you need, without the hassle of navigating through multiple platforms.</p>
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
            </div>

            <h2 className="text-xl">No Ads - Unparalleled Privacy</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                <p>Our platform prioritizes your privacy. All apps are open source, which means you know exactly what you're running. There are no intrusive ads or trackers, and we don't sell your data. It's a level of privacy that's unparalleled elsewhere.</p>
            </div>

            <h2 className="text-xl">Amazing Ease of Use</h2>
            <div className="grid grid-cols-2 gap-4">
                <p>Unlike other open source platforms, our apps are incredibly user-friendly. Running an app is as easy as clicking a button. No need for complex setup processes or technical know-how. It's open source made easy.</p>
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
            </div>

            <h2 className="text-xl">Your Apps, Your Rules</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                <p>With Open Source Platform, you have the ultimate freedom. Want to modify an app to better suit your needs? Go ahead. With our in-browser code editor, you can customize your experience to your heart's content.</p>
            </div>

            <h2 className="text-xl">Community Like Nowhere Else</h2>
            <div className="grid grid-cols-2 gap-4">
                <p>Join a community of developers and users who are passionate about open source. Get support, request tailor-made features, help others, and earn rewards. It's a collaborative environment like nowhere else.</p>
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
            </div>

            <h2 className="text-xl">Get Started as a Developer or Designer</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                <p>Whether you're a seasoned developer or just starting out, Open Source Platform provides unrivaled tools to help you create and share your work. Start your journey today.</p>
            </div>

            <Link href="/sign-up">
                <a className="inline-block px-4 py-2 mt-4 text-xs font-medium text-center text-white transition-colors duration-200 bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700">
                    Sign Up
                </a>
            </Link>
        </div>
    );
}

JoinPage.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout title="Join">{page}</BaseLayout>;
};

export default JoinPage;
