'use string'

class Clock {
    constructor({ template }){
        this.template = template;
    }

    render(){

        const date = new Date();

        const hours = date.getHours();
        if(hours < 10){
            hours = '0' + hours;
        } 

        const mins = date.getMinutes();
        if(mins < 10){
            mins = '0' + mins;
        }

        const secs = date.getSeconds();
        if(secs < 10){
            secs = '0' + secs;
        }

        const output = this.template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

        console.log( output );
    }

    stop() {
      clearInterval(this.timer);
    }


    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// class Clock2 extends Clock {
//     constructor(options){
//     super(options);
//     const {precision = 1000} = options;
//     this.precision = precision;

//     }

//     start(){
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// }

// const options = { precision: 10};
// const { precision=1000 } = options;
// console.log(precision); // 10

// const options = { foo: 'Yay'};
// const { precision=1000 } = options;
// console.log(precision); // 1000

class Clock2 extends Clock {
    constructor({template}, precision = 1000) {
       super({template});

       this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
 }

let myClock = new Clock2({template:'h:m:s'}, 2000);

   myClock.start();
   myClock.stop();