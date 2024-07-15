import React,{useState} from 'react';
import eye from '../../../../assets/image/eye.png';
import edit from '../../../../assets/image/edit.png';
import deleteicon from '../../../../assets/image/delete.png';
import './Administrator.css'; // Assuming you have a CSS file for styles
import TopBar from '../TopBar/TopBar';
import { useNavigate } from 'react-router-dom';
// import ViewProfile from './ViewProfile/ViewProfile';
import EditProfile from './EditProfile/EditProfile';

export default function Administrator() {

    const [isDrawerOpen,setDrawerOpen] = useState(false);

    const navigate = useNavigate();

    const toggleNavigationView = () => {
        console.log('clicked');
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

      <div className='aa'>

        <TopBar/>

        <div className="administrator">
            <h2>Dashboard/Administrator</h2>
            <div className="box">
                <div className="header-buttons">
                    <div className="h4">
                        <h4>Administrator</h4>
                    </div>
                    <div className="btn1">
                        <button className="filter">Filter</button>
                        <button className="export">Export</button>
                        <button className="add-admin" onClick={(e) => openDrawer(e)} >Add Administrator</button>
                    </div>
                </div>
                <div className="Table">
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
                                <td>Vrushit</td>
                                <td>vrushit@example.com</td>
                                <td>+91 1578 65344</td>
                                <td>
                                    <span className="status">Active</span>
                                </td>
                                <td className="icon">
                                    <div className="view" onClick={(e) => toggleNavigationView(e)} >
                                        <img src={eye} alt="View" />
                                    </div>
                                    <div className="edit" onClick={(e) => openDrawer(e)}>
                                        <img src={edit} alt="Edit" />
                                    </div>
                                    <div className="delete">
                                        <img src={deleteicon} alt="Delete" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>admin@example.com</td>
                                <td>+91 98898 98989</td>
                                <td>
                                    <span className="status">Active</span>
                                </td>
                                <td className="icon">
                                    <div className="view" onClick={toggleNavigationView} >
                                        <img src={eye} alt="View" />
                                    </div>
                                    <div className="edit" onClick={openDrawer}>
                                        <img src={edit} alt="Edit" />
                                    </div>
                                    <div className="delete">
                                        <img src={deleteicon} alt="Delete" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </div>
            <EditProfile isOpen={isDrawerOpen} onClose={closeDrawer} />
        </div>
        
    );
}
