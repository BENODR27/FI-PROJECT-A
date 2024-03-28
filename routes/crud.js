
const findAllHandler = (model, modelName,AddRelatedDatas=null) => (req, res) => {
    model.findAll(AddRelatedDatas??{})
      .then(data => {
        let response = {
          status: 200,
          message: `${modelName} fetched successfully`,
          errors: false,
          result: data
        };
        return res.json(response);
      })
      .catch(err => res.status(400).json({ status: 400, message: `Error: ${err.message}` }));
  };
  
  const createHandler = (model, modelName) => (req, res) => {
    const newData = req.body;
    model.create(newData)
      .then(data => {
        let response = {
          status: 200,
          message: `${modelName} created successfully`,
          errors: false,
          result: data
        };
        return res.json(response);
      })
      .catch(error =>{
        if (error.name === 'SequelizeValidationError') {
          // Extract validation errors and send them in the response
          const errors = error.errors.map(err => ({
            field: err.path,
            message: err.message
          }));
          res.status(400).json({ errors });
        } else {
          // Other types of errors (e.g., database error)
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });
  };
  
  const updateHandler = (model, modelName) => (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    model.update(updatedData, { where: { id } })
      .then(() => {
        let response = {
          status: 200,
          message: `${modelName} updated successfully`,
          errors: false
        };
        return res.json(response);
      })
      .catch(err => res.status(400).json({ status: 400, message: `Error: ${err.message}` }));
  };
  
  const deleteHandler = (model, modelName) => (req, res) => {
    const id = req.params.id;
    model.destroy({ where: { id } })
      .then(() => {
        let response = {
          status: 200,
          message: `${modelName} deleted successfully`,
          errors: false
        };
        return res.json(response);
      })
      .catch(err => res.status(400).json({ status: 400, message: `Error: ${err.message}` }));
  };
  
  module.exports = { findAllHandler, createHandler, updateHandler, deleteHandler };
  
  