import jwt from 'jsonwebtoken';

function authenticateToken(req,res,next){

    const accessToken = req.cookies.accessToken
    
    // const authHeader = req.headers['authorization']; //Bearer TOKEN
    // const token = authHeader && authHeader.split(' ')[1];

    
    if (accessToken == null) return res.status(401).json({error: "Token nul"});
    
    jwt.verify(tokenACCESS_TOKEN,process.env.ACCESS_TOKEN_SECRET, (error,user) =>{
    
        if(error) return res.status(403).json({ error : error.message });
        req.user = user;
        next();
    })
}

export { authenticateToken };