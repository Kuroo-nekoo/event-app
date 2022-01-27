import Link from "next/link";
import classes from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
