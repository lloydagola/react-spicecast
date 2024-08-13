import makeUser from "../entities/user";
import user from "../models/user";

function getUsers() {
  try {
    return user.find();
  } catch (error) {
    console.log("An error ocurred while attempting to fetch the users...");
  }
}
function getUser({ params: { id } }: any) {
  try {
    return user.findById(id);
  } catch (error) {
    console.log("An error ocurred while attempting to fetch the user...");
  }
}
function postUser({ body: { username, email, password } }: any) {
  try {
    const newUser = makeUser({ username, email, password });
    const result = new user({
      username: newUser.getUsername,
      email: newUser.getEmail,
      password: newUser.getPassword,
    });

    return result.save();
  } catch (error) {
    console.log("An error ocurred while attempting to save the user...");
  }
}
function updateUser({ params: { id }, body: { attribute, value } }: any) {
  try {
    const updatedUser = user.findByIdAndUpdate(id, { [attribute]: value });
    if (!updateUser) throw new Error("Unable to update the new user");

    return updatedUser;
  } catch (error) {
    console.log("An error ocurred while attempting to update the user...");
  }
}
function deleteUser({ params: { id } }: any) {
  try {
    const deletedUser = user.findByIdAndDelete(id);
    return deletedUser;
  } catch (error) {
    console.log("An error ocurred while attempting to save the user...");
  }
}

export default Object.freeze({
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
});
