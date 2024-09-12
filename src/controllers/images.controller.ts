import { Request, Response } from 'express';
import path from 'path';
import { imagesDirOutput } from '../constants';
import rsizeImage from '../models/image.model';

const getRoot = (_req: Request, res: Response) => {
  res.send('<h1> Welcome to the Image Resizing API</h1>');
};

const getResizeImage = (req: Request, res: Response) => {
  const { filename, width, height } = req.query;
  const outputFileName = `${filename}_${width}_${height}.jpg`;
  const thumbImagePath: string = path.resolve(imagesDirOutput, outputFileName);

  rsizeImage(filename as string, width as unknown as number, height as unknown as number)
    .then(() => {
      console.log('Generated Image Successfully');
      res.status(200).sendFile(thumbImagePath);
    })
    .catch((error) => {
      console.log('Sharp: ' + error);
      res.status(500).send('Error: Generated Image Failed');
    });
};

export { getRoot, getResizeImage };
