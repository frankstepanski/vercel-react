import styles from "./Dashboard.module.css";

const Dashboard = ({username}) => {

    return (
      <div className={styles.dashboard}>
        <h2>Welcome back, {username}</h2>
        <div className={styles.reviews}>
            <h3>Your reviews</h3>
            <p>You have not written any reviews yet.</p>
        </div>
      </div>
    );
  };
  
  export default Dashboard;