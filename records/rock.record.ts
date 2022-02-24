import {pool} from "../utils/db";
import {v4 as uuid} from 'uuid';
import {FieldPacket} from "mysql2";

type RockRecordResult = [RockRecord[], FieldPacket[]]

export class RockRecord {
    id?: string;
    land_name: string;
    area_name: string;

    constructor(obj: RockRecord) {
        this.id = obj.id
        this.land_name = obj.land_name
        this.area_name = obj.area_name
    }

    static async listAll(): Promise<RockRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `land`") as RockRecordResult
        return results.map(obj => new RockRecord(obj))
    }

    static async getArea(name): Promise<RockRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `area` WHERE `land_name` = :name", {
            name
        }) as RockRecordResult
        return results.map(obj => new RockRecord(obj))
    }
}