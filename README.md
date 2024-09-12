# Image Processing API

Resize images by giving the width, height and file name

## Build and Start Project

To Install all dependencies, run the following command

```bash
  npm install
```

To build, run the following command

```bash
  npm run build
```

To Start developing , run the following command

```bash
  npm run dev
```

To Start Production , run the following command

```bash
  npm start
```

## Testing | esLint | prettier

To test , run the following command

```bash
  npm run test
```

To code formating prettier , run the following command

```bash
  npm run format
```

To eslint , run the following command

```bash
  npm run eslint
```

To eslint fix code , run the following command

```bash
  npm run eslint:fix
```

## Endpoint

`/resize?filename=<filename>&width=<width>&height=<height>`

images Filename: `[encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica]`

```bash
Example: localhost:3000/resize?filename=fjord&width=800&height=600
```
