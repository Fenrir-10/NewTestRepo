// function hex(r,g,b){
//     return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
// }

// function makeColor(r,g,b){
//     const color = {};
//     color.r=r;
//     color.g=g;
//     color.b=b;
//     color.rgb = function(){
//         const {r,g,b} = this;
//         return `rgb(${r},${g},r{b})`;
//     }
//     color.hex = function(){
//         const {r,g,b} = this;
//         return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);    
//     }
//     return color;
// }

// const firstColor = makeColor(34,122,242);
// firstColor.hex()

// function Color(r,g,b){
//     this.r=r;
//     this.g=g;
//     this.b=b;
//     console.log(this);
// }

class Color {
    constructor(r,g,b){
        this.r=r;
        this.g=g;
        this.b=b;
    }
    innerRGB(){
        const {r,g,b}=this;
        return `${r},${g},${b}`;
    }
    rgba(a=1.0){
        return `rgba(${this.innerRGB()},${a})`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);    
    }
}

const c1 = new Color(245,232,123);

rgb(56,54,233) 

 








