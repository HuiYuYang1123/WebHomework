window.onload = function() {
    let nav_lists= document.getElementsByClassName('nav-lists')[0];
    let nav_lists1= document.getElementsByClassName('nav-lists')[1];
    let nav_lists2= document.getElementsByClassName('nav-lists')[2];
    let nav_lists3= document.getElementsByClassName('nav-lists')[3];
    let nav_lists4= document.getElementsByClassName('nav-lists')[4];

    nav_lists.onmouseover=function(){
        this.getElementsByTagName('a')[0].style.color = 'red'
    }
    nav_lists.onmouseleave=function(){
        this.getElementsByTagName('a')[0].style.color = '#fff'
    }
    nav_lists1.onmouseover=function(){
        this.getElementsByTagName('a')[0].style.color = 'red'
    }
    nav_lists1.onmouseleave=function(){
        this.getElementsByTagName('a')[0].style.color = '#fff'
    }
    nav_lists2.onmouseover=function(){
        this.getElementsByTagName('a')[0].style.color = 'red'
    }
    nav_lists2.onmouseleave=function(){
        this.getElementsByTagName('a')[0].style.color = '#fff'
    }
    nav_lists3.onmouseover=function(){
        this.getElementsByTagName('a')[0].style.color = 'red'
    }
    nav_lists3.onmouseleave=function(){
        this.getElementsByTagName('a')[0].style.color = '#fff'
    }
    nav_lists4.onmouseover=function(){
        this.getElementsByTagName('a')[0].style.color = 'red'
    }
    nav_lists4.onmouseleave=function(){
        this.getElementsByTagName('a')[0].style.color = '#fff'
    }
    let test= document.getElementById('test');
    test.onclick = function(){
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    benner('#benner', '.nr', '.imga')
    window.setInterval("Systime()", 1000);
    function benner(parent, controller, mod) {

        var num = 0;
        var controller = get(controller);
        var mod = get(mod);
        var benner = get(parent);
        var autoPlayTime = 1500;
        var imgNum = mod.length - 1;
        var auto;

        autoPlay();
        //根据传进来的名字获取这个名字所对应的对象
        function get(name) {
            if (name[0] == '#') {
                return document.getElementById(name.substr(1));
            } else if (name[0] == '.') {
                return document.getElementsByClassName(name.substr(1));
            } else {
                return document.getElementsByTagName(name);
            }
        }

        //实现鼠标划过圆点,变化图片的效果
        //function change(controller, mod){
        //遍历控制器,绑定鼠标划过事件
        for (var i = 0; i < controller.length; i++) {
            //给控制器加个索引,并把i值赋值给索引
            controller[i].index = i;
            //给所有的控制器都加划过事件
            controller[i].onmouseover = function() {
                for (var j = 0; j < controller.length; j++) {
                    //将所有控制器改为默认样式
                    controller[j].className = 'nr';
                }
                //改变所选的控制器样式
                this.className = 'nr active';
                //将模型改为默认样式
                for (var x = 0; x < mod.length; x++) {
                    mod[x].className = 'imga';
                }
                //改变所选控制器对应的模型的样式
                mod[this.index].className = 'imga active';
            }
        }
        //}
        //绑定鼠标移入,暂停播放图片
        benner.onmouseover = function() {
            clearInterval(auto);
        }
        //绑定鼠标离开,继续播放
        benner.onmouseleave = function() {
            autoPlay();
        }
        //指定播放那个图片
        function play(num) {
            for (var j = 0; j < controller.length; j++) {
                controller[j].className = 'nr';
            }
            controller[num].className = 'nr active';
            for (var x = 0; x < mod.length; x++) {
                mod[x].className = 'imga';
            }
            mod[num].className = 'imga active';
        }
        //自动播放
        function autoPlay() {
            auto = setInterval(function() {
                if (num > imgNum) {
                    num = 0;
                }
                play(num);
                num++;
            }, autoPlayTime)
        }
    }

}
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
      case 2:
        return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
      default:
        return 0;
    }
}

var remod=document.getElementsByClassName("remod")[0];
function offerStr(){
    var offerStr=['美食汇,让你品尝不一样的味道！','美食汇,一个美食云集的地方','美食汇,让你学会做各种菜']
     remod.innerText=offerStr[ randomNum(0, 2)];
}
//计时器
var offerTime=setInterval(offerStr,2000);

// 显示时间   
var dates=document.getElementById("dates");
//window.onload = function() {
//
//}
function Systime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var data = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    month = month + 1;
    var arr_week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var week = arr_week[day];
    var time = year + "年-" + month + "月-" + data + "日  " + hour + ":" + minu + ":" + sec;
    dates.innerText ="现在时间是:"+ time;
}
