import { Request, Response } from "express";
import User from "models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {

  const { name, email, password } = req.body;

  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name, 
      email, 
      password: hashedPassword,
    });

    newUser.save();
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(401).json(error)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne(
      { email },
      {
        _id: 0,
        __v: 0,
      }
    ).select("+password");
    
    if (!user) {
      return res.status(401).json("User with this email does not exist")
    }
    const result = await bcrypt.compare(password, user.password)

    if (result) {
      const signData = {
        name: user.name,
        id: user.id,
      }

      const token = jwt.sign(signData, process.env.JWT_SECRET!)

      return res.status(200).json({ ...signData, token })
    }
  } catch (error) {
    return res.status(401).json(error)
  }
}