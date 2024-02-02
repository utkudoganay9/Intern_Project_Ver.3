import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import styles from "./dashboard.module.css"
const Dashboard = () => {
  return (
    <div><h1 className={styles.text}>Kullanıcı Bilgileri</h1>
    <div className={styles.container}>
      <span className={styles.span}><FaUser size={20}  />kullanıcıadı</span>
      <span className={styles.span} ><MdEmail size={20} />kullanıcımail</span>
      <span className={styles.span}><FaPhone size={20}/>kullanıcıtel</span>
    </div></div>
  );
};

export default Dashboard;
