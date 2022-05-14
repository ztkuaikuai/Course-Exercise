window.onscroll = function(){
    // 获取侧边栏对象
    var oDiv = document.getElementsByClassName('sidebar')[0];

    //获取滚动的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    //设置目标位置（最终停在哪里
    //当滚动超过200时，启动脚本 
    if(scrollTop >= 200){
    var target = scrollTop - 200;

    moveHandle(target);
    }
}

//封装运动函数

var timer = null;

function moveHandle(target){
    //避免定时器叠加
    clearInterval(timer);

    //获取操作对象
    var oDiv = document.getElementsByClassName('sidebar')[0];

    //开启定时器
    timer = setInterval(function(){
        //定义速度
        var speed = (target - oDiv.offsetTop);

        //避免除不尽
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        //判断是否到达终点
        if (oDiv.offsetTop == target){
            clearInterval(timer)
        } else {
            oDiv.style.top = oDiv.offsetTop + speed + 'px';
        }
    },30)
}

/*
window.onscroll = function(){
    // 获取侧边栏对象
    var oDiv = document.getElementsByClassName('sidebar')[0];

    //获取滚动的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    //设置目标位置（最终停在哪里        页面滚动的距离+（页面高度-盒子高度）除2
    var target = scrollTop + parseInt((document.documentElement.clientHeight - oDiv.offsetHeight) / 2);

    moveHandle(target);

}

//封装运动函数

var timer = null;

function moveHandle(target){
    //避免定时器叠加
    clearInterval(timer);

    //获取操作对象
    var oDiv = document.getElementsByClassName('sidebar')[0];

    //开启定时器
    timer = setInterval(function(){
        //定义速度，运动速度越接近终点速度越小，正比例
        var speed = (target - oDiv.offsetTop) / 10;

        //避免除不尽
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        //判断是否到达终点
        if (oDiv.offsetTop == target){
            clearInterval(timer)
        } else {
            oDiv.style.top = oDiv.offsetTop + speed + 'px';
        }
    },30)
} */