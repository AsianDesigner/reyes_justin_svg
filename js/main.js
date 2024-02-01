// this is a javascript file
console.log('javascript is running');

const svg = document.querySelectorAll('svg');
console.log(svg);

function interaction() {
    console.log('user clicked this logo');
}

function logMyId() {
    console.log(this.id);
}

svg.addEventListener('click', interaction);