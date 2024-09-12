import { Request, Response, NextFunction } from 'express';
import { promises as fspromises } from 'fs';
import path from 'path';
import { imagesDirOutput } from '../constants';

const checkImage = async (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query;
  const fName = `${filename}_${width}_${height}.jpg`;

  try {
    const files = await fspromises.readdir(imagesDirOutput, {
      encoding: 'utf-8',
    });

    if (!files.includes(fName)) {
      console.log('The image does not exist in the thumb_images directory');
      next();
    } else {
      console.log('image already exist in thumb_images directory');
      res.status(200).sendFile(path.join(imagesDirOutput, fName));
    }
  } catch (err) {
    console.log('CHECK file exist faild ' + err);
    res.status(500).send('no such file or directory');
  }
};

export default checkImage;
