import express from 'express';

import serverRenderer from './server-renderer';

const app = express();

app.use('/assets', express.static('./build/assets'));

// Catch all assets that were not found to avoid rendering app for invalid urls
app.all(
  /\.(jsx?|s[ac]ss|png|svg|jpg|jpeg|gif|woff2?|eot|[ot]tf)$/i,
  (req, res) => {
    res.status(404).send('Content was not found!');
  }
);

app.get('*', async (req, res) => {
  try {
    const html = await serverRenderer({ url: req.url });

    res.send(html);
  } catch (error) {
    console.error('Something went wrong: ', error);
    res.status(500).send('Oops, something went wrong. Please try again later.');
  }
});

export default app;
