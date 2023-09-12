const express = require("express");
const PersonController = require("../controller/person");
const useCatchErrors = require("../error/catchErrors");

class PersonRoute {
  router = express.Router();
  personController = new PersonController();
  path = "/"; // all opereation needs to be performed on /api only without any extensions

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${this.path}`,
      useCatchErrors(this.personController.addUser.bind(this.personController))
    );
    this.router.get(
      `${this.path}:userId`,
      useCatchErrors(this.personController.getUser.bind(this.personController))
    );
    this.router.put(
      `${this.path}:userId`,
      useCatchErrors(
        this.personController.updateUser.bind(this.personController)
      )
    );
    this.router.delete(
      `${this.path}:userId`,
      useCatchErrors(
        this.personController.deleteUser.bind(this.personController)
      )
    );
  }
}

module.exports = PersonRoute;
