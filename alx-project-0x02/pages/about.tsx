// pages/about.tsx
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="flex items-center justify-center h-screen bg-yellow-100">
        <h1 className="text-3xl font-bold text-yellow-800">This is the About Page</h1>
      </main>
    </>
  );
}
