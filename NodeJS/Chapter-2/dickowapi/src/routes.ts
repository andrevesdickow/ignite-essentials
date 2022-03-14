import { Request, Response } from "express";

import CreatePasswordService from "./CreatePasswordService";

export function createPassword(request: Request, response: Response) {
  CreatePasswordService.execute({
    description: "Github",
    login: "andrevesdickow",
    password: "1234",
  });

  return response.send();
}
