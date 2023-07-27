import { Header } from '@/components/common/Header';
import { Loader } from '@/components/common/Loader';
import Head from 'next/head';
import { DetailedHTMLProps, HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface BaseLayoutProps
  extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /**
   * The title of the page
   */
  title?: string;
  /**
   * Props passed to the main container.
   */
  mainContainerProps?: DetailedHTMLProps<
    HTMLProps<HTMLDivElement>,
    HTMLDivElement
  >;
  /**
   * Whether the page is in a loading state.
   */
  isLoading?: boolean;
}

export default function BaseLayout({
  title,
  children,
  mainContainerProps,
  isLoading = false,
}: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-grid bg-header">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="text-white bg-header bg-grid">
        <Header />

        <main
          {...mainContainerProps}
          className={twMerge(
            'max-w-5xl p-4 mx-auto',
            mainContainerProps?.className,
          )}
        >
          {isLoading ? (
            <div className="flex justify-center items-center min-h-screen">
              <Loader />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}
