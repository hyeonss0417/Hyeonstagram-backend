import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      const {id} = args;
      const user = await prisma.user({id});
      user["posts"] = await prisma.user({id}).posts();
      return user;
    }
  }
};
