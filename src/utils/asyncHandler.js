const asyncHandler = (requestHandler) =>{
    (req, res, next) =>{
        Pormise.resolve(requestHandler).catch((err)=> next (err))
    }
}

export {asyncHandler}