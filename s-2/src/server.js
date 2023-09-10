const App = require("./app");
const PersonRoute = require("./routes/person");

const server = new App();
server.initializedRoutes([new PersonRoute()]);
server.listen();
