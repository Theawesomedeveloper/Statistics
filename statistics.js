("use strict");


// WE calling our class stat
class Stat {

    /* ================ MEASURES OF CENTRAL TENDENCY ====================*/

    // 1.  MEAN
    static mean(...numbers){
       const mean =  numbers.reduce(function(a,b){
            return a + b;
        },0)/(numbers.length);

        return mean;
    }

    // 2. MEDIAN
    static median(...numbers){
        // Sorting the numbers in Ascending Order
      numbers.sort( function(a,b){
            return a - b
        });

        if(numbers.length % 2 === 0){
          const median =  (numbers[(numbers.length/2)-1] + numbers[(numbers.length/2)])/ 2;
          return median;
        } else {
           const median  =  numbers[Math.trunc(numbers.length/2)];
           return median;
        }
    }

    // 3. MODE
    static mode(...numbers){
        const frequency = {}
        const modes = [];

        // Counting the number of times each number occured
            numbers.forEach(function(number){
                if(frequency[number]){
                    frequency[number]++;
                } else {
                    frequency[number] = 1;
                }
            });


       const highestOcurrence = Math.max(...Object.values(frequency));
       
    // THis ensures that if there are more than one numbers have same occurence all are returned
       for(const [key, value] of Object.entries(frequency)){
            if(value === highestOcurrence ){
                modes.push(key);
            }
       }

       // this return our output
       return modes.join(", ");

    }



    /* ================ MEASURES OF DISPERSION ====================*/

    // 1. RANGE
    static range(...numbers){
        const range =  Math.max(...numbers) - Math.min(...numbers);
        return range;
    }


    // 2. STANDARD DEVIATION
    static standardDeviation(...numbers){
        /* recall standard deviation is the square root of variance 
        so using the variance method we created in our class*/
        const standardDeviation = Math.sqrt(Stat.variance(...numbers));
        return standardDeviation;
    }



    // 3. QUARTILE DEVIATION
    static quartileDeviation(...numbers){
        
        // Sort numbers in ascending orders
       numbers.sort((a,b) => a - b);

       // Calculating the quartile deviation
       if (numbers.length % 2 === 0){
            const firstQuartile = Stat.median(...numbers.slice(0, numbers.length/2));
            const thirdQuartile = Stat.median(...numbers.slice((numbers.length/2)));
            const quartileDeviation =  (thirdQuartile - firstQuartile)/2;
            return quartileDeviation;
       } else {
        numbers.splice((numbers.length-1)/2,1);
        console.log(numbers);
        
        const firstQuartile = Stat.median(...numbers.slice(0, numbers.length/2));
            const thirdQuartile = Stat.median(...numbers.slice((numbers.length/2)));
            const quartileDeviation =  (thirdQuartile - firstQuartile)/2;
            return quartileDeviation;
       }
    }

    // 4. MEAN DEVIATION
    static meanDeviation(...numbers){

        // making use of the mean method in our stat class
        const mean = Stat.mean(...numbers);
       const meanDeviation = numbers.reduce((a,b) => a + Math.abs(b - mean),0)/numbers.length;
       return meanDeviation;
    }



    static variance(...numbers){   // (num - mean)*(num - mean) / length - 1

        // Calculating the mean using othe Stat.mean method we created earlier
        const mean = Stat.mean(...numbers);
        
        
        const varience =  (numbers.reduce(function(a,b){
            return a + ((b - mean)**2)
        },0)/ (numbers.length-1));

        return varience;
    }
}


// const testData = [1, 4, 6, 1, 8, 15, 18, 1, 5, 1]

// console.log(Stat.mean(...testData));
// console.log(Stat.median(...testData));
// console.log(Stat.mode(1, 4, 6, 1, 8, 15, 18, 1, 5, 1));


// console.log(Stat.range(1, 4, 6, 1, 8, 15, 18, 1, 5, 1));
// console.log(Stat.variance(1, 4, 6, 1, 8, 15, 18, 1, 5, 1));
// console.log(Stat.standardDeviation(...testData));
// console.log(Stat.meanDeviation(1, 4, 6, 1, 8, 15, 18, 1, 5, 1));
// console.log(Stat.quartileDeviation(1, 2, 3, 4, 5, 6, 7, 8, 9 , 10));

