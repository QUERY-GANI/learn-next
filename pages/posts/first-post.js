import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
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
