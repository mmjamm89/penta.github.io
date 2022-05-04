const images = document.querySelectorAll('#img_container img');

let imgSrc;

//get images src onclick

images.forEach ((img) => {
    img.addEventListener ('click', (e) => {        
        imgSrc = e.target.src;        
        imgModal(imgSrc);
    });
});

//creating the modal

let imgModal = (src) => {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    //add the modal to the main section or the parent element
    document.querySelector('#sense').append(modal);
    //adding image to the modal
    const newImage = document.createElement('img');
    newImage.setAttribute('src', src);
    modal.append(newImage);

    //creating the close button
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'fas fa-times closeBtn');
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
}