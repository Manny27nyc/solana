// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { coerce, instance, string } from "superstruct";
import { PublicKey } from "@solana/web3.js";

export const PublicKeyFromString = coerce(
  instance(PublicKey),
  string(),
  (value) => new PublicKey(value)
);
