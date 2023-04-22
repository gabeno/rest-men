import crypto from "crypto";

export const random = () => crypto.randomBytes(128).toString("base64");
export const makeHash = (salt: string, password: string) => {
  return crypto.createHmac("sha256", [salt, password].join("/")).update(process.env.APP_SECRET).digest("hex");
};