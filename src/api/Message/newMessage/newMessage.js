import {prisma} from "../../../../generated/prisma-client";

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        // checkIfAuthenticated(request);
        const {roomId} = args;
        // const {user} = request;
        // console.log(user);(format);
        return prisma.$subscribe
          .message({
            AND: [
              {mutation_in: "CREATED"},
              {
                node: {
                  AND: [/*{to: {id: user.id}},*/ {chatRoom: {id: roomId}}]
                }
              }
            ]
          })
          .node();
      },
      resolve: payload => payload
    }
  }
};
