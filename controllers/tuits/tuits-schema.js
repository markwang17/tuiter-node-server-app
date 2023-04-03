import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    liked: Boolean,
    disliked: Boolean,
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
}, {collection: 'tuits'});
export default schema;