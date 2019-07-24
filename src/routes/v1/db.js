const express = require('express');
      router  = express.Router();
      DBAccessor = require('../../mysql/db_accessor.js');
      
router.get('/test',(req,res) => {
    res.json({
        message:"Hello DB test API",
        ok:true
    });
});

router.get('/search',async (req,res) => {
    try {
        const db = new DBAccessor();
        await db.connect('class');
        console.log('Search ALL Start...');
        rows = await db.searchALL();
        console.log(rows);
        console.log('Search ALL End');
        await db.disconnect();
        res.json({
            rows:rows,
            ok:true
        });
    } catch (err) {
        res.json({
            err:err,
            ok:false
        });
    }
});

router.get('/search/:id',async (req,res) => {
    try {
        const db = new DBAccessor();
        await db.connect('class');
        const targetID = req.params.id
        console.log('Search by ID = ' + targetID + ' Start...');
        rows = await db.searchByID(targetID);
        console.log(rows);
        console.log('Search by ID = ' + targetID + ' End');
        await db.disconnect();
        res.json({
            rows:rows,
            ok:true
        });
    } catch (err) {
        console.log("error!");
        res.json({
            err:err,
            ok:false
        });
    }
});

router.post('/delete',async (req,res) => {
    try {
        const db = new DBAccessor();
        await db.connect('class');
        console.log(req.body);
        const targetID=req.body.id
        console.log('Delete id=' + targetID + ' Start...');
        rows = await db.deleteByID(targetID);
        console.log('Delete End');
        await db.disconnect();
        res.json({
            ok:true
        });
    } catch (err) {
        console.log("error!");
        res.json({
            err:err,
            ok:false
        });
    }
});

router.post('/insert',async (req,res) => {
    try {
        console.log(req.body);
        const db = new DBAccessor();
        await db.connect('class');
        console.log('Insert Start...');
        rows = await db.insert(req.body.data);
        console.log('Insert End');

        await db.disconnect();
        res.json({
            ok:true
        });
    } catch (err) {
        console.log("error!");
        res.json({
            err:err,
            ok:false
        });
    }
});

router.post('/update',async (req,res) => {
    try {

        const db = new DBAccessor();
        await db.connect('class');
        const targetID=req.body.id;
        const targetKey=req.body.key
        const targetNewData=req.body.data;

        // console.log('Update(id=' + targetID + ',key=' + targetKey + ',param=' + targetNewData= + ') Start...');
        rows = await db.updateByID(targetID, targetKey, targetNewData);
        console.log('Update End');
        await db.disconnect();
        res.json({
            ok:true
        });
    } catch (err) {
        console.log("error!");
        res.json({
            err:err,
            ok:false
        });
    }
});
module.exports = router;