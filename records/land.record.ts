import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type RockRecordResult = [LandRecord[], FieldPacket[]]

export class LandRecord {
    id?: string;
    land_name: string;
    area_name: string;

    constructor(obj: LandRecord) {
        this.id = obj.id
        this.land_name = obj.land_name
        this.area_name = obj.area_name
    }

    static async listAll(): Promise<LandRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `land`") as RockRecordResult
        return results.map(obj => new LandRecord(obj))
    }
}