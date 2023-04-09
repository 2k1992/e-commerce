import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <titile>create next app</titile>
        <meta name="discription" content="ecommerce-website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl">next app</h1>
    </div>
  );
}
