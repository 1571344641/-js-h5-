//left-aside 的li切换
let active = 0;//保存上一次被点击的下标
let cards = 0;
const list = document.querySelectorAll('.self-info > ul > li')
//获取右边的四张卡片(项目经验....)
const card = document.querySelectorAll('.self-card')
//遮罩层
const shadle = document.querySelector('.shadle')
//960px响应式
const list_a = document.querySelectorAll('.little-left > nav > ul >li')
//点击左边的列表改变右边的卡片
const handle_click = (item,index) =>{
    item.addEventListener('click', () => {
        //切换小三角
        list[active].classList.toggle('active')
        active = index;
        list[active].classList.toggle('active')
        //切换小三角完
        //card切换和遮罩层定时器
        shadle.style.display = 'block'
        setTimeout(() =>{
            shadle.style.display = 'none'
        },500)
        setTimeout(() =>{
            card[cards].style.display = "none"
            cards = index;
            console.log(index)
            card[cards].style.display = "flex"

        },300)
    } )
}
[].forEach.call(list, handle_click);
[].forEach.call(list_a, handle_click)
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