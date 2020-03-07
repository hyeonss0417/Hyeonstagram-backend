import {checkIfAuthenticated} from "../../../middleware";
import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    unfollow: async (_, args, {request}) => {
      checkIfAuthenticated(request);
      const {id} = args;
      const {user} = request;
      try {
        await prisma.updateUser({
          where: {id: user.id},
          data: {
            following: {
              disconnect: {
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
