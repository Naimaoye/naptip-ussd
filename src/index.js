import { App } from '@sifrr/server';
import Ussd from './controllers/registerUssd/ussd-menu';

const app = new App();

const port = 3003;


app.get('/', Ussd.registerUssdDetails)
.listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

