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
function HexadecimalToDecimal(value) {
    let decimal = 0;
    let power = 1;
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
