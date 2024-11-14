const app = require(".");
const {connectDb} = require("./config/db");

// const seed = require('./seed');// Import seeding script

const PORT = process.env.PORT || 5454;

const startServer = async () => {
    try {
        await connectDb();
        
        // await seed();// Seed the database and wait for it to finish

        app.listen(PORT, () => {
            console.log("Server is running on PORT", PORT);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

startServer();
