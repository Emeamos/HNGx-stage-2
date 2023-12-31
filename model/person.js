import mongoose from "mongoose";

const personSchema = new mongoose.Schema({

    name: {
        type: String,
        // required:[true, "name is needed"]
    },

},
{
    timestamps: true,
    toJSON:{virtuals:true}
});


const Person = mongoose.model('Person', personSchema);

export default Person;