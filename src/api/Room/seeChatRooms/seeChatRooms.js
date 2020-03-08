import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeChatRooms: (_, __, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      return prisma.chatRooms({
        where: {
          participants_some: {
            id: user.id
          }
        }
      });
    }
  }
};
