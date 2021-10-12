const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
console.log(DB);

//Connect the application to the database.
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('DB connection established. Welcome aboard.'));

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: `HBD Reminder: John Smith's Birthday is October 2nd. Call or text him at 631-265-5119.`,
//     from: '+16509999644',
//     to: '+17048854142',
//   })
//   .then((message) => console.log(message.sid));
