//Step - 1

const library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
];

// Step - 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true

// Step - 3

const { title: firstBook } = library[0];


// Step - 4

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);