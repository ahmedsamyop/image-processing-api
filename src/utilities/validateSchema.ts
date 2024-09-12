import { images } from '../constants';

import Ajv from 'ajv';
const ajv = new Ajv();
const schema = {
  type: 'object',
  properties: {
    filename: { type: 'string', enum: images },
    width: { type: 'integer', maximum: 1100, minimum: 5 },
    height: { type: 'integer', maximum: 1100, minimum: 5 },
  },
  required: ['filename', 'width', 'height'],
  additionalProperties: false,
};
const validate = ajv.compile(schema);

export default validate;
