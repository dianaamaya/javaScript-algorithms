  // Initial interface
  interface Person {
    name: string;
    surname: string;
    age: number;
    email: string;
    sex: 'F' | 'M';
  }

  // Optional fields
  interface PersonOptional {
    name: string;
    surname: string;
    age?: number;
    email?: string;
    sex?: 'F' | 'M';
  }
    
  type PersonRol = 'admin' | 'developer' | 'tester' | 'analyst';
    
  
  // All fields are optional
  const personPartial: Partial<Person> = {
    email: "email@test.com",
    //other: "other" //No allowed,
  };
    
  // All fields are required
  const personRequired: Required<PersonOptional> = {
    name: "name",
    surname: "surname",
    age: 33,
    email: "email@test.com",    
    sex: "M",
    //other: "other" //No allowed
  };

  // Exclude email from Person interface
  const personNoEmail: Omit<Person, "email"> = {
    name: "name",
    surname: "surname",
    age: 33,
    //email: "email@test.com" //No allowed
    //other: "other" //No allowed
    sex: "M"
  };
    
  // Allow only name and surname
  const personNameSurname: Pick<Person, "name" | "surname"> = {
    name: "name",
    surname: "surname",
    //email: "email@test.com" //No allowed
    //other: "other" //No allowed
  };
  
  // Create an object type
  const personRol: Record<PersonRol, PersonOptional[]> = {
    admin: [{ name: "admin name", surname: "admin surname" }, { name: "admin1 name", surname: "admin1 surname" }],
    developer: [{ name: "developer name", surname: "developer surname" }],
    tester: [{ name: "tester name", surname: "tester surname" }],
    analyst: [{ name: "analyst name", surname: "analyst surname" }],
  };
    
  // Properties of the constructed type cannot be reassigned  
  const PersonReadonly: Readonly<PersonOptional> = { 
    name: "name",
    surname: "surname",
  };  
  // PersonReadonly.name = "other name" //No allowed  

  // Create a type by excluding from UnionType the admin and tester roles
  type PersonExclude = Exclude<PersonRol, "admin" | "tester">;
  let personByRole: PersonExclude = "developer";
  //personByRole = "admin" //No allowed
  //personByRole = "tester" //No allowed
    
  // Create a type by extracting from Type 'admin' and 'other' roles
  type PersonExtract = Extract<PersonRol, "admin" | "other">; //admin
  let personExtract: PersonExtract = "admin" ;
  //personExtract = "developer" //No allowed
  //personExtract = "other" //No allowed
    
  // Exclude null and undefined from Type.  
  type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
  type NamesOnly = NonNullable<AllPossibleGrades>; //'Dave' | 'John'
    
  
  // Get parameters and return values
  const getWorkersByRole = (role: PersonRol, data: Record<PersonRol, PersonOptional[]>): string  => 
    `${data[role].length} worker(s) as ${role}` ;

  console.log(getWorkersByRole('admin', personRol));
    
  // Get workers quantity by role
  type personsQtyByRole = { role: PersonRol, qty: number }
  const getQtyByRole = (data: Record<PersonRol, PersonOptional[]>): personsQtyByRole[]  => {

      const workersByRole:personsQtyByRole[] = [];

      return (Object.keys(data) as (keyof typeof data)[]).reduce((acumulator, current) => {
        acumulator.push({role: current, qty: data[current].length})
        return acumulator
      }, workersByRole);
  } 
   
  console.log(getQtyByRole(personRol))
    
