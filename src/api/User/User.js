import {prisma} from "../../../generated/prisma-client";

export default {
  User: {
    fullName: (parent) => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: (parent, _, {request}) => {
      const {user} = request;
      const {id: parentId} = parent;
      return prisma.$exists.user({
        AND: [{id: user.id}, {following_some: {id: parentId}}],
      });
    },
    isSelf: (parent, _, {request}) => parent.id === request.user.id,
  },
  followersCount: (parent) => {
    return parent.followers.length;
  },
  followingCount: (parent) => {
    return parent.following.length;
  },
};
