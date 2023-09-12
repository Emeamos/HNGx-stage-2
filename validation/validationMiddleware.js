const  validateStringField = (req, res, next) => {
    const { name } = req.body;
  
    if (typeof name !== 'string') {
      return res.status(400).json({ error: 'Name should be a string' });
    }
  
    next();
  }
  
  export default validateStringField;