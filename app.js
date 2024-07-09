const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content")
function pageTranstions() {
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            //currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
            //this.className += 'active-btn';
        })
    }
    //section active calass
   allSections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id){
            //remove selected from the other btn
            let i=0;
            sectBtn.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element=document.getElementById(id)
            element.classList.add("active")
        }
    })
}

pageTranstions()