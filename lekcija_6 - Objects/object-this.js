const person = {
  name: "Jon Snow",
  age: 37,
  isFictional: true,
  pets: ["Ghost"],
  introduction: function () {
    console.log(`Hi, I am ${this.name}`);
  },
}

person.name = "Jon Targaryen";

person.introduction();