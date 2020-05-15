const express = require('express');
const Resources = require('./resource.js');

const router = express.Router();

router.post('/', (req, res) => {
    const resourceData = req.body;
  
    Resources.add(resourceData)
    .then(reso => {
      res.status(201).json(reso);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });


router.get('/', (req, res) => {
    
    Resources.find()
        .then(reso => {
            res.status(200).json(reso);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get resource list'});
        })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
    Resources.findById(id)
        .then(reso => {
            if(reso){
               res.json(reso) 
            }else{
                res.status(404).json({message: 'Could not find a resource with the specified id'})
            }
        })
        .catch(err => {
            res.status(500).json({message: `Failed to retrieve resource ${id}`})
        })
});

module.exports = router;