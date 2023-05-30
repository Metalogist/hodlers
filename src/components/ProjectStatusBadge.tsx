import moment from 'moment';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';


interface Props {
  complete: boolean;
  paused: boolean;
  startTime?: BigInt;
}

const ProjectStatusBadge = ({ complete, paused, startTime }: Props) => {
  const startDate = startTime ? moment.unix(parseInt(startTime.toString())) : null;

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      padding: '5px 10px',
      boxShadow: 'inset 1px 1px 5px rgba(0, 0, 0, .2)',
      borderRadius: '20px',
    }}>
      {
        startDate?.isAfter() ?
        <Chip
          label="Upcoming"
          color="upcoming"
          size="small"
          sx={{ color: 'black', marginRight: 0, backgroundColor: 'transparent'}}
        />
        : paused ? (
          <Chip
            label="Paused"
            color="info"
            size="small"
            sx={{ color: 'black', marginRight: 0, backgroundColor: 'transparent'}}
          />
        ) : !complete ? (
          <Chip
            label="Live"
            color="success"
            size="small"
            sx={{ color: 'black', marginRight: 0, backgroundColor: 'transparent'}}
          />
        ) : (
          <Chip
            label="Complete"
            color="primary"
            size="small"
            variant="outlined"
            sx={{ color: 'black', marginRight: 0 , backgroundColor: 'transparent'}}
          />
        )
      }

      {
        startDate && (
          <Typography>
            <br />
          </Typography>
        )
      }
    </Box>
  )
}

export default ProjectStatusBadge;
