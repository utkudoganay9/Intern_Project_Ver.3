import { FaBookOpen } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import styles from "./classes.module.css"

const Classes = () => {
  return (
    <div>
  <h1 className={styles.text}>Dersler</h1>
  <div>
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          <th className={styles.th}><FaBookOpen size={20} />Dersler</th>
          <th className={styles.th}><FaCalendarDay size={20} />Gün</th>
          <th className={styles.th}><FaClock size={20} />Saat</th>
        </tr>
      </thead>
      <tbody>
      <tr className={styles.line}>
          <td >Ders 2</td>
          <td >gün2</td>
          <td >saat2</td>
        </tr>
        <tr className={styles.line}>
          <td >Ders 2</td>
          <td >gün2</td>
          <td >saat2</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Classes