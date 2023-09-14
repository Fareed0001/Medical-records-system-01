import Head from 'next/head';
import React from 'react';
import Sidebar from '@/components/Sidebar';


const Index = () => {
  return (
    <>
      <Head>
        <title>Moreed Health Record System</title>
        <meta name="description" content="Moreed - Your Comprehensive Medical Health Record System for Efficient Patient Management" />
        <meta name="keywords" content="medical records, health records, patient management, healthcare software, Moreed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* favicon */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Sidebar />
        <h1>This is the dashboard</h1>
      </div>
    </>
  );
}

export default Index;
