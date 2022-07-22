import jwt from 'jsonwebtoken';

function jwtTokens({id, username, email}) {
    const user = {id, username, email};

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10min' });
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1h' });

    return ({accessToken,refreshToken});

}

export {jwtTokens};