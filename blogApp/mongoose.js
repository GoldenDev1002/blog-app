let mongoose = require("mongoose");
let shopSchema = mongoose.Schema;

let task = new shopSchema({
title: {
    type: String,
    required: true
}
,

blog: {
    type: String,
    required: true
}
}, {timestamp:true});

let shopModel = mongoose.model("product", task);
module.exports = shopModel


