import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p>Copyright &copy; JpunktWpunkt</p>
                <p>
                    <Link href="/about">About this Project</Link>
                </p>
            </footer>
        </div>
    );
}


export default Footer;