// const { Wave } = require("./wave");

// import { Wave } from './wave.js';
import { WaveGroup } from './wavegroup.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        // this.wave = new Wave();
        this.WaveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        //애니메이션 지정
        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        //레티나에서 잘 보일 수 있게 
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.WaveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t){
        //캔버스 클리어
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);
        this.WaveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}