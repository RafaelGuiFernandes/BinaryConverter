var type = 'bd';
//
function BinaryToDecimal( value ){
    let decimal = 0;
    let power = 1;
    for (let i = value.length - 1; i >= 0; i--) {
      if (binary[i] === "1") {
        decimal += power;
      }
      power *= 2;
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
document.addEventListener("DOMContentLoaded" , () =>{
  const submitBtn = document.getElementById("submit");
  const input= document.getElementById("input")

  // listen for user submit
  const value= input.value
  submitBtn.addEventListener('click' , () => {
    switch( type ){
      case "bd":
        console.log( DecimalToBinary(value));
      break;
      case "db":
        console.log("decimal para binario");
      break;
      case "dh":
        console.log("decimal para hexadecimal");
      break;
      case "hd":
        console.log("hexadecimal para decimal");
      break;
    }
  });
});
