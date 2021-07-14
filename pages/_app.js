// class test didapat dari sini
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // bisa juga untuk membuat navbar di file ini
  return <Component {...pageProps} />
}

export default MyApp
