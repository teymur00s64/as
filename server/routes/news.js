const express = require("express")
const router = express.Router()
const News = require('../models/news.schema')

router.post("/news", async (req, res)=>{
    try {
        const newsReq = req.body
        const newNews = new News()
        await newNews.save()
        req.statusCode(201).json({messsage: "News created successfully", newNews})
    } catch (error) {
        req.statusCode(500).json({messsage: "News could not be created", error})
    }
})

router.get("/news", async (req, res)=>{
    try {
        const allNews = await News.find().populate("category")
        req.statusCode(201).json(allNews)
    } catch (error) {
        req.statusCode(500).json({messsage: "News could not be fetched", error})
    }
})

router.get("/news/:id", async (req, res)=>{
    try {
        const id = req.params
        const newsById = await News.findById(id)
        req.statusCode(201).json(newsById)
    } catch (error) {
        req.statusCode(500).json({messsage: "News could not be fetched", error})
    }
})

router.delete("/news/:id", async (req, res)=>{
    try {
        const id = req.params
        const newsDeletion = await deleteOne({_id: id}).populate("category")

        if (newsDeletion.deleteCount === 0) {
            res.status(404).json({message: "News not found", error})
        }

        res.json({message: "News deleted successfully"})
    } catch (error) {
        req.statusCode(500).json({messsage: "Failed to delete news", error})
    }
})

module.exports = router;
