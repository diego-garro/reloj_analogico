
const deg = 6

const hor = document.querySelector("#hours-man")
const min = document.querySelector("#minutes-man")
const sec = document.querySelector("#seconds-man")

setInterval(() => {
    let day = new Date()
    let h = day.getHours() * 30
    let m = day.getMinutes() * deg
    let s = day.getSeconds() * deg

    hor.style.transform = `rotateZ(${h + (m/12) - 180}deg)`
    min.style.transform = `rotateZ(${m - 180}deg)`
    sec.style.transform = `rotateZ(${s - 180}deg)`
})