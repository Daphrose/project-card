document.addEventListener("DOMContentLoaded", () => {
    let previewContainer = document.querySelector('.cups-preview');
    let previewBox = previewContainer.querySelectorAll('.preview');

    document.querySelectorAll('.cups-container .cups').forEach(cups =>{
       cups.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = cups.getAttribute('data-name');
        previewBox.forEach(preview =>{
             let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
       };
    });
    previewBox.forEach(close =>{
        close.querySelector('.close').onclick = () =>{
            close.classList.remove('active');
            previewContainer.style.display = 'none';
        }
    })
});

