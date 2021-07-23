const router = require('express').Router();
let items = require('../models/Items.model');
router.route('/').get((req,res) => {
items.find()
.then(item => res.json(item))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const itemname = req.body.itemname;
const ItemID = req.body.ItemID;
const CatalogID = Number(req.body.CatalogID);
const description = req.body.description;
const Color = req.body.Color;
const Dimension = Number(req.body.Dimension);
const Available = Boolean(req.body.Available);
const date = Date.parse(req.body.date);
const newitem = new item({itemname, ItemID, CatalogID, description, Color, Dimension, Available, date });
newitem.save()
.then(() => res.json('Item added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
items.findById(req.params.id)
.then(item => res.json(item))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
items.findByIdAndDelete(req.params.id)
.then(exercise => res.json('item deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
items.findById(req.params.id)
.then(item => {
item.itemname = req.body.itemname;
item.ItemID = req.body.ItemID;
item.CatalogID = Number(req.body.CatalogID);
item.description = req.body.description;
item.Color = req.body.Color;
item.Dimension = Number(req.body.Dimension);
item.Available = Boolean(req.body.Available);
item.date = Date.parse(req.body.date);
newitem.save()
.then(() => res.json('item updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;