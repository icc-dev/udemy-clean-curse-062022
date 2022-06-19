(() => {
  // without single responsability
  type Gender = 'M' | 'F';

  interface IPerson {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  interface IUser extends IPerson {
    email: string;
    role: string;
  }

  interface IUserSetting extends IUser {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Person {
    public birthdate: Date;
    public gender: string;
    public name: string;

    constructor(person: IPerson) {
      this.birthdate = person.birthdate;
      this.gender = person.gender;
      this.name = person.name;
    }
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor(user: IUser) {
      super(user as IPerson);
      this.email = user.email;
      this.lastAccess = new Date();
      this.role = user.role;
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor(setting: IUserSetting) {
      super(setting as IUser);

      this.workingDirectory = setting.workingDirectory;
      this.lastOpenFolder = setting.lastOpenFolder;
    }
  }

  const setting: IUserSetting = {
    birthdate: new Date('1996-01-22'),
    email: 'iancardenas96@gmail.com',
    gender: "M",
    lastOpenFolder: "/homr",
    name: "Ian",
    role: "Admin",
    workingDirectory: "/usr/home",
  }

  const userSettings = new UserSettings(setting);

  console.log({ userSettings });
})();
