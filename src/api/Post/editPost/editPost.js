import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {id, location, caption, action} = args;
      const {user} = request;
      const post = await prisma.$exists.post({id, user: {id: user.id}});
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: {id},
            data: {location, caption}
          });
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    }
  }
};
