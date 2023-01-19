import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { VisitService } from '../services/VisitService';
import { Visit } from '../models/Visit';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../stores/DoctorStore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { format, formatDistance, formatDistanceToNow, formatRelative } from 'date-fns';
import CallIcon from '@mui/icons-material/Call';
import { pl } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { Identifiable } from '../services/types';
import { visitServiceStore } from '../stores/ServiceStore';

export default function Visits() {
  const [visits, setVisits] = useState<Identifiable<Visit>[] | null>(null)

  const token = useRecoilValue(tokenState);
  const visitService = useRecoilValue(visitServiceStore);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const visits = await visitService.fetchAllVisits();

      setVisits(visits);
    }

    fetchData();
  }, [])

  return (
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
                  primary={`Visit - ${format(visit.date, "Pp", { locale: pl })} (${formatDistanceToNow(visit.date)})`}
                />
              </ListItem>
            ) ?? null
          }
        </List>
      </Paper>
    </Container>
  );

}
