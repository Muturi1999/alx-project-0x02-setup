// pages/home.tsx
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="flex items-center justify-center h-screen bg-green-100">
        <h1 className="text-3xl font-bold text-green-800">This is the Home Page</h1>
      </main>
    </>
  );
}
