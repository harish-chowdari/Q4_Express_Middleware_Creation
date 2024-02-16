

module.exports = function logging(req,res,next){
    
    const timestamps = new Date().toISOString()
    const URL = req.originalUrl
    const Method = req.method
    const accessToken = req.headers.authorization || "No access token"

    console.log(`[${timestamps}] ${Method}:${URL}, AccessToken:"${accessToken}"`)
    next() 
}