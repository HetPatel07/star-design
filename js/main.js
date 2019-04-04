var i = 0;

var a =
    screen.height;
var b =
    screen.width;


console.log(a);

for (i = 0; i < 10; i++) {
    for (j = 1; j <= i; j++) {
        document.write('# \t');
        //        document.write('* \t');
    }
    for (k = 10 - 1; k > i; k--) {
        document.write('* \t');
        //        document.write('* \t');
    }
    document.write("<br>");
}
