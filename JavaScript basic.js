function calculateArea(width, height) {
    while (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        width = prompt("Enter a valid positive number for width:");
        height = prompt("Enter a valid positive number for height:");
        width = parseFloat(width);
        height = parseFloat(height);
    }
    const area = width * height;
    console.log(`The area of the rectangle is: ${area}`);
    return area;
}


calculateArea(5, 3);
