function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = Array.from({ length: numRows }, () => "");
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }

    let result = "";
    for (const row of rows) {
        result += row;
    }

    return result;
}

// вот так можно
const input1 = "PAYPALISHIRING";
const numRows1 = 3;
console.log("Input:", input1, "numRows:", numRows1);
console.log("Output:", convert(input1, numRows1));

const input2 = "PAYPALISHIRING";
const numRows2 = 4;
console.log("Input:", input2, "numRows:", numRows2);
console.log("Output:", convert(input2, numRows2));

const input3 = "A";
const numRows3 = 1;
console.log("Input:", input3, "numRows:", numRows3);
console.log("Output:", convert(input3, numRows3));