import path from 'path';

const images = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];

const imagesDir = path.join(__dirname, '../../images/full_images');
const imagesDirOutput = path.join(__dirname, '../../images/thumb_images');

export { images, imagesDir, imagesDirOutput };
