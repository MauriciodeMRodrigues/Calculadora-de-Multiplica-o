var teste = ['Mauricio', 'Chico', 'Gabe', 'Ariel'];

function mapNames(list) {
    list.filter((name => {
        return name === 'Mauricio';
    }));
};

console.log(mapNames(teste));

