       
class Timers{
       constructor(sec,interval){
              this.sec=1000*sec;
              this.interval=1000*interval;
              this.bloks();

       }
       bloks(){
            this.bigBlock = document.querySelector('#container');
            //час
            this.timeBlock=document.createElement('div');
            this.bigBlock.appendChild(this.timeBlock);
            this.timeBlock.textContent=this.setTime;
            //кнопка
            this.button = document.createElement('button');
            this.bigBlock.appendChild(this.button);
            this.button.textContent='START';
            //лінія
            this.wholeLine=document.createElement('div');
            this.bigBlock.appendChild(this.wholeLine);
            this.wholeLine.classList.add('line');
            ///функція
            this.button.addEventListener('click',this.pressButton.bind(this));
       }
      setTime(sec){
            
             var mins = parseInt(sec / 60);
             var secs = sec % 60;
             this.timeBlock.innerHTML=  parseInt(mins) + ':' + (secs < 10 ? '0' : '') + (secs % 60);
             
             
}
       startTimer(){
              const id = setInterval((interval) => {
                     if (this.sec>0) {
                            this.sec -= interval;
                            const lineSize = this.wholeLine.offsetWidth;
                            const step = lineSize / sec;
                            this.wholeLine.style.width = `${lineSize - step}px`;

                     } else {
                            clearInterval(id)
                     }
                     
              }, interval);
       }

       pressButton(){
              if (this.button.textContent ='START') {
                     this.button.textContent = 'STOP';
                     this.startTimer();
              } else {
                     this.button.textContent ='START';
               
              }
       }
              
       }
const timerFirst = new Timers(800,1)


