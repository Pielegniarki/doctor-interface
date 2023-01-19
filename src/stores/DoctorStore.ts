import { atom, selector } from "recoil";
import { Doctor } from "../models/Doctor";
import { err, isOk, Result } from "../models/Result";
import { DoctorService } from "../services/DoctorService";
import { localStorageEffect } from "./LocalStorageEffect";
import { doctorServiceStore } from "./ServiceStore";

export const tokenState = atom<string | null>({
    key: "token",
    default: null,
    effects: [
        localStorageEffect("token")
    ]
})

export const doctorQuery = selector<Result<Doctor>>({
    key: "doctor",
    get: async ({get}) => {
        const token = get(tokenState);

        if(!token) {
            return err("No token in store");
        }

        const service = get(doctorServiceStore);

        const doctorInfo = await service.getDoctorInfo();

        return doctorInfo;        
    }
})