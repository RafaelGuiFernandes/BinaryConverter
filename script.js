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
    while (decimal > 0) {
      remainder = value % 16;
      hexadecimal = remainder.toString(16) + hexadecimal;
      value = Math.floor(value / 16);
    }
    if (hexadecimal.length === 0) {
      hexadecimal = "0";
    }
    return hexadecimal;
}
