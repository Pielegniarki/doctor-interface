import { atom, selector } from "recoil";
import { Doctor } from "../models/Doctor";
import { err, isOk, Result } from "../models/Result";
import { AuthenticationService } from "../services/AuthenticationService";
import { DoctorService } from "../services/DoctorService";
import { PatientService } from "../services/PatientService";
import { PrescriptionService } from "../services/PrescriptionService";
import { VisitService } from "../services/VisitService";
import { tokenState } from "./DoctorStore";

export const doctorServiceStore = selector<DoctorService>({
    key: "doctorService",
    get: async ({ get }) => {
        const token = get(tokenState);

        return new DoctorService(token, "doctor");
    }
})

export const patientServiceStore = selector<PatientService>({
    key: "patientService",
    get: async ({ get }) => {
        const token = get(tokenState);

        return new PatientService(token, "patient");
    }
})

export const visitServiceStore = selector<VisitService>({
    key: "visitService",
    get: async ({ get }) => {
        const token = get(tokenState);

        return new VisitService(token, "visit");
    }
})

export const authenticationServiceStore = selector<AuthenticationService>({
    key: "authenticationService",
    get: async ({ get }) => {
        const token = get(tokenState);

        return new AuthenticationService(token, "authentication");
    }
})


export const prescriptionServiceStore = selector<PrescriptionService>({
    key: "prescriptionService",
    get: async ({ get }) => {
        const token = get(tokenState);

        return new PrescriptionService(token, "prescription");
    }
})
