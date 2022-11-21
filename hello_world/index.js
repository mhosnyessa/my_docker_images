const  Express  = require('express' );
const  FileSystem = require('fs' ).promises;

const app = Express();

app.get('/', async (request, response) => {
	response.send( await FileSystem.readFile('./home.html', 'utf8' )  );
});


const PORT = process.env.PORT || 8080; 

app.listen(PORT, ()=> console.log(`App availablee on port ${PORT}`)  )