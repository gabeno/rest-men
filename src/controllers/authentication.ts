import express from "express";
import { StatusCodes } from "http-status-codes";
import { createUser, getUserByEmail } from "../db/users";
import { makeHash, matchPassWord } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const user = await getUserByEmail(email).select("+authentication.password");

    if (!user) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const passwordMatch = matchPassWord(user.authentication.password);

    if (!passwordMatch) {
      return res.sendStatus(StatusCodes.FORBIDDEN);
    }

    user.authentication.sessionToken = makeHash(user._id.toString());
    await user.save();
    res.cookie("REST-MEN-AUTH", user.authentication.sessionToken, { domain: "localhost", path: "/" });

    return res.status(StatusCodes.OK).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const {email, password, username} = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const user = await createUser({
      email,
      username,
      authentication: {
        password: makeHash(password),
      },
    });

    return res.status(StatusCodes.OK).json(user).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};