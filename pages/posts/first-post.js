import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../../styles/FirstPost.module.css'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <div className={styles.center}>
        <h1 className="test">First Post</h1>
        <Image src="/profile.jpg" alt="profile" width={200} height={200} layout="responsive"/>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
            <br/>
            <a href="https://github.com/query-gani">Visit my profile</a>
        </h2>
      </div>
    </>
  )
}
