import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First Post</h1>
      <Image src="/profile.jpg" alt="profile" width={200} height={200} />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
          <br/>
          <a href="https://github.com/query-gani">Visit my profile</a>
      </h2>
    </>
  )
}
