const timer = document.querySelector('.timer')

let time = 60 * 60

const intervalTime = setInterval(() => {
    time -= 60

    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60

    const timeFormat = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    timer.textContent = timeFormat

    if (time === 30 * 60) {
        alert('Залишилось менше половини часу!')
    }

    if (time <= 0) {
        clearInterval(intervalTime)
        timer.textContent = "Час вийшов!"
    }
}, 60000)
