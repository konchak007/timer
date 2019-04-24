       
class Timers{
       constructor(sec,interval,autoStart){
              this.sec=1000*sec;
              this.interval=1000*interval;
              this.autoStart=autoStart;
              this.bloks();
              this.start();

       }
       bloks(){
            this.bigBlock = document.querySelector('#container');
            //час
            this.timeBlock=document.createElement('div');
            this.bigBlock.appendChild(this.timeBlock);
            //кнопка
            this.button = document.createElement('button');
            this.bigBlock.appendChild(this.button);
            this.button.textContent='START';
            //лінія
            this.wholeLine=document.createElement('div');
            this.bigBlock.appendChild(this.wholeLine);
            this.wholeLine.classList.add('line');
           
            
       }
       start(){
              if (this.autoStart===true) {
                     this.button.textContent = 'STOP';
                     this.startTimer();
              } else {
                     this.button.textContent = 'START';
                     this.button.addEventListener('click', this.pressButton.bind(this));
              }
       }
      setTime(){
            
             const minutes = Math.floor(this.sec / 60);
             const seconds = this.sec % 60;
             this.blockTimer.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

             
}
       startTimer(){
              const id = setInterval(() => {
                     if (this.sec>0) {
                            this.sec -= this.interval;
                            const lineSize = this.wholeLine.offsetWidth;
                            const step = lineSize / this.sec;
                            this.wholeLine.style.width = `${lineSize - step}px`;

                     } else {
                            clearInterval(this.id)
                     }
                     
              }, this.interval);
       }

       pressButton(){
              if (this.button.textContent ='START') {
                     this.button.textContent = 'STOP';
                     this.startTimer();
              }else{
                     (this.button.textContent = 'START'); 
                     this.startTimer();
              }
       }
              
       }
const timerFirst = new Timers(80, 1, false)      
const timerSecond = new Timers(50,2,true)



