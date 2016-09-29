function StudentsCollection () {
    var students = [
            new Student('Volyk', 'Anton', 'male', 'tohavolik'),
            new Student('Kopylov', 'Serhii', 'male', 'live:db7bcd884d24eaba'),
            new Student('Husar', 'Liudmyla', 'female', 'blerwoldorf'),
            new Student('Kopylenko', 'Lina', 'female', 'lina7inlove'),
            new Student('Kondzera', 'Maxim', 'male', 'makc___94'),
            new Student('Kliuchyk', 'Evgeny', 'male', 'voitishek')
        ];

    this.forEach = function (iterator) {
        students.forEach(iterator);
    };

    this.remove = function (student) {
        students.splice(students.indexOf(student), 1);
    };
}