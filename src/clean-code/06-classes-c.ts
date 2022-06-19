(() => {
  // with single responsability

  /**
   * Priorizar la composición frente a la herencia
   * 1.- Evitar los extends, usar solo si es estrictamente necesario
   * 
   * En vez de contar con una clase que extiende de otra y asi
   * susecivamente, se contara con una clase que tenga como 
   * propiedades cada una de las clases que estan involucradas.
   */

  type Gender = 'M' | 'F';

  interface IPerson {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  interface IUser {
    email: string;
    role: string;
  }

  interface ISetting {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  interface IUserSetting {
    person: IPerson;
    user: IUser;
    setting: ISetting;
  }

  class Person {
    public birthdate: Date;
    public gender: string;
    public name: string;

    constructor({birthdate, gender, name}: IPerson) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({email, role}: IUser) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class Setting {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({workingDirectory, lastOpenFolder}: ISetting) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public setting: Setting;

    constructor({person, user, setting}: IUserSetting) {
      this.person = new Person(person);
      this.user = new User(user);
      this.setting = new Setting(setting);
    }
  }


  const setting: IUserSetting = {
    person: {
      birthdate: new Date('1996-01-22'),
      name: "Ian",
      gender: "M",
    },
    user: {
      email: 'iancardenas96@gmail.com',
      role: "Admin",
    },
    setting: {
      lastOpenFolder: "/homr",
      workingDirectory: "/usr/home",
    }
  }

  const userSettings = new UserSettings(setting);
  console.log(userSettings.user.checkCredentials());
  console.log({ ...userSettings });
})();
