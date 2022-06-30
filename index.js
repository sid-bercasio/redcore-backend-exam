require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var multer = require('multer');
var forms = multer();
const blogRoute = require("./routes/blog");
const usersRoute = require("./routes/users");
const checkAuth = require("./middleware/auth-checker")
const path = require('path');
const blogControllers = require("./controllers/blog.controllers");

const app = express();


app.get("/", (req, res)=>{
    res.redirect('/login');
});
app.get("/api", (req, res)=>{
    res.json({
        success: 1,
        message: "rest api connected"
    });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
let upload = multer({ storage: storage });
app.post("/api/upload/:id",upload.single("file"), blogControllers.upload);
app.use('/images', express.static('images'));


app.use(bodyParser.json());
app.use(forms.any()); 


app.use("/api/blog",checkAuth.checkAuth,blogRoute)
app.use("/api/user",usersRoute)




app.get

app.listen(process.env.APP_PORT || 3000, ()=>{
    console.log(`Server up and running at port: ${process.env.APP_PORT}`);
})