import {authRequired} from './validateToken.js'
import { User } from '../models/user.models.js';
import { parse } from 'cookie';
export const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
      const cookies = parse(req.headers.cookie || '');
      const token = cookies[req.cookies];
  
      if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return;
      }
  
      const tokenData = await authRequired(token);
      const userData = await User.findByPk(tokenData.id);
  
      if ([].concat(roles).includes(userData.roll)) {
        next();
      } else {
        res.status(409).json({ error: 'You do not have administrator permission' });
      }
    } catch (error) {
      console.error('Error in checkRoleAuth middleware:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };