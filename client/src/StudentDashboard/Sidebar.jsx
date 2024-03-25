
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs';
import '../StudentApp.css';
function Sidebar({ open, toggle }) {
  return (
    <aside id="sidebar" className={open ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand bg-black rounded-full h-[70px] w-[70px]'>
          <img src='https://cdn-icons-png.flaticon.com/512/4892/4892735.png' className='h-16 w-16' alt="Profile" />
        </div>
        PROFILE
        <p className='icon close_icon' onClick={toggle}>X</p>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/">
            <BsGrid1X2Fill className='icon' />
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/notes">
            <BsFillGrid3X3GapFill className='icon' />
            Upload Notes
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/quiz">
            <BsPeopleFill className='icon' />
            Attempt Quiz
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/assignment">
            <BsListCheck className='icon' />
            Assignment
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/Voca">
            <BsGrid1X2Fill className='icon' />
            Word Challenge
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/update-profile">
            <BsMenuButtonWideFill className='icon' />
            Update Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings">
            <BsFillGearFill className='icon' />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}


export default Sidebar;
