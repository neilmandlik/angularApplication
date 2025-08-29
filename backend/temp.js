const fs = require('fs');
const path = require('path');

// Path to clients.json (absolute path so fs can write)
const clientsFilePath = path.join(__dirname, './models/clients.json');

// Example function to read and log clients.json content

function readClientsFile() {
    try {
        const data = fs.readFileSync(clientsFilePath, 'utf8');
        const clients = JSON.parse(data);

        console.log(clients.data.reduce((max,c)=>max=max>c.clientId?max:c.clientId,0))
    } catch (err) {
        console.error('Error reading clients.json:', err);
    }
}

// Call the function to read and log the file content
// readClientsFile();

function test(){
    let arr = [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Jane'    
        },
        {
            id: 3,
            name: 'Doe'    
        }
    ]
    newObj = {
        id: 1,
        name: 'Updated John'
    }
    console.log(arr)
}

test();