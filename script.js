       
class Timer{
       constructor(sec,interval,autoStart){
              this.sec=sec;
              this.interval=interval;
              this.autoStart=autoStart;
              this.bloks();
              this.setTime();
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
            //лінія
            this.wholeLine=document.createElement('div');
            this.bigBlock.appendChild(this.wholeLine);
            this.wholeLine.classList.add('line');
            //
            this.button.addEventListener('click', this.changeButtons.bind(this));
           
            
       }
       start(){
              if (this.autoStart) { 
                     this.button.textContent = 'STOP';
                     this.startTimer();
              } else {
                     this.button.textContent = 'START';
                   
              }
              
       }
      setTime(){
            
             const minutes = Math.floor(this.sec / 60);
             const seconds = this.sec % 60;
             this.timeBlock.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
             
}
       minusTime(){
           if (this.sec>0) {
                  this.sec -= this.interval;
                  this.minusLine();
           }else{
                  this.stopTimer();
           }
             this.setTime();
               
       }
       stopTimer(){
              clearInterval(this.id);
       }
       minusLine(){
               const lineSize = this.wholeLine.offsetWidth;
                            const step = lineSize / this.sec;
                            this.wholeLine.style.width = `${lineSize - step}px`;
                            
       }
       startTimer(){
              this.id = setInterval(() => {
                            this.minusTime();
              }, this.interval*1000);
       }
       changeButtons(){
              if (this.button.textContent === 'START') {
                     this.button.textContent ='STOP';
                     this.startTimer();
                
              } else {
                     
                     this.button.textContent ='START';
                     this.stopTimer();
              } 
       }

       
       }
const timerFirst = new Timer(10, 1, false)      
const timerSecond = new Timer(100,2,true)



