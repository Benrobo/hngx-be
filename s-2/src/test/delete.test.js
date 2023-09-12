const request = require("request");

const API_URL = `https://hngx-be2.onrender.com/api`;
// const API_URL = `http://localhost:8080/api`;

test("should delete a person info.", function (done) {
  const userId = "userid";
  request.delete(`${API_URL}/${userId}`, (err, httpResponse, body) => {
    const res = JSON.parse(body);
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
  });
});

function createErr(msg) {
  throw new Error(msg);
}
