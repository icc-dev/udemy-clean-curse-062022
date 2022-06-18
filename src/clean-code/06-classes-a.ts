(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ){}
  }

  const person = new Person('Ian', 'M', new Date('1996-01-22'));
  console.log({ person });
})();