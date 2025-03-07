import mongoose from "mongoose";

const AttractionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Attraction = mongoose.model("Attraction", AttractionSchema);

export default Attraction;
