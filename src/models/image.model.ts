import path from 'path';
import sharp from 'sharp';
import { imagesDirOutput, imagesDir } from '../constants';

const rsizeImage = async (fName: string, width: number, height: number): Promise<void> => {
  const imagePath: string = path.resolve(imagesDir, `${fName}.jpg`);
  const outputFileName = `${fName}_${width}_${height}.jpg`;
  const thumbImagePath: string = path.resolve(imagesDirOutput, outputFileName);

  await sharp(imagePath)
    .resize(Number(width), Number(height))
    .toFile(thumbImagePath)
    .then(() => thumbImagePath);
};

export default rsizeImage;
