import React from 'react';
import { styled } from '@mui/material';
import homeIcon from '../images/home-icon.png';
import bookmarkIcon from '../images/bookmark-icon.png';
import settingsIcon from '../images/settings-icon.png';

const Sidebar = styled('div')({
  width: '60px',
  height: 'calc(100vh - 80px)',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRight: '1px solid #ccc',
  zIndex: 50,
  position: 'fixed',
  top: '80px',
  padding: '1rem 0',
});

const NavMenu = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const NavItem = styled('li')({
  marginBottom: '20px',
});

const Icon = styled('img')({
  width: '30px',
  height: '30px',
});

const BottomIcon = styled('img')({
  width: '30px',
  height: '30px',
  marginBottom: '0.5rem',
});

const SidebarComponent: React.FC = () => {
  return (
    <Sidebar>
      <NavMenu>
        <NavItem><a href="#"><Icon src={bookmarkIcon} alt="Bookmark" /></a></NavItem>
        <NavItem><a href="#"><Icon src={homeIcon} alt="Home" /></a></NavItem>
      </NavMenu>

      {/* Settings icon at the bottom */}
      <div style={{ marginTop: 'auto', marginBottom: '1rem' }}>
        <a href="#"><BottomIcon src={settingsIcon} alt="Settings" /></a>
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
