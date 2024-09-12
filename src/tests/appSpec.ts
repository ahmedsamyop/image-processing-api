import supertest from 'supertest';
import { existsSync } from 'fs';
import { promises as fspromises } from 'fs';
import { imagesDirOutput } from '../constants';
import app from '../app';
import validate from '../utilities/validateSchema';
import path from 'path';

const request = supertest(app);

describe('Test Endpoint || validation || Image is Exist', () => {
  // Inputs for testing
  const [filename, width, height] = ['encenadaport', 250, 250];

  // test endpoint / => response status 200
  it('get / ', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  // test endpoint /resize => response status 200
  it('get /resize => Query String', async () => {
    const response = await request.get(
      `/resize?filename=${filename}&width=${width}&height=${height}`
    );
    expect(response.status).toBe(200);
  });

  // test validation input query string object
  it('Check Query String Object is valid', () => {
    const queryObj = { filename, width, height };
    const valid = validate(queryObj);
    expect(valid).toBeTruthy();
  });

  // test frist time run Applaction image not exist
  it('check image exist => Frist Run => should return false', () => {
    expect(existsSync(path.join(imagesDirOutput, `${filename}_${width}_${height}`))).toBeFalsy();
  });

  // test secend time run Applaction image exist
  it('check image exist => secend Run => should return true', async () => {
    const files = await fspromises.readdir(imagesDirOutput, {
      encoding: 'utf-8',
    });
    console.log(files);
    expect(files.includes(`${filename}op_${width}_${height}.jpg`)).toBeTruthy;
  });
});
