let arrays = [90, 89, 4, 21, 5];
max = arrays[0], min = arrays[0];
for (let value = 0; value < arrays.length; value++) {
    if (arrays[value] > max) {
        max = arrays[value];
    }
    else if (arrays[value] < min) {
        min = arrays[value];
    }
}
console.log(`maximum value: ${max}`);
console.log(`minimum value: ${min}`);

document.write(`maximum value: ${max}`);
document.write("<br>")
document.write(`minimum value: ${min}`);