db = db.getSiblingDB("api");

db.createUser({
	user: "user",
	pwd: "password",
	roles: [
		{
			role: "readWrite",
			db: "api",
		},
	],
});

db.createCollection("users");

db.users.insertMany([
	{
		username: "Fred",
		email: "fred@test.com",
		password: "password1",
		createdAt: Date.now(),
		active: true,
		__v: 0,
	},
	{
		username: "Daphne",
		email: "daphne@test.com",
		password: "password2",
		createdAt: Date.now(),
		active: true,
		__v: 0,
	},
	{
		username: "Scooby",
		email: "scooby@test.com",
		password: "password3",
		createdAt: Date.now(),
		active: true,
		__v: 0,
	},
]);
