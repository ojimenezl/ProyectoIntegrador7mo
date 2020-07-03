const { Router } = require('express');
const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();
// Models
const Image = require('../models/Image');


router.get('/repositorio', async(req, res) => {
    const images = await Image.find().sort({ date: "desc" }).lean();
    res.render('repositorio', { images });
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async(req, res) => {

    const image = new Image();
    const pyth = require('../ocrnode');
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    console.log("11111");
    pyth.publicar()
    console.log("2222");
    await image.save();



    res.redirect('/repositorio');
});

router.get('/image/:id', async(req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('profile', { image });
});

router.get('/imagedelete/:id', async(req, res) => {
    const { id } = req.params;
    const imageDeleted = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + imageDeleted.path));
    res.redirect('/repositorio');
});

module.exports = router;