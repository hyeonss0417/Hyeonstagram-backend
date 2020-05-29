import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      const following = await prisma.user({id: user.id}).following();
      const posts = await prisma.posts({
        where: {
          user: {id_in: following.map((user) => user.id).concat(user.id)},
        },
        orderBy: "createdAt_DESC",
        skip: args.offset,
        first: args.limit,
      });

      return posts;
    },
  },
};
