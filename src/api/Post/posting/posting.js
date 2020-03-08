import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    posting: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {files, caption, location} = args;
      const {user} = request;
      const post = await prisma.createPost({
        user: {
          connect: {
            id: user.id
          }
        },
        caption,
        location
      });
      files.forEach(async file => {
        await prisma.createFile({
          url: file,
          post: {
            connect: {
              id: post.id
            }
          }
        });
      });
      return post;
    }
  }
};
