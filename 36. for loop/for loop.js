function basicForLoop(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    };
    for(let i = 0; i <= 50; i += 5){
        console.log(i);
    }
};;
basicForLoop();

function labeledForLoop(){
    outerloop: for (let i = 0; i < 5; i++) {
        innerloop: for (let j = 0; j < 5; j++) {
            console.log(`i: ${i}, j: ${j}`);
    
            if (i === 2 && j === 2) {
                // Breaks out of the inner loop labeled 'innerloop'
                console.log('Inner loop closed');
                break innerloop;
            }
    
            if (i === 3 && j === 3) {
                // Breaks out of the outer loop labeled 'outerloop'
                console.log('Inner loop closed');
                break outerloop;
            }
        }
    }    
};
labeledForLoop();