import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';
import Failable from '../components/Failable';
import Page from '../components/Page';
import { isOk } from '../models/Result';
import { doctorQuery } from '../stores/DoctorStore';

type Props = {}

const navItems = ['Home', 'About', 'Contact'];

export default function Welcome({ }: Props) {
    const doctorInfo = useRecoilValue(doctorQuery);

    return (
        <Page>
            <Failable
                result={doctorInfo}
                success={doctor =>
                    <Typography variant="h5">Witaj Panie Doktorze: {doctor.name}</Typography>
                }
                error={error =>
                    <Typography variant="h5">Wystąpił błąd z pozyskaniem danych: {error}</Typography>
                }
            />
        </Page>
    );
}
