import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackground from "./main-header-backgroung";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
              {/* <Link
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
                href={"/meals"}
              >
                Browse Meals
              </Link> */}
            </li>

            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
              {/* <Link
                className={path === "/community" ? classes.active : undefined}
                href={"/community"}
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
