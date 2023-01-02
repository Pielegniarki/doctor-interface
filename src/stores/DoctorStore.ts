import { selector } from "recoil";
import { Doctor } from "../models/Doctor";
import { Result } from "../models/Result";
import { DoctorService } from "../services/DoctorService";

export const doctorQuery = selector<Result<Doctor>>({
    key: "doctor",
    get: async () => {
        const doctorInfo = await DoctorService.getDoctorInfo("63b3397087473f51bda2024a");

        return doctorInfo;
    }
})