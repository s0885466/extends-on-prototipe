
/*
* Создадим функцию конструктор для класса элементов класса Beam
* Создадим методы для Beam
*/

var Beam = function (name, steel, len, square, specificMass ) {
    this.name = name;
    this.steel = steel;
    this.len = len;
    this.square = square;
    this.specificMass = specificMass;
};

Beam.prototype.getDescription = function () {
    return 'Балка: ' + this.name + ', '
        + 'из стали: ' + this.steel + ', '
        + 'длиной: ' + this.len + 'м , '
        + 'площадью поперечного сечения: ' + this.square + 'см², '
        + 'удельной массой 1 м: ' + this.specificMass + 'кг, ';
};

Beam.prototype.getMass = function () {
    return (this.specificMass * this.len).toFixed(1);
};

var beam = new Beam('Балка двутавровая 10Б1', '09Г2С', 6, 10.32, 8.1);
console.log(beam.getDescription());
console.log('Масса балки:', beam.getMass());

/*
* Создадим функцию конструктор для класса элементов класса Channel
* Сделаем класс Channel наследником класса Beam
* Создадим объект класса Channel
* запустим родительские методы класса Beam
*/

var Channel = function (name, steel, len, square, specificMass) {
    this.name = name;
    this.steel = steel;
    this.len = len;
    this.square = square;
    this.specificMass = specificMass;
};

Channel.prototype.__proto__ = Beam.prototype;

var channel = new Channel('Швеллер 12У', 'Ст1пс', 6, 13.3, 10.4);

console.log(channel.getDescription());
console.log('Масса балки:', channel.getMass());







