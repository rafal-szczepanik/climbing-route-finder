import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {BadRequest} from "../errors/bad-request";

type AreaRecordResult = [AreaRecord[], FieldPacket[]]

export class AreaRecord {
    id: string;
    area_name: string;
    location?: string;
    about?: string
    land_name: string

    constructor(obj: AreaRecord) {
        if (!obj.area_name || obj.area_name.length > 35) {
            throw new BadRequest('Name has to have max 35 characters')
        }
        this.id = obj.id
        this.area_name = obj.area_name
        this.location = obj.location
        this.about = obj.about
        this.land_name = obj.land_name
    }

    static async getArea(name): Promise<AreaRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `area` WHERE `land_name` = :name", {
            name
        }) as AreaRecordResult
        return results.map(obj => new AreaRecord(obj))
    }
}