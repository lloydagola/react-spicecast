const express = require("express");
const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
    title : {type: String, required: true},
    guests: {type:Array},
    hosts :   [{type:mongoose.Schema.Types.ObjectId, required:true, ref:"Host"}],
    episodes: [{type:mongoose.Schema.Types.ObjectId, ref: 'Episode' }],
    genre:{type:String, default:"TalkShow"},
    tags:{type:Array},
    thumbnail: {type:String, required:true, default:"images/no-image.jpg"},
    playCount: {type:Number, default:0},
    likes : {type:Number, default:0}
});

podcastSchema.methods.findSimilar = function(callback){
    return this.model("Podcast").find({genre:this.genres}, callback)
}

podcastSchema.methods.getEpisodes = function(callback){       
    return this.episodes;
}

module.exports = mongoose.model("Podcast", podcastSchema);