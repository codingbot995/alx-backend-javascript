class Teacher {
  private _firstName: string;
  private _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  private _additionalAttributes: { [key: string]: any } = {};

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = true;
    this._location = '';
  }

  set fullTimeEmployee(value: boolean) {
    if (this._fullTimeEmployee === undefined) {
      this._fullTimeEmployee = value;
    }
  }

  set yearsOfExperience(value: number | undefined) {
    this._yearsOfExperience = value;
  }

  set location(value: string) {
    if (this._location === undefined) {
      this._location = value;
    }
  }

  setAttribute(attributeName: string, value: any) {
    this._additionalAttributes[attributeName] = value;
  }

  getAttributes(): any {
    return {
      firstName: this._firstName,
      lastName: this._lastName,
      fullTimeEmployee: this._fullTimeEmployee,
      yearsOfExperience: this._yearsOfExperience,
      location: this._location,
      ...this._additionalAttributes,
    };
  }
}
