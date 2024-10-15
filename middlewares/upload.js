import multer from "multer";
    import { multerSaveFilesOrg } from "multer-savefilesorg";

    export const localUpload = multer({dest: 'uploads/'});
    // Savefiles codes
    export const remoteUpload = multer({
        storage: multerSaveFilesOrg({
            apiAccessToken: process.env.SAVEFILESORG_API_KEY,
            relativePath: '/todo-api/todos/*'
        }),
        preservePath: true
});


export const userAvartarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/todo-api/users/*'
    }),
    preservePath: true
});

