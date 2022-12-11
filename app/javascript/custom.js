const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const parent = document.getElementById("nav-links-parent")
const track = document.getElementById("nav-links")

window.onmousedown = ev => {
    track.dataset.mouseDownAt = ev.clientX;
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"

    if(track.dataset.percentage != null)
        track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = ev => {
    if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - ev.clientX, maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100, nextPercentageNoConstraints = parseFloat(track.dataset.prevPercentage) + percentage;

    nextPercentage = Math.max(Math.min(nextPercentageNoConstraints,100),-100)

    track.dataset.percentage = nextPercentage

    track.style.transform = `translate(${nextPercentage}%)`;
}