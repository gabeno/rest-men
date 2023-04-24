import express from "express";
import { StatusCodes } from "http-status-codes";
import { deleteUserById, getUserById, getUsers } from "../db/users";

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);

    return res.status(StatusCodes.OK).json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    res.status(StatusCodes.OK).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};

export const updateUser =async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    if (!username) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }
    
    const user = await getUserById(id);
    if (!user) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }
    user.username = username;
    await user.save();

    return res.status(StatusCodes.OK).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};