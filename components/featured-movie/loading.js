import React from "react";
import styles from "./styles.module.css";
import Loading from "../../components/loading/index";

function FeaturesLoading() {
  return (
    <div className={styles.movieWrapper} style={{ height: 278 }}>
      <Loading />
    </div>
  );
}

export default FeaturesLoading;
