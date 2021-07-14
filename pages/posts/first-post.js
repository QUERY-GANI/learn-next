import Image from 'next/image'
import Layout from "../../components/layout";

export const siteTitle = 'Next.js Sample Website'

export default function FirstPost() {
  return (
    <Layout>
      <h1 className="test">First Post</h1>
      <Image src="/profile.jpg" alt="profile" width={200} height={200} layout="responsive"/>
      <h2>
        <a href="https://github.com/query-gani">Visit my profile</a>
      </h2>
    </Layout>
  )
}
