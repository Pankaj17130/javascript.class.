class temperature{
       constructor(){
       this.celsius = 0;
       this.fahrenheite = 32;
   
    }
    get getCelsius(){
        return this.celsius;
    }
    set setCelsius(value) {
        if (typeof value ==='number'){
          this.celsius= value;
          this.fahrenheite = (value *9/5) +32;
        }
        else{
            console.log('invalid input .please provide a number of celsius temperature.');
        }
    }
    get getFahrenheit(){
        return this.fahrenheite;
    }

    set setFahrenheite(value){
        if (typeof value === Number) {
            this.fahrenheite = value;
            this.celsius =(value-32) * 9/5;
        }else{
            console.log('invalid input .please provide a number of fahrenheit temperature.');
        }
         }  
    
}
 const temperatures = new temperature();
 
 console.log(`initial celsius: ${temperature.getCelsius} C`); 
 console.log(`initial fahrenheite: ${temperature.getFahrenheite}F`);
  

 temperature.setCelsius=25;

 console.log(`initial celsius: ${temperature.getCelsius} C`); 
 console.log(`initial fahrenheit: ${temperature.getFahrenheite}F`);
  
 temperature.setFahrenheit=70;
 console.log(`initial celsius: ${temperature.getCelsius} C`); 
 console.log(`initial fahrenheit: ${temperature.getFahrenheite}F`);
  