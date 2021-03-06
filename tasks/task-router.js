const express = require('express');
const Tasks = require('./task.js');

const router = express.Router();

router.post('/', (req, res) => {
    const taskData = req.body;
  
    Tasks.add(taskData)
    .then(tsk => {
      res.status(201).json(tsk);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });


router.get('/', (req, res) => {
    
    Tasks.find()
        .then(pro => {
            res.status(200).json(pro);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get task list'});
        })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
    Tasks.findById(id)
        .then(tsk => {
            if(tsk){
               res.json(tsk) 
            }else{
                res.status(404).json({message: 'Could not find a tasks with the specified id'})
            }
        })
        .catch(err => {
            res.status(500).json({message: `Failed to retrieve tasks ${id}`})
        })
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Tasks.findById(id)
    .then(tsk => {
      if (tsk) {
        Tasks.update(changes, id)
        .then(updatedTask => {
          res.json(updatedTask);
        });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update task' });
    });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Tasks.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete task' });
    });
  });

module.exports = router;