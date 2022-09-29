// the DOM atau select element HTML
let operasi = document.querySelector(".operasi")
let output = document.querySelector(".hasil-operasi")

// Fungsi saat tombol angka di klik
function numberButton(number){
    if (number === '.' && operasi.value.includes('.')) return
    operasi.value += number
}

// Fungsi saat tombol operasi di klik
function operationButton(operation){
    operasi.value += operation;
}

// Fungsi saat tombol AC di klik
function allClear(){
    operasi.value = ""
    output.value = ""
}

// Fungsi saat tombol C di klik
function del(){
    operasi.value = operasi.value.slice(0,-1)
}

// Fungsi saat tombol persen di klik
function percentButton () {
    output.value = operasi.value/100
    output.value += '%'
}

// // Fungsi saat tombol sama dengan di klik
function equals() {
    last = operasi.value[0,operasi.value.length-1]

    if (last === '.') {
        del()
        output.value += "error"
    }

    if(last === "+" || last === "-" || last === "*" || last === "/" ){   
        del();
    } else {
        hasil = eval(operasi.value)
        output.value = hasil
    }
}