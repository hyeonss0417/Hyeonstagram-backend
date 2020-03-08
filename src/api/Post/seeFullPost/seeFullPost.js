import {prisma} from "../../../../generated/prisma-client";
import {COMMENT_FRAGMENT, FILE_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const {id} = args;
      const post = await prisma.post({id});
      const files = await prisma
        .post({id})
        .files()
        .$fragment(FILE_FRAGMENT);
      const comments = await prisma
        .post({id})
        .comments()
        .$fragment(COMMENT_FRAGMENT);
      const user = await prisma.post({id}).user();
      return {post, files, comments, user};
    }
  }
};
