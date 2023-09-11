const request = require("request");

const API_URL = `https://hngx-be2.onrender.com/api`;

test("should update a person info.", function (done) {
  const updatedName = "Jeff Peterson-updated";
  const userId = "778634057422807d6c6b";
  request.put(
    `${API_URL}/${userId}?name=${updatedName}`,
    (err, httpResponse, body) => {
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
    }
  );
});

function createErr(msg) {
  throw new Error(msg);
}
