import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type RockRecordResult = [RockRecord[], FieldPacket[]]

export class RockRecord {
    id: string;
    rock_name: string;
    location: string;

    constructor(obj: RockRecord) {
        this.id = obj.id
        this.rock_name = obj.rock_name
        this.location = obj.location
    }

    static async getRocks(name): Promise<RockRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `rock` WHERE `rock_area_name` = :name", {
            name
        }) as RockRecordResult
        return results.map(obj => new RockRecord(obj))
    }
}