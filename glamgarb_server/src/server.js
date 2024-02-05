const app = require(".");
const {connectDb} = require("./config/db");

const PORT = 5454;

// app.listen(PORT, async() => {
//     await connectDb();
//     console.log("PORT", PORT);
// })

const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log("Server is running on PORT", PORT);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

startServer();