//Find the number of digits

const Find_Digits = (N) => 
{
	 let count=0;
	 while(N!==0) {
	   N=parseInt(N/10);
	   count++;
	 }
	 return count;
};

//Find the fives

const Find_Five = (N) => 
{
	 let count=0;
	 while(N!==0){
	   r=N%10;
	   N=parseInt(N/10);
	   if(r==5){
	     count++;
	   }
	   
	 }
	 return count;
};

//Find sum

const findSum = (n) => {
    let sum=0;
    for(let i=1;i<=n;i++) {
      if (i%2===0){
        sum=sum+i;
      }
    }
    return sum;
  };

//Find the sum of the digits of a given number

const Number_Sum = (N) => 
{
 let sum=0;
 while (N!==0) {
   let r=N%10;
   N=parseInt(N/10);
   sum=sum+r;
 }
 return sum;
};


//Print the odds

const Print_Odd = (N) => 
{
   console.log(2);
	 for(let i=2;i<=N;i++) {
	   if (i%2!==0) {
	    console.log(i);
	   }
	 }
};

//print the pattern

const Print_pattern = (N) => 
{

let a = "";
for (let i=1; i<=N; i++)
{
  console.log(a=a+"*");
}
};

//Check whether a number is prime or not

const Prime_Check = (N) => 
{
	 for(let i=2;i<N;i++){
	   if(N%i!==0){
	     return "YES";
	   }
	   else {
	     return "NO";
	   }
	 }
	
};

//Print numbers

const printNumbers = (n) => {
    for(let i=1;i<=n;i++){
      console.log(i);
    }
};

//Print the table

const Print_Table = (N) => 
{
	for(let i=1;i<=10;i++){
	  console.log(`${N} * ${i} = ${N*i}`);
	}
};

