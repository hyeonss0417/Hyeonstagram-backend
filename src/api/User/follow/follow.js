import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    follow: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id} = args;
      const {user} = request;
      try {
        await prisma.updateUser({
          where: {id: user.id},
          data: {
            following: {
              connect: {
                id
              }
            }
          }
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }
};
