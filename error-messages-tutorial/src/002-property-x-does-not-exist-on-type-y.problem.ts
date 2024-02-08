/* 
  can set type as 
  
  const user : Record<string, number | string> {
    
  }

*/

type User = {
  name: string;
  age?: number;
}

const user: User = {
  name: "Matt",
};

user.age = 24;
