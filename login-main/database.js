const mysql = require('mysql2');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'login',
	user : 'root',
	password : "ani28790'"
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('server started..');
	
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;