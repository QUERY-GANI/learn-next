import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1 className="test">First Post</h1>
      <Image src="/profile.jpg" alt="profile" width={200} height={200} layout="responsive"/>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
          <br/>
          <a href="https://github.com/query-gani">Visit my profile</a>
      </h2>
    </Layout>
  )
}
