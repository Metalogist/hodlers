import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ConnectWallet from 'components/ConnectWallet';

const Header = () => {
  return (
    <AppBar color="secondary" position="static" elevation={1}>
      <Toolbar sx={
        {
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          margin: 'auto',
          justifyContent: 'space-between',
        }
      }>
        <Link href="/" sx={{
          color: 'white',
          textDecoration: 'none'
        }}>
          <Typography variant="h6" color="inherit" noWrap>
            PBAB
          </Typography>
        </Link>

        <ConnectWallet />
      </Toolbar>
    </AppBar>
  );
}

export default Header;