//export default는 {}안 씀
import Particle from './particle.js';
// let time = 0;
// function raf(){
//     time++;
//     ctx.clearRect(0, 0, width, height);
//     ctx.fillRect(0, 0+time, 100, 100);
//     window.requestAnimationFrame(raf);
// }
function loadImages(paths, whenLoaded) {
    const imgs = [];
    const imgO = []
    paths.forEach(function (path) {
        const img = new Image();
        img.onload = function () {
            imgs.push(img);
            imgO.push({path,img});
            if (imgs.length === paths.length) whenLoaded(imgO);
        };
        img.src = path;
    });
}
function loadImageWand(paths, whenLoaded) {
    const imgs = [];
    const imgO = []
    paths.forEach(function (path) {
        const img = new Image();
        img.onload = function () {
            imgs.push(img);
            imgO.push({path,img});
            if (imgs.length === paths.length) whenLoaded(imgO);
        };
        img.src = path;
    });
}
class sketch{
    constructor(){
        let canvas = document.createElement('canvas'); 
        // console.log(canvas); 
        this.wrapper = document.querySelector('#wrap');
        this.wrapper.prepend(canvas);
        this.canvas = document.querySelector('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = 0;
        this.canvas.style.top = 0;
        // console.log(this.canvas); 
        this.ctx = this.canvas.getContext('2d');
        //document.body.appendChild(this.canvas);
        
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // window.addEventListener('resize', this.resize.bind(this),false)
        // this.resize();
        //sol#2 resize되는 구역 이상함
        window.addEventListener('resize', () => {
            this.ctx.canvas.width = document.body.clientWidth;
            this.ctx.canvas.height = document.body.clientHeight;
            this.ctx.clearRect(0, 0, this.width, this.height);
            // this.raf();
            // this.mousemove();
        })

        this.time = 0;

        this.particles = [];

        this.mousemove();
        this.raf();
        this.x = 0;
        this.y = 0;

        this.colors =["#e154ed", "#63d62b", "#23b1b6", "ebbd3e","#000"];
        loadImages(["assets/images/cursor/glitter1.png","assets/images/cursor/glitter2.png","assets/images/cursor/glitter3.png","assets/images/cursor/glitter4.png","assets/images/cursor/glitter5.png"],(images)=>{
            console.log(images);
            this.images = images;
            // console.log(images.length-1);
            // this.img = images[Math.floor(Math.random()*(images.length-1))].img;
            // this.raf();
            // this.mousemove();
        
        })
        // loadImageWand(["assets/img/wand.svg"],(images)=>{
        //     console.log(images);
        //     this.imageWand = images;
        //     // console.log(images.length-1);
        //     this.imgWand = images[0];
        //     console.log(this.imgWand);
        // })
        
    }
    resize(){
        this.ctx.canvas.width = this.wrapper.clientWidth;
        this.ctx.canvas.height = this.wrapper.clientHeight;
        this.ctx.clearRect(0, 0, this.width, this.height);

    }
    randomColor(){
        return this.colors[Math.floor(Math.random()*this.colors.length)];
    }
    randomImg(){
        return this.img = this.images[Math.floor(Math.random()*(this.images.length))].img;       
    }

    mousemove(){
        this.canvas.addEventListener('mousemove',(e)=>{
            // console.log(e.clientX, e.clientY);
            // let x = e.clientX;
            // let y = e.clientY;
            let x = e.pageX;
            let y = e.pageY;
            // console.log(x);

            let dx = x -this.x;
            console.log(dx);
            let dy = y -this.y;

            //거리는 가운데일수록 작아지고 바깥일수록 커짐 
            let distCenter = Math.sqrt((x-this.width/2)**2+(y-this.height/2)**2);
            distCenter /= Math.sqrt((this.width/2)**2+(this.height/2)**2);
            //바깥일수록 작아지려면 1에서 자기 자신 빼기
            distCenter -= 1;

            
            
            for(let i = 0; i < 3; i++){
                // let velx = Math.floor((Math.random()-0.5)*3 + dx/5);
                // let vely = Math.floor((Math.random()-0.5)*3 + dy/5);
                let velx = Math.floor((Math.random()-0.5)*3 );
                let vely = Math.floor((Math.random()-0.5)*3 );
                this.particles.push(new Particle(this.randomImg(), x, y, this.randomColor(), velx, vely, distCenter*30,dx));      
            }
            // this.particles.push(new Particle(this.x, this.y, this.randomColor()));
            //기존 x저장
            this.x = x;
            // console.log(this.x);
            this.y = y;
        })
    }

    raf(){
        this.time++;
        // console.log(this.time);
        //캔버스에 있는 rect모두 지우기
        this.ctx.clearRect(0, 0, this.width, this.height);
        // this.ctx.fillRect(this.x, this.y, 100, 100);
        //particle처음부터 끝까지 나타내기 / 클리어 후 다시 반복되면 Particle에서 size는 줄어들음.
        this.particles.forEach((p,i)=>{
            if(p.life>0){
                p.draw(this.ctx);
            }else{
                //life가 -0.1식 되다가 0될 때
               this.particles.slice(i,1);
            }
        })
        //클리어 후 다시 나타나기 반복
        window.requestAnimationFrame(this.raf.bind(this));
    }
}

new sketch();


