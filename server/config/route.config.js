//route configuration

import JwtPassport from "passport-jwt";

//Database model
import {UserModel} from "../database/user";

const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;
//allows passsport to extract jwt__payload

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //extracts the token and passes to header to make it illegible
  secretOrKey: "ZomatoApp"
};

export default (passport) => {
  passport.use(
  new JwtStrategy(options, async(jwt__payload, done)=>{
    try {
      const doesUserExist = UserModel.findById(jwt__payload.user);
      if(!doesUserExist) return done(null, false);

      return done(null, doesUserExist);
    } catch (error) {
      throw new Error(error);
    }
  })
);
};
