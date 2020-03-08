import {prisma} from "../../../generated/prisma-client";

export default {
  Post: {
    isLiked: (parent, _, {request}) => {
      const {id: postId} = parent;
      const {user} = request;
      return prisma.$exists.like({
        AND: [{post: {id: postId}}, {user: {id: user.id}}]
      });
    },
    likeCount: (parent, _) => {
      return prisma
        .likesConnection({
          where: {post: {id: parent.id}}
        })
        .aggregate()
        .count();
    }
  }
};
