import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Moreed Health Record System</title>
        <meta name="description" content="Moreed - Your Comprehensive Medical Health Record System for Efficient Patient Management" />
        <meta name="keywords" content="medical records, health records, patient management, healthcare software, Moreed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* bootstrap  */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
