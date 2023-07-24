import BaseLayout from '@/layouts/BaseLayout';
import { ReactElement } from 'react';
import Link from 'next/link';
import Footer from '@/components/common/Footer';
import AnimatedHeading from '../components/common/AnimatedHeading';
import Image from 'next/image';

function JoinPage() {
    return (
        <div className="space-y-8 text-white">

            <div className="flex flex-col items-center justify-center space-y-4">

                <div className="mb-20 text-center">
                    <Image src="/logo.svg" alt="Logo" width="400" height="200" />

                    <div className="mt-4">
                        <AnimatedHeading />
                    </div>
                </div>

                <h2 className="text-2xl">
                    Become a part of the future
                </h2>
                <Link href="/sign-up">
                    <a className="inline-block px-6 py-3 text-base font-medium text-center text-white transition-colors duration-200 bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 mt-4">
                        Sign Up
                    </a>
                </Link>


            </div>

            <div className="bg-hero bg-cover h-64 rounded-md shadow-sm"></div>


            <div className="my-20">
                <h2 className="text-xl mb-4">Explore the Most Popular Apps</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className=" p-4 rounded-md shadow-sm">
                        <p>Discover a wide range of popular apps, from productivity tools to fitness trackers, all in one place. With Open Source Platform, you have access to all the apps you need, without the hassle of navigating through multiple platforms.</p>
                    </div>
                    <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-xl mb-4">No Ads - Unparalleled Privacy</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                    <div className=" p-4 rounded-md shadow-sm">
                        <p>Our platform prioritizes your privacy. All apps are open source, which means you know exactly what you&apos;re running. There are no intrusive ads or trackers, and we don&apos;t sell your data. It&apos;s a level of privacy that&apos;s unparalleled elsewhere.</p>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-xl">Amazing Ease of Use</h2>
                <div className="grid grid-cols-2 gap-4">
                    <p>Unlike other open source platforms, our apps are incredibly user-friendly. Running an app is as easy as clicking a button. No need for complex setup processes or technical know-how. It&apos;s open source made easy.</p>
                    <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                </div>
            </div>

            <h2 className="text-xl">Your Apps, Your Rules</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                <p>With Open Source Platform, you have the ultimate freedom. Want to modify an app to better suit your needs? Go ahead. With our in-browser code editor, you can customize your experience to your heart&apos;s content.</p>
            </div>

            <h2 className="text-xl">Community Like Nowhere Else</h2>
            <div className="grid grid-cols-2 gap-4">
                <p>Join a community of developers and users who are passionate about open source. Get support, request tailor-made features, help others, and earn rewards. It&apos;s a collaborative environment like nowhere else.</p>
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
            </div>

            <h2 className="text-xl">Get Started as a Developer or Designer</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500 h-64 rounded-md shadow-sm"></div>
                <p>Whether you&apos;re a seasoned developer or just starting out, Open Source Platform provides unrivaled tools to help you create and share your work. Start your journey today.</p>
            </div>

            <div className="flex justify-center">
                <Link href="/sign-up">
                    <a className="inline-block px-4 py-2 mt-4 text-xs font-medium text-center text-white transition-colors duration-200 bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700">
                        Sign Up
                    </a>
                </Link>
            </div>

            <div className="mt-20">
                <Footer />

            </div>

        </div>

    );
}

JoinPage.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout title="Join">{page}</BaseLayout>;
};

export default JoinPage;
