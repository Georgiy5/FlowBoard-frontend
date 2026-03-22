import { LoginForm } from "@/features/LoginForm";
import Panel from "@/shared/ui/Panel";
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
