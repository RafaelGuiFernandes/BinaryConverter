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
