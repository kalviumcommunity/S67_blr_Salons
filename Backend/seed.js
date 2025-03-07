const connectDB = require("./db");
const { Attraction } = require("./schema");

const seedDatabase = async () => {
    try {
        console.log("🌍 Connecting to MongoDB...");
        await connectDB();
        console.log("✅ MongoDB Connected!");

        console.log("🗑 Clearing existing data...");
        await Attraction.deleteMany({});
        console.log("✅ Data Cleared!");

        const attractions = [
            {
                name: "Pk Salon",
                description: "Best salon in town",
                location: "Karur, Tamil Nadu",
            },
            {
                name: "Pall Salon",
                description: "Best salon in town",
                location: "Tirupur, Tamil Nadu",
            },
            {
                name: "Daddy Salon",
                description: "Best salon in town",
                location: "shead, Karnataka",
            }
        ];

        console.log("📤 Inserting new data...");
        const insertedData = await Attraction.insertMany(attractions);
        console.log("✅ Inserted Data:", insertedData);

        console.log("🎉 Database Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();