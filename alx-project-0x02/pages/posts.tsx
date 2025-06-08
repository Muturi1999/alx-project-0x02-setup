import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} />
          ))}
        </div>
      </main>
    </>
  );
}
