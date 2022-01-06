var express = require('express');
var router = express.Router();
const formidable = require("formidable");

const cv = require('opencv4nodejs');

const findWaldo = () => {
  
  // const {imread,imshow,imwrite,
  //   waitKey,
  //   COLOR_RGB2GRAY,
  //   COLOR_BGR2GRAY, COLOR_BGR2HSV,COLOR_RGB2YUV,
  //   COLOR_RGB2YCrCb
  // } =require('opencv4nodejs')
  const src = cv.imread('demo2.jpeg')
// const ctvcolor = src.cvtColor(COLOR_RGB2GRAY) /RGB转换为GRAY GRAY是单通道
  const gary = src.cvtColor(cv.COLOR_BGR2GRAY)
  
  cv.imwrite('demo3.jpeg',gary)
// imshow('gary',gary)
// const hsv = src.cvtColor(COLOR_BGR2HSV) //RGB转换为HSV
// imshow('hsv',hsv)
// const yuv = src.cvtColor(COLOR_RGB2YUV) //RGB转换为HSV
// imshow('yuv',yuv)
// const Ycrcb = src.cvtColor(COLOR_RGB2YCrCb) //RGB转换为YCrCb
// imshow('Ycrcb',Ycrcb)
//   cv.waitKey()
};


// noinspection JSIgnoredPromiseFromCall



/* GET home page. */
router.get('/', function(req, res, next) {
    // findWaldo();
  res.render('index', { title: 'Express' });
});

router.post('/changeImage', function(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req,async function(error, fields, files) {
        
        const path = files.image.path
        // const imageName = fields.imageName;
    
        const src = cv.imread(path)
        const gary = src.cvtColor(cv.COLOR_BGR2GRAY)
        cv.imwrite('./public/demo3.jpeg',gary)
    
        const data = {
            'path': path,
            'url': 'demo3.jpeg'
        }
        return 	res.send({data});
    });
});

module.exports = router;
