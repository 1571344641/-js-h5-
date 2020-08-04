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
//点击显示个人经历动画
const next = document.querySelector('.next')
const back = document.querySelector('.back')
next.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    next.parentElement.classList.remove('self_b')
    back.parentElement.classList.remove('disappear')
    next.parentElement.classList.toggle('self_a')
    back.parentElement.classList.toggle('appear')
}
back.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    back.parentElement.classList.remove('appear')
    back.parentElement.classList.toggle('disappear')
    next.parentElement.classList.toggle('self_b')
    next.parentElement.classList.remove('self_a')




}