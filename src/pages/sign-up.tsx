import { data } from '@/data/info';
import UnauthenticatedLayout from '@/layouts/UnauthenticatedLayout';
import { useSignUpEmailPassword } from '@nhost/react';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';

type SignUpFormValues = {
    email: string;
    password: string;
    username: string;
};

export function SignUpPage() {
    const { signUpEmailPassword, isLoading, isError, error } =
        useSignUpEmailPassword();
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

    const { register, handleSubmit } = useForm<SignUpFormValues>({
        reValidateMode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
            username: '',
        },
    });

    async function onSubmit(data: SignUpFormValues) {
        const { email, password, username } = data;

        try {
            await signUpEmailPassword(email, password, { displayName: username });
            setIsSignUpSuccessful(true);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            {isSignUpSuccessful ? (
                <div>
                    <h2>Sign Up Successful</h2>
                    <p>Please check your email for a verification link.</p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid w-full max-w-xs grid-flow-row gap-6 py-8 mx-auto rounded-md"
                >
                    <div className="grid grid-flow-row gap-2">
                        <label
                            htmlFor="username"
                            className="text-list text-sm font-medium leading-none"
                        >
                            Username
                        </label>

                        <input
                            {...register('username')}
                            className="bg-input text-list w-full px-2 py-3 text-sm rounded-md"
                            id="username"
                            placeholder="Username"
                            required
                            minLength={2}
                            maxLength={128}
                            spellCheck="false"
                            autoCapitalize="none"
                        />
                    </div>

                    <div className="grid grid-flow-row gap-2">
                        <label
                            htmlFor="email"
                            className="text-list text-sm font-medium leading-none"
                        >
                            Email
                        </label>

                        <input
                            {...register('email')}
                            className="bg-input text-list w-full px-2 py-3 text-sm rounded-md"
                            id="email"
                            placeholder="Email"
                            required
                            minLength={2}
                            maxLength={128}
                            spellCheck="false"
                            autoCapitalize="none"
                            type="email"
                        />
                    </div>

                    <div className="grid grid-flow-row gap-2">
                        <label
                            htmlFor="password"
                            className="text-list text-sm font-medium leading-none"
                        >
                            Password
                        </label>

                        <input
                            {...register('password')}
                            className="bg-input text-list w-full px-2 py-3 text-sm rounded-md"
                            id="password"
                            placeholder="Password"
                            required
                            minLength={2}
                            maxLength={128}
                            spellCheck="false"
                            autoCapitalize="none"
                            autoComplete="false"
                            type="Password"
                        />
                    </div>

                    <div className="flex flex-col">
                        <button
                            className="text-list hover:border-white hover:text-white border-list flex items-center justify-center w-full py-2 mt-4 text-sm transition-colors duration-200 border rounded-md"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            )}

            {isError && (
                <div className="w-full max-w-xs mx-auto">
                    <p className="text-red font-medium text-red-500">
                        Error: {error.message}
                    </p>
                </div>
            )}
        </div>
    );
}

SignUpPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <UnauthenticatedLayout
            mainContainerProps={{ className: 'py-20' }}
            title={data.pageTitle}
        >
            {page}
        </UnauthenticatedLayout>
    );
};

export default SignUpPage;
