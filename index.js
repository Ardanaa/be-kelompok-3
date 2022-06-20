const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const uploadPictureProducts = require("./utils/fileUpload");
const uploadPictureUsers = require("./utils/fileUploadUsers");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ------------------------- Public File Access ------------------------- //

app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// ------------------------- End Public File Access ------------------------- //



// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");

const usersController = require("./controllers/usersController");

const productsController = require("./controllers/productsController");

// ------------------------- End Import Controllers ------------------------- //



// ------------------------- Import middlewares ------------------------- //
const middleware = require("./middlewares/auth");
// ------------------------- End Import middlewares ------------------------- //



// ------------------------- Define Routes ------------------------- //

// ------------------------- Auth ------------------------- //

app.post("/v1/auth/register", authController.handleRegister);
app.post("/v1/auth/login", authController.handleLogin);

// ------------------------- End Auth ------------------------- //


// ------------------------- User Behavior (complete account info) ------------------------- //

app.put("/v1/users/update/:id", middleware.authenticate, uploadPictureUsers.single("picture"), usersController.handleUpdateUsers);

// ------------------------- End User Behavior ------------------------- //



// ------------------------- Product System ------------------------- //

app.post("/v1/products/create", middleware.authenticate, uploadPictureProducts.fields([{name: "picture"}]), productsController.handleCreateProduct);

// ------------------------- End Product System ------------------------- //

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});