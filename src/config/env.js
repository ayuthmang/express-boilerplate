import dotenv from 'dotenv';
import path from 'path';
import { isProduction } from './defaults'

dotenv.config({
  path: path.join(__dirname, '../../env', isProduction ? 'production.env' : 'development.env')
});
