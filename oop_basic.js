const marek = createNewPerson('marek');
marek.name;
marek.greeting();



function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}
