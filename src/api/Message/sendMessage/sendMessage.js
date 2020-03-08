import {prisma} from "../../../../generated/prisma-client";
import {CHATROOM_FRAGEMENT} from "../../../fragments";

export default {
  Mutation: {
    sendMessage: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      const {roomId, message} = args;
      let {toId} = args;
      let chatRoom;
      if (roomId === undefined) {
        if (user.id !== toId) {
          chatRoom = await prisma.createChatRoom({
            participants: {
              connect: [{id: user.id}, {id: toId}]
            }
          });
        }
      } else {
        chatRoom = await prisma
          .chatRoom({id: roomId})
          .$fragment(CHATROOM_FRAGEMENT);
        toId = chatRoom.participants.filter(
          participant => participant.id !== user.id
        )[0].id;
        // console.log(toId);
      }
      if (!chatRoom) {
        throw Error("⚠️ The chatroom not found! ⚠️");
      }

      return prisma.createMessage({
        chatRoom: {connect: {id: chatRoom.id}},
        from: {
          connect: {id: user.id}
        },
        to: {
          connect: {id: toId}
        },
        text: message
      });
    }
  }
};
