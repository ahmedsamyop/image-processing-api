import { Request, Response, NextFunction } from 'express';
import validate from '../utilities/validateSchema';

const vaildatorQuery = (req: Request, res: Response, next: NextFunction) => {
  const queryObj = req.query;
  (queryObj.width as unknown as number) = Number(queryObj.width);
  (queryObj.height as unknown as number) = Number(queryObj.height);
  const valid = validate(queryObj);

  if (!valid) {
    const vaildatorErrors = validate.errors;
    let errorMessage;

    console.log(vaildatorErrors);
    vaildatorErrors?.forEach((err) => {
      errorMessage = `Invalid ${err.instancePath.substring(1)} ${err.message}`;
    });
    res.status(365).send(errorMessage);
  } else {
    console.log('validation Successful');
    next();
  }
};

export default vaildatorQuery;
