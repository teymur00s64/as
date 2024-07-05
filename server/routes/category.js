const express = require("express")
const router = express.Router()
const Category = require('../models/category.schema')

router.post("/category", async (req, res)=>{
    try {
        const categoryReq = req.body
        const newCategory = new Category()
        await newCategory.save()
        req.statusCode(201).json({messsage: "Category created successfully", newNews})
    } catch (error) {
        req.statusCode(500).json({messsage: "Category could not be created", error})
    }
})

router.get("/category", async (req, res)=>{
    try {
        const allCategories = await Category.find()
        req.statusCode(201).json(allCategories)
    } catch (error) {
        req.statusCode(500).json({messsage: "Categories could not be fetched", error})
    }
})

router.get("/category/:id", async (req, res)=>{
    try {
        const id = req.params
        const categoryById = await Category.findById(id)
        req.statusCode(201).json(categoryById)
    } catch (error) {
        req.statusCode(500).json({messsage: "Categories could not be fetched", error})
    }
})

router.delete("/category/:id", async (req, res)=>{
    try {
        const id = req.params
        const categoryDeletion = await deleteOne({_id: id})

        if (categoryDeletion.deleteCount === 0) {
            res.status(404).json({message: "Categories not found", error})
        }

        res.json({message: "Categories deleted successfully"})
    } catch (error) {
        req.statusCode(500).json({messsage: "Failed to delete categories", error})
    }
})

module.exports = router;