import {Request, Response} from "express";
import {CustomAPIError} from "../errors/custom-error";


export const handleError = (err: Error, req: Request, res: Response, next) => {
    if (err instanceof CustomAPIError) {
        res.status(err.statusCode).render('error', {
            message: err.message
        })
    }
}