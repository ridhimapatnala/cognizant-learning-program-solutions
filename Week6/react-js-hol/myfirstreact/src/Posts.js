import React from 'react';
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    loadPosts() {
        // Logic to load posts
        console.log("Loading posts...");
        // This could be an API call to fetch posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log("Posts loaded:", data);
                // Update state with fetched posts
                this.setState({ posts: data.slice(0, 5) });
            })
            .catch(error => {
                console.error("Error loading posts:", error);
            });
    }
    componentDidMount() {
        this.loadPosts();
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {/* Render posts here */}
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                            <h3>{post.body}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    componentDidCatch(error, info) {
        console.error("Error occurred:", error);
        // Handle error gracefully
    }
}
export default Posts;