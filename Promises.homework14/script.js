let MyData = [];

let posts = [
  {
    postID: 1,
    postTitle: "TitleOfPost1",
    postContent: " The content of post1",
  },
  {
    postID: 2,
    postTitle: "TitleOfPost2",
    postContent: " The content of post2",
  },
  {
    postID: 3,
    postTitle: "TitleOfPost3",
    postContent: " The content of post3",
  },
];

let Comments = [
  {
    CommentID: 1,
    commentToPost: 1,
    contentToComment: " The content of Comment1",
  },
  {
    CommentID: 2,
    commentToPost: 1,
    contentToComment: " The content of Comment2",
  },
  {
    CommentID: 3,
    commentToPost: 2,
    contentToComment: " The content of Comment3",
  },
  {
    CommentID: 4,
    commentToPost: 2,
    contentToComment: " The content of Comment4",
  },
  {
    CommentID: 5,
    commentToPost: 3,
    contentToComment: " The content of Comment5",
  },
  {
    CommentID: 6,
    commentToPost: 3,
    contentToComment: " The content of Comment6",
  },
];

let PromiseOfPosts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(posts);
  }, 3000);
});

let PromiseOfComment = new Promise((resolve) => {
  setTimeout(() => {
    resolve(Comments);
  }, 4000);
});

function PushToPost(post) {
  MyData.push(post);
  return post;
}

function PushToComment(comment) {
  MyData.push(comment);
  return comment;
}

PromiseOfPosts.then((response) => PushToPost(response))
  .then(() => PromiseOfComment)
  .then((response) => PushToComment(response))
  .then(() => printToHtml(MyData));

function printToHtml(myData) {
  myData[0].forEach((post) => {
    let newPostDiv = document.createElement("div");
    newPostDiv.setAttribute("id", `post${post.postID}`);
    newPostDiv.setAttribute("class", `postsClass`);
    let newPostTitle = document.createElement("h2");
    newPostTitle.innerHTML = `Post Title: ${post.postTitle}`;
    let newPostContent = document.createElement("p");
    newPostContent.innerHTML = `Post Content: ${post.postContent}`;
    newPostDiv.appendChild(newPostTitle);
    newPostDiv.appendChild(newPostContent);

    myData[1].forEach((comment) => {
      if (post.postID == comment.commentToPost) {
        let newCommentDiv = document.createElement("div");
        newCommentDiv.setAttribute("id", `comment${comment.CommentID}`);
        let newCommentContent = document.createElement("p");
        newCommentContent.innerHTML = `Comment Content: ${comment.contentToComment}`;
        newCommentDiv.appendChild(newCommentContent);
        newPostDiv.appendChild(newCommentDiv);
      }
    });

    document.body.appendChild(newPostDiv);
  });

  console.log(myData);
}
