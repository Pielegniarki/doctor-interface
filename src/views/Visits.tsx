import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { VisitService } from '../services/VisitService';
import { Visit } from '../models/Visit';
import { useRecoilValue } from 'recoil';
import { patientIdState } from '../stores/PatientIdStore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { format, formatDistance, formatDistanceToNow, formatRelative } from 'date-fns';
import CallIcon from '@mui/icons-material/Call';
import { pl } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import Page from '../components/Page';

export default function Visits() {
  const [visits, setVisits] = useState<Visit[] | null>(null)

  const patientId = useRecoilValue(patientIdState);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const visits = await VisitService.fetchAllVisitsOfPatient(patientId);

      setVisits(visits);
    }

    fetchData();
  }, [])

  return (
    <Page>
      <Container component="main">
        <Paper
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <List>
                {
                  visits?.map((visit) =>
                    <ListItem
                      key={visit._id!.$oid}
                      secondaryAction={
                        <Button 
                          variant="contained" 
                          endIcon={<CallIcon />}
                          onClick={() => navigate("/call/" + visit._id!.$oid)}  
                        >
                          Call
                        </Button>
                      }
                    >
                      <ListItemText
                        primary={`Visit - ${format(visit.date, "Pp", {locale: pl})} (${formatDistanceToNow(visit.date)})` }
                      />
                    </ListItem>
                  ) ?? null
                }
              </List>
        </Paper>
      </Container>
    </Page>
  );

}
