const mysql = require('mysql2');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'REPLACE_YOUR_DB_NAME_HERE',
	user : 'REPLACE_YOUR_DB_USERNAME_HERE',
	password : "REPLACE_YOUR_DB_PASSWORD_HERE"
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
