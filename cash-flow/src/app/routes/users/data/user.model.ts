export class User {
  constructor(
    public date: Date,
    public name: string,
    public description: string,
    public userType: number,
    public _id?: string) {
  }
}