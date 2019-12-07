var D1 = new Date(),
    D1last = new Date(D1.getFullYear(), D1.getMonth() + 1, 0).getDate(), // ��������� ���� ������
    D1Nlast = new Date(D1.getFullYear(), D1.getMonth(), D1last).getDay(), // ���� ������ ���������� ��� ������
    D1Nfirst = new Date(D1.getFullYear(), D1.getMonth(), 1).getDay(), // ���� ������ ������� ��� ������
    calendar1 = '<tr>',
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // �������� ������, ������ ���� 0-11

// ������ ������ �� ������� ��� �������� ������
if (D1Nfirst != 0) {
    for (var i = 1; i < D1Nfirst; i++) calendar1 += '<td>';
} else { // ���� ������ ���� ������ �������� �� �����������, �� ��������� 7 ������ ������ 
    for (var i = 0; i < 6; i++) calendar1 += '<td>';
}

// ��� ������
for (var i = 1; i <= D1last; i++) {
    if (i != D1.getDate()) {
        calendar1 += '<td>' + i;
    } else {
        calendar1 += '<td id="today">' + i;  // ����������� ���� ����� ������ ����� CSS
    }
    if (new Date(D1.getFullYear(), D1.getMonth(), i).getDay() == 0) {  // ���� ���� �������� �� �����������, �� ������� ������
        calendar1 += '<tr>';
    }
}

// ������ ������ ����� ���������� ��� ������
if (D1Nlast != 0) {
    for (var i = D1Nlast; i < 7; i++) calendar1 += '<td>';
}

document.querySelector('#calendar tbody').innerHTML = calendar1;
document.querySelector('#calendar thead td:last-child').innerHTML = D1.getFullYear();
document.querySelector('#calendar thead td:first-child').innerHTML = month[D1.getMonth()];