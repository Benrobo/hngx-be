const request = require("request");

// const API_URL = `http://localhost:8080/api`;
const API_URL = `https://hngx-be2.onrender.com/api`;

test("should create a new person.", function (done) {
  const userName = "John Carma";
  request.post(
    {
      url: `${API_URL}`,
      body: { name: userName },
      json: true,
    },
    (err, httpResponse, body) => {
      const res = body;
      if (err) {
        done(err);
        return;
      }
      if (res?.errorStatus) {
        done(createErr(res?.message));
        return;
      }
      expect(res?.errorStatus).toBe(false);
      done();
    }
  );
});

function createErr(msg) {
  return new Error(msg);
}
