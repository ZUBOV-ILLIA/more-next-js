import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react'
import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`);
        }}
      />

      <h2>First Post</h2>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <Image
       src="/images/profile.jpg" 
       height={144}
       width={144}
       alt="Profile Photo"
      />
    </Layout>
  )
}


export default FirstPost;