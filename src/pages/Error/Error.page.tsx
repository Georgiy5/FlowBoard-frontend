import Button from "@/shared/ui/Button";
import styles from './Error.page.module.css'
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.number}>404</p>
                <p>К сожалению, такой страницы не существует</p>
            </div>
            <Button
                text="Вернуться на главную"
                appearance="big"
                onClick={() => navigate('/')}
            />
        </div>
    )
}
