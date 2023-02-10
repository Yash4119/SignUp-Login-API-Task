module.exports = {
    validateRequest: (req, res, next, schema) => {
      // const options = {
      //   abortEarly: false,
      //   allowUnknown: true,
      //   stripUnknown: true,
      // };
      // , options
      const { error, value } = schema.validate(req.body);
  
      if (error) {
        res.status(400).send({
          error: true,
          message: error.details,
        });
      } else {
        req.body = value;
        next();
      }
    },
  };
  