export class Mobile {
    public name:string
    public model:string
    public trademark:string
    public sdSize:number
    public color:string
    public is5G:boolean
    public camaraNumber:number
    public price:number
    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,
     is5h:boolean,camaraNumber:number,price:number){
         this.name = name;
         this.model = model;
         this.trademark = trademark;
         this.sdSize = sdSize;
         this.color = color;
         this.is5G = is5h;
         this.camaraNumber = camaraNumber;
         this.price = price;
     }
     public getName(){
         this.name = name
     }
    
}