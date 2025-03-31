const object = {
  counter: 0,
  get magicProperty() {
    return ++this.counter;
  },
  set magicProperty(value) {
    this.counter = value;
    console.log(`${this.getDate()} -- ${this.counter}`);
  },
  getDate() {
    const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const timezoneOffset = -date.getTimezoneOffset() / 60;
    const timezoneString = `GMT${timezoneOffset >= 0 ? "+" : ""}${timezoneOffset.toString().padStart(2, "0")}00 (${
      timezoneOffset >= 0 ? "+" : ""
    }${timezoneOffset.toString().padStart(2, "0")})`;

    let str = `${days[date.getDay()]} ${
      months[date.getMonth()]
    } ${date.getDate()} ${date.getFullYear()} ${hours}:${minutes}:${seconds} ${timezoneString}`;

    return str;
  },
};

object.magicProperty = 5;
console.log(object.magicProperty);
console.log(object.magicProperty);
console.log(object.magicProperty);

//Sat Mar 24 2018 13:48:47 GMT+0300 (+03) -- 5
