import { Box, Divider, Paper, Typography } from "@mui/material";
import { Prescription } from "../models/Prescription";

type PrescriptionParams = {
    prescription: Prescription;
};

export default function Prescription({prescription}: PrescriptionParams) {

    return <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            width: "40%",
            marginLeft: "5%"
          }}>
          <Paper
            sx={{
              flexDirection: 'column',
              padding: "2rem"
            }}
          >
            {
              prescription.medicines.map((medicine) =>
                <Typography
                  margin={1}
                  variant='body1'
                >
                  {medicine.name} - {medicine.amount} pcs
                </Typography>
              )
            }
            <Divider />
            <Typography
              marginTop={1}
              variant="body2"
            >
              {prescription.description}
            </Typography>
          </Paper>
        </Box>

}