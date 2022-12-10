const { Auth, Product, User } = require("./models");

const auths = [
  {
    name: "Auth Name 1",
    login: "authname1",
    password: "password1",
  },
  {
    name: "Auth Name 2",
    login: "authname2",
    password: "password2",
  },
  {
    name: "Auth Name 3",
    login: "authname3",
    password: "password3",
  },
];

const products = [
  {
    name: "Backpack 1",
    price: 300,
  },
  {
    name: "Backpack 2",
    price: 350,
  },
  {
    name: "Backpack 3",
    price: 400,
  },
];

const users = [
  {
    name: "Username 1",
    email: "username1@email.com",
  },
  {
    name: "Username 2",
    email: "username2@email.com",
  },
  {
    name: "Username 3",
    email: "username3@email.com",
  },
];

const performSeed = async () => {
  const createdShows = await Show.insertMany(shows);
  console.log(`Created ${createdShows.length} shows`);

  createdShows.forEach((show) => {
    const rate = new Rates();
    const dayOfWeek = new Date(show.start).getDay();

    // $1000 for weekend. $500 for weekday.
    rate.perHourRates = dayOfWeek === 6 || dayOfWeek === 0 ? 1000 : 500;

    rate.show = show._id;
    rate.save();
    console.log("Created rates: ", JSON.stringify(rate));
  });

  const createdComedians = await Comedian.insertMany(comedians);
  console.log(`Created ${createdComedians.length} comedians`);
};

performSeed();

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);
