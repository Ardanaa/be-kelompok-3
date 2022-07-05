const usersRepository = require("../usersRepository");


// ------------------------- Testing Handle Get All Users ------------------------- //

describe("get all users", () => {
    it("should create post to db", async () => {
      // Create Data
        const userToCreate = {
            id: 1,
            name: "pukrul",
            email: "pukrul2012@gmail.com",
            password: "pukrul2012"
        };

        const createdUser = await usersRepository.createNewUser(userToCreate);
    
        const user = await usersRepository.handleGetAllUsers(createdUser);
    
        expect(user.name).toEqual(createdUser.name);
        expect(user.email).toEqual(createdUser.email);
        expect(user.password).toEqual(createdUser.password);
    
        // Delete Test Data
        await usersRepository.deleteById({ id: createdUser.id });
    });
});

// ------------------------- End Testing Handle Get All Users ------------------------- //