import { atom } from "recoil";
import { Doctor } from "../models/Doctor";
import { err, Result } from "../models/Result";
import { DoctorService } from "../services/DoctorService";

export const doctorIdState = atom<Result<String>>({
    key: "doctor",
    default: err("No result yet"),
})