import { MongoClient,ObjectId} from "mongodb";

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogPosts";

const users = [
  {
    name: "Omer",
    email: "omer@test.com",
    age: 23,
    location: "Zanzibar",
    posts: [],
  },
  {
    name: "Benny",
    email: "benny@test.com",
    age: 29,
    location: "Maldives",
    posts: [],
  },
  {
    name: "Meir",
    email: "meir@test.com",
    age: 38,
    location: "Costa-Rica",
    posts: [],
  },
  {
    name: "Lidor",
    email: "lidor@test.com",
    age: 29,
    location: "Amsterdam",
    posts: [],
  },
  {
    name: "Arel",
    email: "arel@test.com",
    age: 30,
    location: "Porto-Rico",
    posts: [],
  },
];
const posts = [
  {
    authorId: ObjectId("63972ec9b29f5beccd047a5d"),
    content: "This is the 1st post i made!",
    comments: [],
  },
  {
    authorId: ObjectId("63972ec9b29f5beccd047a5e"),
    content: "This is the 1st post i made!, this is much better then his",
    comments: [],
  },
  {
    authorId: ObjectId("63972ec9b29f5beccd047a5f"),
    content: "Fuck this shit, i'll be a stripper!",
    comments: [],
  },
];

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, Client) => {
	if (err) {
		return console.log(err, 'not connect');
	}
	console.log('client running on', Client.s.url);
	const db = Client.db(databaseName);
	// inserting users to blogPosts collection
	//    db.collection("users").insertMany(users, function (err, res) {
	//      if (err) throw err;
	//      console.log("Number of documents inserted: " + res.insertedCount);
	//    });

	//inserting posts to blogPosts collection

	//   db.collection("posts").insertMany(posts, function (err, res) {
	//     if (err) throw err;
	//     console.log("Number of documents inserted: " + res.insertedCount);
	//   });

	//Create comment on a post.
    
	//   db.collection("posts").updateOne(
	//       { _id: ObjectId("63975828fa7519c81a121981") },
	//       { $push: { comments: { writer: "", content: "good to hear" } }, function (err, res) {
	//      if (err) throw err;
	//      console.log("one commend add: " + res.insertedCount);
	//    } }
	//     )
});