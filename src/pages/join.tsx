import React from 'react';
import Link from 'next/link';

function JoinPage() {
    return (
        <div>
            <h1>Welcome to Our Site!</h1>
            <p>To get full access to all our content, please sign up.</p>
            <Link href="/sign-up">
                <a>Sign Up</a>
            </Link>
        </div>
    );
}

export default JoinPage;
