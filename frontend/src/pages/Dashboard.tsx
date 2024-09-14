import React from 'react';
import { styled } from '@mui/material';
import Sidebar from '../components/Sidebar';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import redarrow from '../images/redarrow.png';

// Header
const Header = styled('div')({
  background: 'linear-gradient(to bottom, #64dafe, white)',
  height: '80px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '75px',
});

const Heading = styled('h1')({
  fontSize: '2.5rem',
  fontFamily: 'serif',
  margin: '0',
});

const RedArrow = styled('img')({
  width: '5%',
  marginLeft: '-45px',
  position: 'relative',
  top: '1.4rem',
});

// Divider styling
const Divider = styled('div')({
  width: '1px',
  backgroundColor: '#ccc',
  height: '90%',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
});

// Main content
const DashboardMain = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  padding: '2rem',
  gap: '2rem',
  justifyContent: 'space-around',
  position: 'relative',
});

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header>
        <Heading>Trek</Heading>
        <RedArrow src={redarrow} alt="Red Arrow" />
      </Header>

      {/* Main content with sidebar and sections */}
      <div style={{ display: 'flex', height: 'calc(100vh - 80px)', position: 'relative' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <DashboardMain>
          <LeftSection />
          {/* Divider in the center */}
          <Divider />
          <RightSection />
        </DashboardMain>
      </div>
    </>
  );
};

export default Dashboard;
