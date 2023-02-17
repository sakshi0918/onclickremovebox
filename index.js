const boxes = document.getElementsByClassName('box')
for (const box of boxes) {
    box.addEventListener('click', (event) => {
        event.target.remove();
    });
}
