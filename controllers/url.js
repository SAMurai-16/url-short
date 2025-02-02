const shortId = require("shortid");
const URL = require("../models/url");
const express = require("express");


async function GenerateNewShortURL(req,res){
    const body = req.body 
    if(!body.url) return res.status(400).json({error:"url is required"})
    const shortId = shortId();
    await URL.create({
        shortId:shortId,
        RedirectURL:body.url,
        visithistory:[],
    })
    return res.json({id: shortId})

}

module.exports = {
    GenerateNewShortURL,


}