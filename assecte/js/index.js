//left-aside 的li切换
let active = 0;//保存上一次被点击的下标
const list = document.querySelectorAll('.self-info > ul > li')
list.forEach((item,index) => {
    item.addEventListener('click',() => {
        list[active].classList.toggle('active')
        active = index;
        list[active].classList.toggle('active')
    })
});