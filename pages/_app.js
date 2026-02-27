import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { siteTitle } from '../components/layout'

const H1 = ({ children }) => (
  <>
    <Head><title>{`${children} | ${siteTitle}`}</title></Head>
    <h1>{children}</h1>
  </>
)

const components = {
  h1: H1,
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
}

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}
