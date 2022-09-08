// Should not signup user with invalid name/email/password
test("Should not signup user with invalid name", async () => {
  await request(app)
    .post("/users")
    .send({
      email: "test@example.com",
      password: "testex1234567",
    })
    .expect(400);
});

test("Should not signup user with invalid email", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "zhraa",
      email: "zhraa@example.com",
      password: "teste1234567",
    })
    .expect(400);
});

test("Should not signup user with invalid password", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "zhraa",
      email: "zhraa@example.com",
      password: "teste1234567",
    })
    .expect(400);
});

// Not update user if unauthenticated
test("Should not update user if unauthenticated", async () => {
  await request(app)
    .patch("/users/me")
    .send({
      name: "Fatema",
    })
    .expect(401);
});

// Should not update user with invalid name/email/password
test("Should not update user with invalid name", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "",
    })
    .expect(400);
});

test("Should not update user with invalid email", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      email: "@example.com",
    })
    .expect(400);
});

test("Should not update user with invalid password", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      password: "fas12345678",
    })
    .expect(400);
});

// Should not delete user if unauthenticated
test("Should not delete account for unauthenticated user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", ``)
    .send()
    .expect(401);
});
