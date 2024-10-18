import React from "react";
import styles from "./Competences.module.css";
import competences from "../../data/compences.json";

export const Competences = () => {
  return (
    <div className={styles.container} id="competences">
      <h2 className={styles.title}>Competences</h2>
      <table className={styles.competencesTable}>
        <thead>
          <tr>
            <th>Competences</th>
            <th>Preuves</th>
          </tr>
        </thead>
        <tbody>
          {competences.map((competence, index) => (
            <tr key={index}>
              <td>
                {competence.name.split('▸').map((item, idx) => (
                  item ? <span key={idx}>▸{item}<br /></span> : null
                ))}
              </td>
              <td>
                {competence.link ? (
                  <a href={competence.link} target="_blank" rel="noopener noreferrer">
                    {competence.date}
                  </a>
                ) : (
                  competence.date
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
