const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    heading: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    category: { type: String, enum: ["FOOD", "HEALTH", "EDUCATION", "TRAVEL", "FITNESS", "ENTERTAINMENT", "WORLD"], default: "WORLD", required: true },
    image: { type: String, required: true },
    likes: { type: Number, required: true, default: 0 },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    likedBy: { type: [mongoose.Types.ObjectId], }
}, { timestamps: true })

const Story = mongoose.model("Story", storySchema)
module.exports = Story