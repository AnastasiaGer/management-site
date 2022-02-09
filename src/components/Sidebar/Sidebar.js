import './Sidebar.css';
import DashbordIcon from '../../assets/dashboard_icon.svg'
import AddIcon from '../../assets/add_icon.svg'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <p>
            Hey User
          </p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/' >
                <img src={DashbordIcon} alt='DashbordIcon' />
                <span>Dashbord</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create' >
                <img src={AddIcon} alt='AddIcon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
