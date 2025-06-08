import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to ALX Project 2 - Next.js Setup
        </h1>
      </main>
    </>
  )
}
