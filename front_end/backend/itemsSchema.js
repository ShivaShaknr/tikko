const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema(
    {
        item : String
    },
    {
        collection:"tikkoitem"
    }

);
mongoose.model("tikkoitem",itemsSchema);