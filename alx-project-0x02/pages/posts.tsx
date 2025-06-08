import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-yellow-50 p-8">
        <h1 className="text-3xl font-bold text-yellow-800 mb-6">Posts Page</h1>
        <p>This page will show a list of posts from an API.</p>
      </main>
    </>
  );
}
