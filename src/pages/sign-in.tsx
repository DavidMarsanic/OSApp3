import { data } from '@/data/info';
import UnauthenticatedLayout from '@/layouts/UnauthenticatedLayout';
import { useSignInEmailPassword, useAuthenticationStatus } from '@nhost/react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type SignInFormValues = {
  email: string;
  password: string;
};

export function SignInPage() {
  const { signInEmailPassword, isLoading } = useSignInEmailPassword();
  const { isAuthenticated } = useAuthenticationStatus();
  const router = useRouter();
  const [signInError, setSignInError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const { register, handleSubmit } = useForm<SignInFormValues>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SignInFormValues) {
    const { email, password } = data;

    try {
      await signInEmailPassword(email, password);
    } catch (err) {
      console.error(err);
      setSignInError(err.message);
    }
  }

  return (
    <UnauthenticatedLayout
      mainContainerProps={{ className: 'py-20' }}
      title={data.pageTitle}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-full max-w-xs grid-flow-row gap-6 py-8 mx-auto rounded-md"
      >
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
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </form>

      {signInError && (
        <div className="w-full max-w-xs mx-auto">
          <p className="text-red font-medium text-red-500">
            Error: {signInError}
          </p>
        </div>
      )}
    </UnauthenticatedLayout>
  );
};

export default SignInPage;
