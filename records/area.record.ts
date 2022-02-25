import {pool} from "../utils/db";
import {v4 as uuid} from 'uuid';
import {FieldPacket} from "mysql2";

type AreaRecordResult = [AreaRecord[], FieldPacket[]]

export class AreaRecord {
    id: string;
    area_name: string;
    location?: string;
    about?: string
    rock_area_name: string
    rock_name: string

    constructor(obj: AreaRecord) {

        this.id = obj.id
        this.area_name = obj.area_name
        this.location = obj.location
        this.about = obj.about
        this.rock_area_name = obj.rock_area_name
        this.rock_name = obj.rock_name
    }

    static async getArea(name): Promise<AreaRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `area` WHERE `land_name` = :name", {
            name
        }) as AreaRecordResult
        return results.map(obj => new AreaRecord(obj))
    }
    static async getRockArea(name): Promise<AreaRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `area` WHERE `land_name` = :name", {
            name
        }) as AreaRecordResult
        return results.map(obj => new AreaRecord(obj))
    }
}