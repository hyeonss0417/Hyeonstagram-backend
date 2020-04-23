import {prisma} from "../../../../generated/prisma-client";
import {COMMENT_FRAGMENT, FILE_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const {id} = args;
      const post = await prisma.post({id});
      post["comments"] = await prisma
        .post({id})
        .comments()
        .$fragment(COMMENT_FRAGMENT);
      return post;
    },
  },
};
