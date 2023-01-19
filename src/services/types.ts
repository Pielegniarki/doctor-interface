import { ObjectId } from "../models/ObjectId";

export type ApiReturned<T> = { [K in keyof T]: T[K] extends Date ? string : T[K] };

export type Identifiable<T> = T & { _id: ObjectId };