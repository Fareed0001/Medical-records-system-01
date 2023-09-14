import Head from 'next/head'
import styles from '../styles/loginPage.module.css'; // Import the CSS file

export default function Home() {
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
      <main className={styles.loginPage}>
        <div className={styles.loginPageContainer}>

          <h2>Login</h2>
          <div className={styles.loginPageInputDiv}>
            <label htmlFor="loginName" className="form-label">Username</label>
            <input type="text" className="form-control" id="loginName" required />
          </div>
          <div className={styles.loginPageInputDiv}>
            <label htmlFor="loginMail" className="form-label">Password</label>
            <input type="password" className="form-control" id="loginMail" required />
          </div>
          <div className={styles.loginPageButtonDiv}>
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </div>
      </main>
    </>
  )
}
