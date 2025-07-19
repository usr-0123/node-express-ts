import { Response } from 'express';

export const successMessage = (res: Response, message: string) => {
  return res.status(200).json({ Message: message });
};

export const sendCreated = (res: Response, message: string) => {
  return res.status(201).json({ Message: message });
};

export const sendBadRequest = (res: Response, message: string) => {
  return res.status(400).json({ Message: message });
};

export const unAuthorized = (res: Response, message: string) => {
  return res.status(401).json({ Message: message });
};

export const forbidden = (res: Response, message: string) => {
  return res.status(403).json({ Message: message });
};

export const sendNotFound = (res: Response, message: string) => {
  return res.status(404).json({ Message: message });
};

export const methodNotAllowed = (res: Response, message: string) => {
  return res.status(405).json({ Message: message });
};

export const timeOut = (res: Response, message: string) => {
  return res.status(408).json({ Message: message });
};

export const conflict = (res: Response, message: string) => {
  return res.status(409).json({ Message: message });
};

export const sendServerError = (res: Response, message: string) => {
  return res.status(500).json({ Message: message });
};

export const badGateway = (res: Response, message: string) => {
  return res.status(502).json({ Message: message });
};
