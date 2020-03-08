import {prisma} from "../../../../generated/prisma-client";

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        // checkIfAuthenticated(request);
        const {chatId} = args;
        // const {user} = request;
        // console.log(user);
        return prisma.$subscribe.message({
          AND: [
            {mutation_in: "CREATED"},
            {
              node: {
                AND: [/*{to: {id: user.id}},*/ {chatRoom: {id: chatId}}]
              }
            }
          ]
        });
      }
    }
  }
};
