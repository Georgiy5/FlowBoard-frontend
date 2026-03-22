import { RegisterForm } from "@/features/RegisterForm";
import Panel from "@/shared/ui/Panel";
import styles from './Register.page.module.css'



export default function Register() {
  return (
    <div className={styles.page}> 
        <Panel/>
        <div className={styles.container}>
          <RegisterForm/>
        </div>
    </div>
  );
}
