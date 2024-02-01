// this is a javascript file
console.log('javascript is running');

const vectorGraphic = document.querySelector('#logo');

function logThisId() {
    console.log(this);
    console.log('clicked on this icon', this.id);
}

vectorGraphic.addEventListener('click', logThisId);
