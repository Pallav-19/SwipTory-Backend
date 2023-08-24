const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    heading: { type: String, trim: true, required: [true, "Heading is required!"] },
    description: { type: String, trim: true, required: [true, "Description is required!"] },
    category: { type: String, enum: ["FOOD", "HEALTH", "EDUCATION", "TRAVEL", "FITNESS", "ENTERTAINMENT", "WORLD"], default: "WORLD", required: [true, "Category is required!"] },
    image: { type: String, required: [true, "Image is required!"] },
    likes: { type: Number, required: [true, "Likes is required!"], default: 0 },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', required: [true, "Created By is required!"] },
    likedBy: { type: [mongoose.Types.ObjectId], ref: 'User' },
    deletedAt: { type: Date, default: null }

}, { timestamps: true })

const Story = mongoose.model("Story", storySchema)
module.exports = Story