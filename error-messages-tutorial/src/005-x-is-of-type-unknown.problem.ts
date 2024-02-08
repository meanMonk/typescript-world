const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  console.log((error as Error).message);
}


/* 

  1. Can be written as
  
  if(error instanceOf Error ) {
    console.log(error.message);
  } else {
    throw error;
  }
  
  
  2. 
  
  if(typeof error === 'object' && error && 'message' in error ) {
    console.log(error.message);
  } else {
    throw error;
  }
*/