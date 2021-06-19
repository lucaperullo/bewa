import express from "express"
import * as chatsController from "./services/groups/groupsController"
import * as usersController from "./services/users/usersController"
import * as contactsController from "./services/contacts/contactsController"
//import { authGuard } from "./auth/authGuard"
import { uploadProfileImg } from "./middleware"
const router = express.Router()

// Endpoints
// user @ Andi
router.post("/user/login", usersController.loginUser) // 									🟢
router.post("/user/register", usersController.registerUser) // 						🟢
router.get("/user", usersController.getUser) // searchBy id? phoneNumber? 🟢
router.put("/user", uploadProfileImg, usersController.updateUser) //     	🟠 needs testing @Andi to finish 🙄😃
router.get("/users", usersController.allUsers)

// contacts @ Luca
router.post("/contact/:userNumber", contactsController.addContact) // 		🟢
router.get("/contacts/:userNumber", contactsController.allContacts) //		🟢
router.get("/contact/:contactNumber", contactsController.getContact) //   🟠
router.put("/contact/:contactNumber", contactsController.updateContact) //⚫
router.delete("/contact/:contactNumber", contactsController.addContact) //⚫

// groups @ Sean
router.get("/groups/:userNumber", chatsController.allGroups) //           🟢
router.get("/group/:id", chatsController.getGroup) //                     ⚫
router.post("/group/:userNumber", chatsController.addGroup) //            🟢
router.put("/group/:id", chatsController.updateGroup) //                  ⚫
router.delete("/chats/:id", chatsController.deleteGroup) //               ⚫

export default router
