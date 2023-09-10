const Person = require("../model/person");
const BaseController = require("./base");

class PersonController extends BaseController {
  constructor() {
    super();
  }

  async addUser(req, res) {
    const identifier = req.params["name"];

    if (typeof identifier === "undefined") {
      this.error(res, "--person/invalid-fields", "Expected a name but found none.", 400);
      return;
    }

    // check if person exists
    const person = await Person.find({ name: identifier });

    if (person.length > 0) {
      this.error(res, "--person/user-already-exists", "User with this name already exists.", 400);
      return;
    }

    // Generate a unique ID for the user.
    const uId = this.uuid(20);

    // Create a new user with the provided name and generated ID.
    await Person.create({
      name: identifier,
      id: uId
    });

    // Respond with a success message.
    this.success(res, "--person/success", "User created successfully", 200, {
      id: uId,
      name: identifier
    });
  }

  // Get user details by ID or name.
  async getUser(req, res) {
    const identifier = req.params["identifier"];

    if (typeof identifier === "undefined") {
      this.error(res, "--person/invalid-field", "Field is invalid.", 400);
      return;
    }

    // Find and return user details based on ID or name.
    const availableUser = await Person.findOne({
      $or: [
        { id: identifier },
        { name: identifier },
      ],
    });

    if (availableUser === null) {
      this.error(res, "--person/user-notfound", "User doesn't exist.", 404);
      return;
    }

    // Respond with user details.
    this.success(res, "--person/success", "Success", 200, {
      id: availableUser.id,
      name: availableUser.name
    });
  }

  // Update a user's name by their ID.
  async updateUser(req, res) {
    const userId = req.params["userId"];
    const name = req.query["name"]; // New name provided in the query string ?name=username

    if (typeof userId === "undefined" || typeof name === "undefined") {
      this.error(res, "--person/invalid-field", "Field is invalid.", 400);
      return;
    }

    // Define the filter to find the user by their ID.
    const filter = {
      $or: [
        { id: userId },
      ],
    };

    // Update the user's name with the new name provided.
    const updatedUser = await Person.findOneAndUpdate(filter, {
      name: name
    }, {
      new: true, // Return the updated document
    });

    if (!updatedUser) {
      this.error(res, "--person/user-notfound", "Failed to update: User doesn't exist.", 404);
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
    const userId = req.params["userId"];

    if (typeof userId === "undefined") {
      this.error(res, "--person/invalid-field", "Field is invalid.", 400);
      return;
    }

    // Find and delete the user by their ID.
    const deletedUser = await Person.findOneAndDelete({
      id: userId
    });

    if (!deletedUser) {
      this.error(res, "--person/user-notfound", "User doesn't exist.", 404);
      return;
    }

    // Respond with a success message for user deletion.
    this.success(res, "--person/success", "User deleted successfully", 200, null);
  }
}

module.exports = PersonController;
