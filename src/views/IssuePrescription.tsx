import { ReactNode, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate } from 'react-router-dom';
import { Container, Paper, Autocomplete, TextField, List, ListItem, Button, ListItemText, TextareaAutosize, Typography, Divider } from '@mui/material';
import PrescriptionSheet from '../components/PrescriptionSheet';
import { Medicine } from '../models/Medicine';
import { Prescription } from '../models/Prescription';
import { PrescriptionService } from '../services/PrescriptionService';


export default function IssuePrescription() {
  const [constructedPrescription, setConstructedPrescription] = useState<Prescription>({
    doctor: "Doktorek",
    creationDate: new Date(),

    medicines: [],
    description: "",

    patientId: 0xdeadbeef
  });

  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const [medicineName, setMedicineName] = useState("");
  const [medicineAmount, setMedicineAmount] = useState();
  const [description, setDescription] = useState("");

  const [prescriptionMedicines, setPrescriptionMedicines] = useState<Medicine[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const medicines = await PrescriptionService.getAllMedicines()

      setMedicines(medicines);
    }

    fetchData();
  }, []);

  const addMedicine = () => {
    if (medicineName && medicineAmount) {

      const medicine: Medicine = {
        name: medicineName,
        amount: medicineAmount
      }
      setPrescriptionMedicines(currentMedicines => [...currentMedicines, medicine]);
    }
  }

  const save = async () => {
    // await PrescriptionService.createPrescription();
  }

  return <Box display="flex" justifyContent="space-between" paddingTop="3%">
      <Box display="flex" flexDirection="column" width="100%" gap={10}>
        {/* medicines */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            width: "40%",
            marginLeft: "5%"
          }}
        >
          <Paper
            sx={{
              flexDirection: 'column',
              padding: "2rem"
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={medicines.map(medicine => medicine.name)}
              onChange={(_, value) => {
                setMedicineName(value!)
              }}
              renderInput={(params) => <TextField {...params} label="Medicines" />}
            />
            <TextField
              label="Amount"
              onInput={amount => setMedicineAmount((amount.target as any).value)}
              sx={{ mt: 4 }}
            />
            <div>
              <Button
                type="submit"
                variant="contained"
                onClick={addMedicine}
                size="small"
                sx={{ mt: 4 }}
              >
                Add
              </Button>
            </div>
          </Paper>
        </Box>
        {/* prescription */}
        <PrescriptionSheet prescription={constructedPrescription}/>
      </Box>
      {/* desc */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          width: "40%",
          marginRight: "3%"
        }}
      >
        <Paper
          sx={{
            flexDirection: 'column',
            padding: "2rem"
          }}
        >
          <TextareaAutosize
            placeholder="Description"
            onInput={desc => setDescription((desc.target as any).value)}
            style={{ marginTop: 4, width: "100%", }}
          />
          <div>
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ mt: 4 }}
              onClick={() => console.log("XD")}
            >
              Add
            </Button>
          </div>
        </Paper>
      </Box>
    </Box>;
}