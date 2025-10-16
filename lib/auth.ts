import { betterAuth } from "better-auth";
import {prismaAdapter} from 'better-auth/adapters/prisma'
import { Prisma } from "./generated/prisma";

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
});
