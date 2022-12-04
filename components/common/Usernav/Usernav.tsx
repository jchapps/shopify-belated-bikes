import { FC } from "react";
import styles from "./Usernav.module.css";
import Link from "next/link";
import {Bag as Cart, Heart} from '@components/icons'
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  const ui = useUI()
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}><Cart onClick={ui.setSideBarOpen}/></li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
            <Heart/>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Usernav;
