const box = document.querySelector('.box') // обращаемся к эл-ту box

let positionX = 0; //позиция 0
let positionY = 0;

const move = () => {
    if (positionX <= 440 && positionY <= 0) {
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    } else if (positionY === 448 && positionX !== 0) {
        positionX -= 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else {
        positionY -= 16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}
move()