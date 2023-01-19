import { atom, selector } from "recoil";
import { Doctor } from "../models/Doctor";
import { err, isOk, Result } from "../models/Result";
import { DoctorService } from "../services/DoctorService";

export const tokenState = atom<Result<string>>({
    key: "token",
    default: err("No result yet"),
})

export const doctorQuery = selector<Result<Doctor>>({
    key: "doctor",
    get: async ({get}) => {
        const token = get(tokenState);

        if(!isOk(token)) {
            return err("No token");
        }
        
        const doctorInfo = await DoctorService.getDoctorInfo(token.Ok);
        return doctorInfo;        
    }
})