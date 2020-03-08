import {prisma} from "../../../../generated/prisma-client";
import {CHATROOM_FRAGEMENT} from "../../../fragments";

export default {
  Query: {
    seeChatRooms: (_, __, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      return prisma
        .chatRooms({
          where: {
            participants_some: {
              id: user.id
            }
          }
        })
        .$fragment(CHATROOM_FRAGEMENT);
    }
  }
};
