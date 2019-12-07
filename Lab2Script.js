var D1 = new Date(),
    D1last = new Date(D1.getFullYear(), D1.getMonth() + 1, 0).getDate(), // последний день мес€ца
    D1Nlast = new Date(D1.getFullYear(), D1.getMonth(), D1last).getDay(), // день недели последнего дн€ мес€ца
    D1Nfirst = new Date(D1.getFullYear(), D1.getMonth(), 1).getDay(), // день недели первого дн€ мес€ца
    calendar1 = '<tr>',
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // название мес€ца, вместо цифр 0-11

// пустые клетки до первого дн€ текущего мес€ца
if (D1Nfirst != 0) {
    for (var i = 1; i < D1Nfirst; i++) calendar1 += '<td>';
} else { // если первый день мес€ца выпадает на воскресенье, то требуетс€ 7 пустых клеток 
    for (var i = 0; i < 6; i++) calendar1 += '<td>';
}

// дни мес€ца
for (var i = 1; i <= D1last; i++) {
    if (i != D1.getDate()) {
        calendar1 += '<td>' + i;
    } else {
        calendar1 += '<td id="today">' + i;  // сегодн€шней дате можно задать стиль CSS
    }
    if (new Date(D1.getFullYear(), D1.getMonth(), i).getDay() == 0) {  // если день выпадает на воскресенье, то перевод строки
        calendar1 += '<tr>';
    }
}

// пустые клетки после последнего дн€ мес€ца
if (D1Nlast != 0) {
    for (var i = D1Nlast; i < 7; i++) calendar1 += '<td>';
}

document.querySelector('#calendar tbody').innerHTML = calendar1;
document.querySelector('#calendar thead td:last-child').innerHTML = D1.getFullYear();
document.querySelector('#calendar thead td:first-child').innerHTML = month[D1.getMonth()];