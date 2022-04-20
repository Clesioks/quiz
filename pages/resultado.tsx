import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Resultado.module.css";

const resultado = () => {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <span>{total}</span>
      <span>{certas}</span>
      <span>{`${percentual}%`}</span>
    </div>
  );
};

export default resultado;
