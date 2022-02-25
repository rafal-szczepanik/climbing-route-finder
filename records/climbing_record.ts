import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type ClimbingRouteRecordResult = [ClimbingRouteRecord[], FieldPacket[]]

export class ClimbingRouteRecord {
    id: string;
    route_number: number
    route_name: string
    difficulty: string
    area_name: string;
    about?: string
    rock_area_name: string
    rock_name: string
    conqueror: string

    constructor(obj: ClimbingRouteRecord) {

        this.id = obj.id
        this.route_number = obj.route_number
        this.route_name = obj.route_name
        this.difficulty = obj.difficulty
        this.about = obj.about
        this.conqueror = obj.conqueror
        this.area_name = obj.area_name
        this.rock_area_name = obj.rock_area_name
        this.rock_name = obj.rock_name
    }


    static async getRoutes(name): Promise<ClimbingRouteRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `climbing_route` WHERE `rock_name` = :name ORDER BY `route_number` ASC", {
            name
        }) as ClimbingRouteRecordResult
        console.log(results)
        return results.map(obj => new ClimbingRouteRecord(obj))
    }
}
