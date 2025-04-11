import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Forum.css';

function Forum() {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: 'Woodworking Tips',
      posts: [
        { id: 1, author: 'John', content: 'What’s the best tool for sanding?' },
        { id: 2, author: 'Jane', content: 'I recommend a random orbital sander.' },
      ],
    },
    {
      id: 2,
      title: 'Pottery Questions',
      posts: [{ id: 1, author: 'Alex', content: 'How do you center clay?' }],
    },
  ]);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  const handleAddThread = (e) => {
    e.preventDefault();
    if (!newThreadTitle) return;
    const newThread = {
      id: threads.length + 1,
      title: newThreadTitle,
      posts: [],
    };
    setThreads([...threads, newThread]);
    setNewThreadTitle('');
  };

  const handleAddPost = (e, threadId) => {
    e.preventDefault();
    if (!newPostContent) return;
    const updatedThreads = threads.map((thread) => {
      if (thread.id === threadId) {
        return {
          ...thread,
          posts: [
            ...thread.posts,
            { id: thread.posts.length + 1, author: 'You', content: newPostContent },
          ],
        };
      }
      return thread;
    });
    setThreads(updatedThreads);
    setNewPostContent('');
    setSelectedThreadId(null);
  };

  return (
    <div className="forum">
      <h1>Community Forum</h1>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <div className="threads">
        {threads.map((thread) => (
          <div key={thread.id} className="thread">
            <h2>{thread.title}</h2>
            <div className="posts">
              {thread.posts.map((post) => (
                <div key={post.id} className="post">
                  <p><strong>{post.author}:</strong> {post.content}</p>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => handleAddPost(e, thread.id)}
              className="post-form"
            >
              <input
                type="text"
                value={selectedThreadId === thread.id ? newPostContent : ''}
                onChange={(e) => {
                  setSelectedThreadId(thread.id);
                  setNewPostContent(e.target.value);
                }}
                placeholder="Add a reply..."
                onFocus={() => setSelectedThreadId(thread.id)}
              />
              <button type="submit">Post</button>
            </form>
          </div>
        ))}
      </div>
      <form onSubmit={handleAddThread} className="new-thread-form">
        <h3>Create New Thread</h3>
        <input
          type="text"
          value={newThreadTitle}
          onChange={(e) => setNewThreadTitle(e.target.value)}
          placeholder="Thread title"
          required
        />
        <button type="submit">Add Thread</button>
      </form>
    </div>
  );
}

export default Forum;