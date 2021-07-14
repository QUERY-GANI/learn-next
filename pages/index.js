import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ipsum tempore, reprehenderit aliquam laudantium quibusdam! Mollitia iusto ipsa autem veritatis hic veniam deleniti. Quis nam dolor libero soluta ea odit?</p>
        <div>
          <Link href="/posts/first-post">
            <a>First post</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
