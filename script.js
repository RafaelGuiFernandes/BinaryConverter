var type = 'bd';
//
function BinaryToDecimal(value) {
  let decimal = 0;
  let power = 1;
  while (value > 0) {
      let remainder = value % 10;
      if (remainder === 1) {
          decimal += power;
      }
      power *= 2;
      value = Math.floor(value / 10);
  }
  return decimal;
}

//
function DecimalToBinary(value) {
    let binary = "";
    while (value > 0) {
        binary = (value % 2) + binary;
        value = Math.floor(value / 2);
    }
    return binary;
}
//
function decimalToHexadecimal( value ){
    let hexadecimal = "";
    let remainder;
    while (value > 0) {
      remainder = value % 16;
      hexadecimal = remainder.toString(16) + hexadecimal;
      value = Math.floor(value / 16);
    }
    if (hexadecimal.length === 0) {
      hexadecimal = "0";
    }
    return hexadecimal;
}
//
function HexadecimalToDecimal(value) {
    let decimal = 0;
    let power = 1;
    value = value.toString();
    for (let i = value.length - 1; i >= 0; i--) {
        let digit = value[i];
        if (digit >= '0' && digit <= '9') {
            decimal += (digit - '0') * power;
        } else if (digit >= 'A' && digit <= 'F') {
            decimal += (digit.charCodeAt(0) - 'A'.charCodeAt(0) + 10) * power;
        } else if (digit >= 'a' && digit <= 'f') {
            decimal += (digit.charCodeAt(0) - 'a'.charCodeAt(0) + 10) * power;
        }
        power *= 16;
    }
    return decimal;
}

//
function DecimalToOctal(value) {
    let octal = "";
    while (value > 0) {
        octal = (value % 8) + octal;
        value = Math.floor(value / 8);
    }
    return octal;
}
//
function HexadecimalToOctal(value){
    let octal = "";
    let remainder;
    while (value > 0) {
      remainder = value % 16;
      octal = remainder.toString(8) + octal;
      value = Math.floor(value / 16);
    }
    if (octal.length === 0) {
      octal = "0";
    }
    return octal;
}
//
function OctalToHexadecimal(value){
    let hexadecimal = "";
    let remainder;
    while (value > 0) {
      remainder = value % 16;
      hexadecimal = remainder.toString(16) + hexadecimal;
      value = Math.floor(value / 16);
    }
    if (hexadecimal.length === 0) {
      hexadecimal = "0";
    }
    return hexadecimal;
}
//
function OctalToDecimal(value) {
    let decimal = 0;
    let power = 1;
    value = value.toString();
    for (let i = value.length - 1; i >= 0; i--) {
        let digit = value[i];
        if (digit >= '0' && digit <= '7') {
            decimal += (digit - '0') * power;
        }
        power *= 8;
    }
    return decimal;
}

// listen for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit");
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  // listen for user submit
  submitBtn.addEventListener('click', () => {
    processInput();
  });

  // listen for enter key press
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      processInput();
    }
  });

  function processInput() {
    const value = input.value;
    switch (type) {
      case "bd":
        output.value = BinaryToDecimal(value);
        break;
      case "db":
        output.value = DecimalToBinary(value);
        break;
      case "dh":
        output.value = decimalToHexadecimal(value);
        break;
      case "hd":
        output.value = HexadecimalToDecimal(value);
        break;
      case "do":
        output.value = DecimalToOctal(value);
        break;
      case "oh":
        output.value = OctalToHexadecimal(value);
        break;
    }
  }
});

//manter click 
document.addEventListener('DOMContentLoaded', function() {
  var listItems = document.querySelectorAll('.list-group-item');

  listItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Remove a classe 'active' de todos os elementos
          listItems.forEach(function(el) {
              el.classList.remove('active');
          });
          // Adicione a classe 'active' ao elemento clicado
          this.classList.add('active');
      });
  });
});
//

