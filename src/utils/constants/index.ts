import { compare, hashSync } from "bcrypt";

export const createPasswordHash = (plainText: string) => {
  return hashSync(plainText, 12);
};

export const comparePassword = (plainText: string, cipherText: string) => {
  return Promise.resolve(compare(plainText, cipherText));
};
