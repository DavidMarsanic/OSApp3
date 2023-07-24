import { useState } from 'react';
import { useSignInEmailPassword, useAuthenticationStatus } from '@nhost/react';
import UnauthenticatedLayout from '@/layouts/UnauthenticatedLayout';
import { useRouter } from 'next/router';

export function SignInPage() {
  const { signInEmailPassword, isLoading, isError, error } = useSignInEmailPassword();
  const { isAuthenticated } = useAuthenticationStatus();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await signInEmailPassword(email, password);
      if (isAuthenticated) {
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <UnauthenticatedLayout
      mainContainerProps={{ className: 'py-20' }}
      title="Sign In"
    >
      <div>
        <form
          onSubmit={onSubmit}
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
              className="bg-input text-list w-full px-2 py-3 text-sm rounded-md"
              id="email"
              placeholder="Email"
              required
              minLength={2}
              maxLength={128}
              spellCheck="false"
              autoCapitalize="none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {isError && (
          <div className="w-full max-w-xs mx-auto">
            <p className="text-red font-medium text-red-500">
              Error: {error.message}
            </p>
          </div>
        )}
      </div>
    </UnauthenticatedLayout>
  );
}

export default SignInPage;
