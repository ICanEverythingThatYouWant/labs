var variant = prompt("1 - длины трех сторон\n2 - трем углам и стороне\n3-двум сторонам и углу между ними\n4-двум сторонам и необразованному ими углу\n5-высоте треугольника и стороне к которой опущена высота\n")

switch (+variant) {
    case 1: var side1 = +prompt("сторона 1");
        var side2 = +prompt("сторона 2");
        var side3 = +prompt("сторона 3");
        var p = (side1 + side2 + side3)/2;
        alert(Math.sqrt(p*(p-side1)*(p-side2)*(p-side3)));
        break;

    case 2: var angle1 = +prompt("прилегающий угол 1")*0.0174533;
        var angle2 = +prompt("прилегающий угол 2")*0.0174533;
        var angle3 = +prompt("угол 3")*0.0174533;
        var side = +prompt("сторона");

        alert(0.5*(side**2)*Math.sin(angle1)*Math.sin(angle2)/Math.sin(angle3));

    case 3: var side1 = +prompt("сторона 1");
        var side2 = +prompt("сторона 2");
        var angle = +prompt("угол между ними")*0.0174533;

        alert(0.5*side1*side2*Math.sin(angle));

    case 4: var angle = +prompt("угол")*0.0174533;
        var side1 = +prompt("прилежащая к нему сторона");
        var side2 = +prompt("сторона 2 не образующаю этот угол");
        var side3 = side1/Math.cos(angle)

    case 5: var side1 = +prompt("сторона");
        var side2 = +prompt("Высота");

        alert(0.5*side1*side2);
}