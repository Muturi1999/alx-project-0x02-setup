import Head from 'next/head';
import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';


export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Card 1', content: 'This is the first card\'s content.' },
    { title: 'Card 2', content: 'This card showcases reusable components in Next.js.' },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-green-50 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">This is the Home Page</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}
