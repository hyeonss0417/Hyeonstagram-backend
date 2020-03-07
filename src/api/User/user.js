export default {
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    }
  }
};
