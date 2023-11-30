const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ]);

  const posts = await Post.bulkCreate([
    { title: 'Tech Blog Post 1', content: 'This is the content of the first post.', user_id: users[0].id },
    { title: 'Tech Blog Post 2', content: 'This is the content of the second post.', user_id: users[1].id },
    { title: 'Tech Blog Post 3', content: 'This is the content of the third post.', user_id: users[2].id },
  ]);

  const comments = await Comment.bulkCreate([
    { content: 'Great post!', user_id: users[0].id, post_id: posts[0].id },
    { content: 'Nice insights!', user_id: users[1].id, post_id: posts[0].id },
    { content: 'Looking forward to more!', user_id: users[2].id, post_id: posts[0].id },
  ]);

  process.exit(0);
};

seedDatabase();
