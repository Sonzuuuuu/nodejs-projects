const {CustomAPIError} = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).send({msg: err.message})
    }
    return res.status(err.status || 500).send({msg: err})
}

module.exports = errorHandlerMiddleware