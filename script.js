var type = 1;

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
function DecimalToBinary(value) {
    let binary = "";
    while (value > 0) {
        binary = (value % 2) + binary;
        value = Math.floor(value / 2);
    }
    return binary;
}
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
function DecimalToOctal(value) {
    let octal = "";
    while (value > 0) {
        octal = (value % 8) + octal;
        value = Math.floor(value / 8);
    }
    return octal;
}
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

// Update Conversion type
function updateInfo( type1 , type2 ){
  document.getElementById('input').placeholder = "(" + type1 + ")";
  document.querySelectorAll('#t1').forEach((el) => {
    el.textContent = type1;
  });
  document.querySelectorAll('#t2').forEach((el) => {
    el.textContent =type2;
  });
}
function updateTypeValue( value ){
  // update page info
  switch(value){
    case 1:
      updateInfo("Decimal" , "Binary");
      break;
    case 2:
      updateInfo("Binary", "Decimal");
      break;
    case 3:
      updateInfo("Decimal", "Hexadecimal");
      break;
    case 4:
      updateInfo("Hexadecimal","Decimal");
      break;
    case 5:
      updateInfo("Decimal" , "Octal");
      break;
    case 6:
      updateInfo("Octal" , "Decimal");
      break;
    case 7:
      updateInfo("Hexadecimal" , "Octal");
      break;
    case 8:
      updateInfo("Octal" , "Hexadecimal");
      break;
  }
  // update conversion type
  type = value;
}
// handle user input
function processInput() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const value = input.value;
  input.value = '';
  switch (type) {
    case 1:
      output.value = DecimalToBinary(value);
      break;
    case 2:
      output.value = BinaryToDecimal(value);
      break;
    case 3:
      output.value = decimalToHexadecimal(value);
      break;
    case 4:
      output.value = HexadecimalToDecimal(value);
      break;
    case 5:
      output.value = DecimalToOctal(value);
      break;
    case 6:
       output.value = OctalToDecimal(value);
      break;
    case 7:
      output.value = HexadecimalToOctal(value);
      break;
    case 8:
      output.value = OctalToHexadecimal(value);
      break;
  }
}

// ON APP START
// listen for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // define default conversion type
  updateTypeValue(2);

  // listen for conversion type change
  var listItems = document.querySelectorAll('.list-group-item');
  listItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Remove a classe 'active' de todos os elementos
          listItems.forEach(function(el) {
              el.classList.remove('active');
          });
          // Adicione a classe 'active' ao elemento clicado
          this.classList.add('active');

          // atualizar tipo
          console.log( item.value );
          updateTypeValue(item.value);
      });
  });

  // listen for user submit
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener('click', () => {
    processInput();
  });

  //listen for enter key press
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      processInput();
    }
  });

  // listen for swap conversion type
  document.getElementById('swap').addEventListener('click',() => {
    type = type %2 == 0 ? type - 1 : type + 1;
    updateTypeValue( type );
  })
});

