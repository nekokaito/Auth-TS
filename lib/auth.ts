import { betterAuth } from "better-auth";
import {prismaAdapter} from 'better-auth/adapters/prisma'
import { Prisma } from "./generated/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(Prisma, {provider:"postgresql"}),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: "",
      clientSecret: "",
    },
    google: {
      clientId: "",
      clientSecret: "",
    },
  },
  plugins: [nextCookies()]
});
