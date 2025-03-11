const connectDB = require("./db");
const { Salon } = require("./schema");

const seedDatabase = async () => {
    try {
        console.log("🌍 Connecting to MongoDB...");
        await connectDB();
        console.log("✅ MongoDB Connected!");

        console.log("🗑 Clearing existing data...");
        await Salon.deleteMany({});
        console.log("✅ Data Cleared!");

        const salons = [
            {
                name: "Pall Salon",
                description: "Best Salon in Bangalore for haircuts and styling.",
                location: "Tiripur, Tamil Nadu",
            },
            {
                name: "PK Salon",
                description: "Best Salon in Bangalore for haircuts and styling.",
                location: "Karur, Tamil Nadu",
            },
            {
                name: "Daddy Salon",
                description: "Best Salon in Bangalore for haircuts and styling.",
                location: "Banglore, Karnataka",
            }

        ];

        console.log("📤 Inserting new data...");
        const insertedData = await Salon.insertMany(salons);
        console.log("✅ Inserted Data:", insertedData);

        console.log("🎉 Database Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();