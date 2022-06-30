(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento

  class Person {
    constructor(
      public firstName: string,
      public lastName: string, // <- first change
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  // Change on Person trigger error in super of User
  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string,
      lastName: string, // <- second change
      gender: Gender,
      birthdate: Date
    ) {
      super(firstName, lastName, gender, birthdate); // <- third change, fix super
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string, // <- fourth change
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthdate); // fifth change, fix super
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'fernando@google.com',
    'F',
    'Fernando',
    'Herrera', // New implementation
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
