import styles from '../styles/loginPage.module.css'; // Import the CSS file

export default function Home() {
  return (
    <>
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
