// // pages/about.tsx
// import Head from 'next/head';

// export default function AboutPage() {
//   return (
//     <>
//       <Head>
//         <title>About Page</title>
//       </Head>
//       <main className="flex items-center justify-center h-screen bg-yellow-100">
//         <h1 className="text-3xl font-bold text-yellow-800">This is the About Page</h1>
//       </main>
//     </>
//   );
// }
import Head from 'next/head';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="min-h-screen bg-purple-50 p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">About This Project</h1>
        <div className="space-x-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
