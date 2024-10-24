import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.js";
import { userAvartarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js"
// Create router
const userRouter = Router();
// Define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.get('/users/me', getProfile);

userRouter.post('/users/logout', logoutUser);

userRouter.post('/users/me',userAvartarUpload.single('avatar'), updateProfile);

// Export default
export default userRouter;