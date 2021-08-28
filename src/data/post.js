const POSTS_KEY = 'POSTS'

function createPosts(username, content, imgUrl) {
  const posts = getPosts() === null ? [] : getPosts()
  posts.push({
    id: posts.length + 1,
    author_id: username,
    content: content,
    content_img: imgUrl,
    comments: [],
  })

  localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
}

function getPosts() {
  const data = localStorage.getItem(POSTS_KEY)

  return JSON.parse(data)
}

export { createPosts, getPosts }
