import LoginForm from "../../05_features/LoginForm/LoginForm";
import Panel from "../../07_shared/ui/Panel/Panel";
import styles from './Login.page.module.css'
import cn from 'classnames'


export default function LoginPage() {
  return (
    <div className={styles.page}> 
        <Panel/>
        <div className={styles.container}>
          <LoginForm/>
        </div>
    </div>
  );
}
