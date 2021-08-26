import '../styles/globals.css'
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout data={pageProps.header}> <Component {...pageProps} /> </Layout>
  )
  
}

export default MyApp
