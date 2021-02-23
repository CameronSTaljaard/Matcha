const sql = require('./api/database/setup');
const app = require('./app');
const PORT = 8081;

sql.setupDB();
app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});