



export const randomNumFromRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const fibonacci = (n: number = randomNumFromRange(0, 30)): number => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};


export const improvedFibonnaci=(n: number = randomNumFromRange(0, 30))=>{

    const fibArray:number[]=[1,1];

    const getValueAtPosition=(position:number):number=>{

        if(position<0)
            return 0;
        if(position == 1 || position == 0)
            return 1;
        
        if(fibArray[position] == null)
            fibArray[position]=getValueAtPosition(position-1)+getValueAtPosition(position-2)
        
        
        return  fibArray[position];

    }

    return getValueAtPosition(n);


}


export const myFibonacci=  (n: number = randomNumFromRange(0, 30)): number => {
    
    const resultArray:number[]=[];
    
    if(n<0)
        return 0;

    if (n === 1 || n===0 ) {
        return 1;
    }
    



    for(let i=2; i<=n; i++)
    {
        resultArray.push(myFibonacci(i - 1) + myFibonacci(i - 2));
        
    }
    
    return resultArray[n-2];
   
};