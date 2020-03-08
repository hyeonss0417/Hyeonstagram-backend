import {prisma} from "../../../../generated/prisma-client";
import {CHATROOM_FRAGEMENT} from "../../../fragments";

export default {
  Query: {
    seeChatRoom: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      const {id} = args;
      const isChatMember = await prisma.$exists.chatRoom({
        id,
        participants_some: {id: user.id}
      });
      if (!isChatMember) {
        throw Error("⚠️ You are not chat member ⚠️");
      }
      const chatRoom = await prisma
        .chatRoom({id})
        .$fragment(CHATROOM_FRAGEMENT);
      const messages = await prisma.chatRoom({id}).messages();
      return {chatRoom, messages};
    }
  }
};
