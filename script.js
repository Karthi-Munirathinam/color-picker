const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {
    const color = ['#'];
    for (let index = 0; index < 6; index++) {
        const selectedhex = hex[Math.floor(Math.random() * hex.length)];
        color.push(selectedhex);
    }
    console.log(color.join(""));
    const colors = document.getElementById('colors');
    colors.innerText = color.join("");
    document.body.style.backgroundColor = color.join("");
}

