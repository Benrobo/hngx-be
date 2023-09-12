const Person = require("../model/person");
const BaseController = require("./base");

class PersonController extends BaseController {
  constructor() {
    super();
  }

  async addUser(req, res) {
    const payload = req.body;

    if (typeof payload?.name === "undefined") {
      this.error(
        res,
        "--person/invalid-fields",
        "Expected a name but found none.",
        400
      );
      return;
    }

    // check if person exists
    const username = payload?.name;
    const person = await Person.find({ name: username });

    if (person.length > 0) {
      this.error(
        res,
        "--person/user-already-exists",
        "User with this name already exists.",
        400
      );
      return;
    }

    // Generate a unique ID for the user.
    const uId = this.uuid(20);

    // Create a new user with the provided name and generated ID.
    await Person.create({
      name: username,
      id: uId,
    });

    // Respond with a success message.
    this.success(res, "--person/success", "User created successfully", 200, {
      id: uId,
      name: username,
    });
  }

  // Get user details by ID or name.
  async getUser(req, res) {
    const userId = req.params["userId"];

    if (typeof userId === "undefined") {
      this.error(res, "--person/invalid-field", "Field is invalid.", 400);
      return;
    }

    // Find and return user details based on ID or name.
    const availableUser = await Person.findOne({
      id: userId,
    });

    if (availableUser === null) {
      this.error(res, "--person/user-notfound", "User doesn't exist.", 404);
      return;
    }

    // Respond with user details.
    this.success(res, "--person/success", "Success", 200, {
      id: availableUser.id,
      name: availableUser.name,
    });
  }

  // Update a user's name by their ID.
  async updateUser(req, res) {
    const userId = req.params["userId"];
    const payload = req.body; // New name provided in the query string ?name=username

    if (typeof userId === "undefined" || typeof payload?.name === "undefined") {
      this.error(res, "--person/invalid-field", "Field is invalid.", 400);
      return;
    }

    // Define the filter to find the user by their ID.
    const filter = {
      $or: [{ id: userId }, { name: payload?.name }],
    };

    // Update the user's name with the new name provided.
    const updatedUser = await Person.findOneAndUpdate(
      filter,
      {
        name: payload?.name,
      },
      {
        new: true, // Return the updated document
      }
    );

    if (!updatedUser) {
      this.error(
        res,
        "--person/user-notfound",
        "Failed to update: User doesn't exist.",
        404
      );
      return;
    }

    // Respond with a success message and updated user details.
    this.success(res, "--person/success", "User updated successfully", 200, {
      id: updatedUser.id,
      name: updatedUser.name,
    });
  }

  // Delete a user by their ID.
  async deleteUser(req, res) {
    const user_id = req.params["userId"];

    if (typeof user_id === "undefined") {
      this.error(res, "--person/invalid-field", "Field is invalid.", 400);
      return;
    }

    // Find and delete the user by their ID.
    const deletedUser = await Person.findOneAndDelete({
      id: user_id,
    });

    if (!deletedUser) {
      this.error(res, "--person/user-notfound", "User doesn't exist.", 404);
      return;
    }

    // Respond with a success message for user deletion.
    this.success(
      res,
      "--person/success",
      "User deleted successfully",
      200,
      null
    );
  }
}

module.exports = PersonController;
