
document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.pop-out').style.display = 'block';
        document.querySelector('.pop-out img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-out span').onclick = () =>{
    document.querySelector('.pop-out').style.display = 'none';
}
