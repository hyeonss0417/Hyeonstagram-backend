import {prisma} from "../../../../generated/prisma-client";
import follow from "../../User/follow/follow";
import {COMMENT_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    seeFeed: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      const following = await prisma.user({id: user.id}).following();
      const posts = await prisma.posts({
        where: {
          user: {id_in: following.map(user => user.id).concat(user.id)}
        },
        orderBy: "createdAt_DESC"
      });
      return posts.map(async post => {
        post["user"] = await prisma.post({id: post.id}).user();
        post["files"] = await prisma.post({id: post.id}).files();
        post["comments"] = await prisma
          .post({id: post.id})
          .comments({first: 2})
          .$fragment(COMMENT_FRAGMENT);
        return post;
      });
    }
  }
};
