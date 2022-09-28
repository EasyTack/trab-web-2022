import app from "./app";
import pool from './dbconfig/dbconnector';


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  pool.connect(function (err, client, done) {
    if (err) throw new Error(err.message);
    console.log('Connected');
  });

  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
