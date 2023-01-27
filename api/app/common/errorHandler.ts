import { Request, Response, NextFunction } from "express";

interface ResponseError extends Error {
  status?: number;
}

export const errorHandler = () => {
  return (
    error: ResponseError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // in a real world we would check NODE_ENV before
    // console.error('ERROR FROM HANDLER', error, req.url)
    res.status(error.status || 500).json({
      status: error.status,
      message: error.message,
    });
  };
};
