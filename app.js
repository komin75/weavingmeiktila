const linkGroup = document.querySelector('.link-group');
const   btn    = document.querySelector('.nav-btn');


btn.addEventListener ('click', () =>{

    linkGroup.classList.toggle('show-link-group');
    btn.classList.toggle('change');

} )


