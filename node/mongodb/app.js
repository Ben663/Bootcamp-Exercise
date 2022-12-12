// 16.1


//! 1. Create an appropriate schema for a blog.
//? - What collections do you need?
//* I will create 2 collections
//* one for users and one for posts.

//? - How are you going to structure your documents?
//* each user document will include
//* {_id: ObjectId, name: user.name, email: user.email, posts: [postObjectId, postObjectId]}
//* the users will be able to access the posts collection.
//* Each post document will include
//* {authorId: ObjectIdofpost, content:" " ,body: comments []}

//? - Should you embed your data or use references?
//* We shold use references
