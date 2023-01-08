import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';
import ResultConsumer from '../components/ResultConsumer';
import Page from '../components/Page';
import { doctorQuery } from '../stores/DoctorStore';
import { Box } from '@mui/system';
import { DoctorService } from '../services/DoctorService';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function Welcome() {
    const doctorInfo = useRecoilValue(doctorQuery);

    return (
        <Page>
            <ResultConsumer
                result={doctorInfo}
                success={doctor =>
                    <Typography variant="h5">
                        Zalogowany jako: {doctor.name}
                        
                    </Typography>
                }
                error={error =>
                    <Typography variant="h5">Wystąpił błąd z pozyskaniem danych: {error}</Typography>
                }
            />
        </Page>
    );
}
