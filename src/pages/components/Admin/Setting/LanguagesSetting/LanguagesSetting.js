import React from 'react'
import styles from './LanguagesSetting.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';


export default function LanguagesSetting() {

    const arrlanguage = [
        {name: 'Gujrati',code: 'GUJ',status: 'Active'},
        {name: 'Hindi',code: 'HI',status: 'Active'},
        {name: 'English(default)',code: 'EN',status: 'Active'},
    ];


  return (
    <>
        <div className={styles.LanguagesSettingContainer}>
        <div className={styles.LanguagesSettingMain}>
            <div className={styles.LanguagesSettingMainHeader}>
                <h2>Languages</h2>
                <button className={styles.addlaubtnd}>+ Add Languages</button>
            </div>
            <div className={styles.LanguagesSettingMainTable}>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>CODE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {arrlanguage.map((row,index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.code}</td>
                            <td>{row.status}</td>
                            <td>
                                <div className={styles.LanguagesSettingActionBtn}>
                                    <button className={`${styles.actionBtn} ${styles.view}`}>
                                        <FontAwesomeIcon icon={faEye} /> View
                                    </button>
                                    <button className={`${styles.actionBtn} ${styles.edit}`}>
                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                    </button>
                                    <button className={`${styles.actionBtn} ${styles.delete}`}>
                                        <FontAwesomeIcon icon={faTrashCan} /> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </>
  )
}
