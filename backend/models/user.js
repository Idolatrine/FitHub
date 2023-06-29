const db = require('../util/database');

module.exports = class User {
  constructor(name, username, age, email, password) {
    this.name = name;
    this.username = username;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, username, age, email, password) VALUES (?, ?, ?, ?, ?)',
      [user.name, user.username, user.age, user.email, user.password]
    );
  }
};
 