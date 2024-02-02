import { FaUsers } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { PiProjectorScreenChartFill } from "react-icons/pi"
import styles from "./groups.module.css"
const Groups = () => {
    return (
      <div>
      <h1 className={styles.text}>Gruplar</h1>
      <div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>
              <th className={styles.th}><FaUserGroup size={20} />Gruplar</th>
              <th className={styles.th}><FaUsers size={20} />Gün</th>
              <th className={styles.th}><PiProjectorScreenChartFill size={20} />Saat</th>
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
  
  export default Groups;