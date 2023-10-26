import { useRouter } from 'next/router'; // Import the useRouter hook
import styles from '../styles/loginPage.module.css';

export default function Home() {
  const router = useRouter(); // Initialize the router

  // Function to handle login
  const handleLogin = () => {
    const username = document.getElementById('loginName').value;
    const password = document.getElementById('loginMail').value;

    // Check the username and password
    if (username === 'admin' && password === 'admin') {
      router.push('/AdminDashboard'); // Redirect to AdminDashboard
    } else if (username === 'doctor' && password === 'doctor') {
      router.push('/DoctorDashboard'); // Redirect to DoctorDashboard
    } else if (username === 'nurse' && password === 'nurse') {
      router.push('/NurseDashboard'); // Redirect to NurseDashboard
    } else if (username === 'accountant' && password === 'accountant') {
      router.push('/AccountantDashboard'); // Redirect to AccountantDashboard
    } else if (username === 'pharmacist' && password === 'pharmacist') {
      router.push('/PharmacistDashboard'); // Redirect to PharmacistDashboard
    } else if (username === 'lab' && password === 'lab') {
      router.push('/LaboratoristDashboard'); // Redirect to LaboratoristDashboard
    } else if (username === 'reception' && password === 'reception') {
      router.push('/ReceptionistDashboard'); // Redirect to ReceptionistDashboard
    } else {
      alert('Invalid username or password. Enter correct credentials');
    }
  };

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
            <button className="btn btn-primary" type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
