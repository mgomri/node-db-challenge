const express = require('express');
const Projects = require('./project.js');

const router = express.Router();

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
    .then(pro => {
      res.status(201).json(pro);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });
router.get('/', (req, res) => {
    
    Projects.find()
        .then(pro => {
            res.status(200).json(pro);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get project list'});
        })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
    Projects.findById(id)
        .then(pro => {
            if(pro){
               res.json(pro) 
            }else{
                res.status(404).json({message: 'Could not find a project with the specified id'})
            }
        })
        .catch(err => {
            res.status(500).json({message: `Failed to retrieve project ${id}`})
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Projects.findById(id)
    .then(pro => {
      if (pro) {
        Projects.update(changes, id)
        .then(updatedProject => {
          res.json(updatedProject);
        });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update project' });
    });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete project' });
    });
  });


module.exports = router;