import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./footer.module.css";

const navItems = [
  {
    path: "https://www.theatlantic.com/",
    label: "Today",
  },
  {
    path: "/explore",
    label: "Explore",
  },
  {
    path: "/sections",
    label: "Sections",
  },
  {
    path: "/account",
    label: "Account",
  },
];

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <div>
        <nav className={styles.footer}>
          {navItems.map(({ path, label }) => (
            <a key={path} href={path}>
              <div className={styles.icon_block}>
                <img src="square.png" />
                <p>{label}</p>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
