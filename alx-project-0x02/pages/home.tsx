// // pages/home.tsx
// import Head from 'next/head';

// export default function HomePage() {
//   return (
//     <>
//       <Head>
//         <title>Home Page</title>
//       </Head>
//       <main className="flex items-center justify-center h-screen bg-green-100">
//         <h1 className="text-3xl font-bold text-green-800">This is the Home Page</h1>
//       </main>
//     </>
//   );
// }
import Head from 'next/head';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="min-h-screen bg-green-50 p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">This is the Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Card 1" content="This is the first card's content." />
          <Card title="Card 2" content="This card showcases reusable components in Next.js." />
          <Card title="Card 3" content="Each card is styled with Tailwind CSS." />
        </div>
      </main>
    </>
  );
}
