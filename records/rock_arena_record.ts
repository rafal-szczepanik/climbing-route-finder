import {pool} from "../utils/db";
import {v4 as uuid} from 'uuid';
import {FieldPacket} from "mysql2";

type RockArenaRecordResult = [RockArenaRecord[], FieldPacket[]]

export class RockArenaRecord {
    id: string;
    name: string;

    constructor(obj: RockArenaRecord) {
        this.id = obj.id
        this.name = obj.name
    }

    static async getArea(name): Promise<RockArenaRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `rock_area` WHERE `arean_name` = :name", {
            name
        }) as RockArenaRecordResult
        return results.map(obj => new RockArenaRecord(obj))
    }
}