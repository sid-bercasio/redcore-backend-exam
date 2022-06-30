const models = require("../models")
const Validator = require("fastest-validator")
const { Op } = require("sequelize");
var multer = require('multer');

module.exports = {
    index: (req,res) =>{
        const {page,search,category} = req.query;
            var options = {
                where: {
                    [Op.and]: [
                    search && { 'title': { [Op.like]: '%' +  search + '%' } },
                      category && { 'category': { [Op.eq]:  category} },
                    ]
                  },
                limit: 3,
                offset: page ? (page-1)*3 : 0
              };
        
        models.Blogs.findAndCountAll(options).then(result=>{
            res.status(200).json({
                message: "Blog List",
                data:result
            })
        }).catch(err =>{
            res.status(200).json({
                message: "Something went wrong on fetchin all blogs",
                error:err
            })
        })
    },
    create: async(req,res) => {
        const {title, author, details, content,category} = req.body
        const blog = {
            title: title,
            author: author,
            details: details,
            content: content,
            category: category,
            imgUrl: 'https://d1lp72kdku3ux1.cloudfront.net/title_instance/a52/small/398485.jpg',
            created_by: ''
        }

        const schema = {
            title: {type: "string", optional: false, max: "100"},
            author: {type: "string", optional: false, max: "100"},
        }

        const v = new Validator();
        const validationRes = v.validate(blog,schema);

        if(!validationRes){
            return res.status(400).json({
                message: "Validation failed",
                error: validationRes
            })
        }

        models.Blogs.create(blog).then(result => {
            res.status(201).json({
                message: 'Blog created successfully',
                data: result
            })
        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong on creating a blog',
                error: err
            })
        });
    },
    show: (req, res) => {
        const {id} = req.params;

        models.Blogs.findByPk(id).then(result =>{
            if(result){
                res.status(200).json({
                    message: "Fetch success",
                    data: result
                })
            }else{
                res.status(404).json({
                    message: "Blog not found",
                })
            }
        }).catch(err =>{
            res.status(500).json({
                message: "Something went wrong on fetching the blog",
                error: err
            })
        })
    },
    update: (req, res) => {
        const {id} = req.params;
        const blog = req.body;
        const userId = 0;
        Object.keys(blog).forEach(k => (!blog[k] && blog[k] !== undefined) && delete blog[k]);


        
        const schema = {
            title: {type: "string", optional: true, max: "100"},
            author: {type: "string", optional: true, max: "100"},
            price: {type: "number", optional: true},
            stock: {type: "number", optional: true},
        }

        const v = new Validator();
        const validationRes = v.validate(blog,schema);

        if(!validationRes){
            return res.status(400).json({
                message: "Validation failed",
                error: validationRes
            })
        }

        models.Blogs.update(blog,{where:{id:id,createdBy:userId}}).then(result =>{
            if(result){
                res.status(200).json({
                    message: "Fetch success",
                    data: blog
                })
            }else{
                res.status(404).json({
                    message: "Error updating! blog not found",
                })
            }
        }).catch(err =>{
            res.status(500).json({
                message: "Something went wrong updating the blog",
                error: err
            })
        })
    },
    destroy: (req, res) => {
        const {id} = req.params;
        const userId = 0;
        models.Blogs.destroy({where:{id:id}}).then(result =>{
            if(result){
                res.status(200).json({
                    message: "Delete blog success",
                })
            }else{
                res.status(404).json({
                    message: "Error Deleting! blog not found",
                })
            }
        }).catch(err =>{
            res.status(500).json({
                message: "Something went wrong deleting the blog",
                error: err
            })
        })
    },
    upload: (req, res) => {
        const {id} = req.params;
        const path = req.file.path;
        const blog = req.body;
        Object.keys(blog).forEach(k => (!blog[k] && blog[k] !== undefined) && delete blog[k]);
        blog['imgUrl'] = process.env.HOST + ":" + process.env.APP_PORT + "/" + path
        

        models.Blogs.update(blog,{where:{id}}).then(result =>{
            if(result){
                res.send({
                    message: "Upload success",
                    data: blog,
                })
            }else{
                res.status(404).json({
                    message: "Error uploading! blog not found",
                })
            }
        })
    }
}