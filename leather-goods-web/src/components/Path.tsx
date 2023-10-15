import Link from "next/link";
import { PathProps } from "src/interfaces/pathProps.interfac";
import styles from "@styles/components/path.module.scss";

const Path = ({ pathName }: PathProps) => {
  return (
    <div id={styles["path"]}>
      <div className="container">
        <div className={styles["path-container"]}>
          <Link href="/" className="fw-500">
            Trang chủ
          </Link>
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          <p>{pathName}</p>
        </div>
      </div>
    </div>
  );
};

export default Path;
