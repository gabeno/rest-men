import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALT_ROUNDS);

export const random = () => bcrypt.genSalt(saltRounds);
export const makeHash = (secret: string) => {
  return bcrypt.hashSync(secret, saltRounds);
};
export const matchPassWord = async (password: string) => {
  return await bcrypt.compare(password, password);
};