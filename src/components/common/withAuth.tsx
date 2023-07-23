import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthenticationStatus } from '@nhost/react';
import { Loader } from '@/components/common/Loader';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { isAuthenticated, isLoading } = useAuthenticationStatus();

        useEffect(() => {
            if (!isLoading && !isAuthenticated) {
                router.push('/join');
            }
        }, [isLoading, isAuthenticated, router]);

        if (isLoading) {
            return <Loader />;
        }

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };
};

export default withAuth;
