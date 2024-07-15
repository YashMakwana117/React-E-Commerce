import React,{useState} from 'react'
import eye from '../../../../assets/image/eye.png';
import edit from '../../../../assets/image/edit.png';
import deleteicon from '../../../../assets/image/delete.png';
import styles from './Customer.module.css';
import TopBar from '../TopBar/TopBar';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../Administrators/EditProfile/EditProfile';

export default function Customer() {
    const [drawerOpen,setDrawerOpen] = useState(false);

    const navigate = useNavigate();

    const toggleNavigationView = () => {
        console.log('custclick');
        navigate('/viewprofile');
    }

    const openDrawer = (event) => {
        event.stopPropagation();
        setDrawerOpen(true);
    }

    const closeDrawer = () => {
        setDrawerOpen(false);
    }

  return (
   
        <div className={styles.cc}>
            <TopBar/>
        <div className={styles.administrator}>
            <h2>Dashboard/Customer</h2>
            <div className={styles.box}>
                <div className="header-buttons">
                    <div className="h4">
                        <h4>Customer</h4>
                    </div>
                    <div className="btn1">
                        <button className="filter">Filter</button>
                        <button className="export">Export</button>
                        <button className="add-admin" onClick={(e) => openDrawer(e)} >Add Customer</button>
                    </div>
                </div>
                <div className={styles.Table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Test</td>
                                <td>Test@example.com</td>
                                <td>+91 1578 65344</td>
                                <td>
                                    <span className={styles.status}>Active</span>
                                </td>
                                <td className={styles.icon}>
                                    <div className={styles.view} onClick={toggleNavigationView}  >
                                        <img src={eye} alt="View" />
                                    </div>
                                    <div className={styles.edit} onClick={(e) => openDrawer(e)} >
                                        <img src={edit} alt="Edit" />
                                    </div>
                                    <div className={styles.delete}>
                                        <img src={deleteicon} alt="Delete" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>+91 98898 98989</td>
                                <td>
                                    <span className={styles.status}>Active</span>
                                </td>
                                <td className={styles.icon}>
                                    <div className={styles.view} onClick={toggleNavigationView} >
                                        <img src={eye} alt="View" />
                                    </div>
                                    <div className={styles.edit} onClick={(e) => openDrawer(e)} >
                                        <img src={edit} alt="Edit" />
                                    </div>
                                    <div className={styles.delete}>
                                        <img src={deleteicon} alt="Delete" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </div>
            <EditProfile isOpen={drawerOpen} onClose={closeDrawer} />
        </div>

  )
}
