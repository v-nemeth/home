const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const parent = document.getElementById("nav-links-parent")
const track = document.getElementById("nav-links")

window.onmousedown = ev => {
    parent.dataset.mouseDownAt = ev.clientX;
}
window.onmouseup = () => {
    parent.dataset.mouseDownAt = "0"

    if(parent.dataset.percentage != null)
        parent.dataset.prevPercentage = parent.dataset.percentage;
}

window.onmousemove = ev => {
    if(parent.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(parent.dataset.mouseDownAt) - ev.clientX, maxDelta = window.innerWidth * 0.8;

    const percentage = (mouseDelta / maxDelta) * -100, nextPercentageNoConstraints = parseFloat(parent.dataset.prevPercentage) + percentage;

    nextPercentage = Math.max(Math.min(nextPercentageNoConstraints,50),-50)

    parent.dataset.percentage = nextPercentage


    track.animate({
        transform: `translate(${nextPercentage}%)`
    }, {duration: 1200, fill:"forwards"});


    for(const image of track.getElementsByClassName("nav-image")) {
        image.animate({
            objectPosition:`${nextPercentage+50}% 50%`
        }, {duration:1200,fill:"forwards"})

    }
}


