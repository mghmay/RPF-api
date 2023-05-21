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
