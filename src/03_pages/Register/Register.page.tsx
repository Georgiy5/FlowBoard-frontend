import RegisterForm from "../../05_features/RegisterForm/RegisterForm";
import Panel from "../../07_shared/ui/Panel/Panel";
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
