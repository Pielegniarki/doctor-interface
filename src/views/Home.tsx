import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';
import ResultConsumer from '../components/ResultConsumer';
import { doctorQuery } from '../stores/DoctorStore';
import { tokenState } from '../stores/DoctorStore';


export function Home() {
    const doctorInfo = useRecoilValue(doctorQuery);

    return (
        <ResultConsumer
            result={doctorInfo}
            success={doctor =>
                <Typography variant="h5" m={2}>
                    Zalogowany jako: {doctor.name}

                </Typography>
            }
            error={error =>
                <Typography variant="h5">Wystąpił błąd z pozyskaniem danych: {error}</Typography>
            }
        />
    );
}
