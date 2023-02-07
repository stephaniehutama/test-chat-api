describe("POST /Registration", async () => {
  describe("Success", async () => {
    test("should have status code 201", async () => {
      const response = await fetchData().send({ phoneNumber: 08129292929 });
      expect(response.statusCode).toBe(201);
      expect(response.message).toBe("Registered successfully");
    });

    describe("Failed", async () => {
      test("should have the error code and message 400", async () => {
        const response = await fetchData().send({ phoneNumber: 08129292929 });
        expect(response.statusCode).toBe(400);
        expect(response.message).toBe("Registration failed");
      });
    });
  });
});

describe("GET /chats/:userId", async () => {
  describe("Success", async () => {
    test("show all the chats of the logged in user", async () => {
      const response = await fetchData();
      expect(response.statusCode).toBe(200);
    });

    describe("Failed", async () => {
      test("should have the error code and message 400", async () => {
        const response = await fetchData();
        expect(response.statusCode).toBe(400);
        expect(response.message).toBe("Registration failed");
      });
    });
  });
});
