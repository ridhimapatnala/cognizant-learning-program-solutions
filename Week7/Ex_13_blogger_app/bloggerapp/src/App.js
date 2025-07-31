import './App.css'; 
const booksData = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
]; 

const blogsData = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

const coursesData = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/20201' },
];

// Book Details Component 
function BookDetails({ books }) {
  
  if (books.length === 0) {
    return <p>No books available.</p>;
  }

  const bookdet = ( 
    <ul>
      {books.map((book) => (
        <div key={book.id}> 
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="st2"> 
      <h1>Book Details</h1>
      {bookdet}
    </div>
  );
}

// Blog Details Component 
function BlogDetails({ blogs }) {
  return (
    <div className="v1"> 
      <h1>Blog Details</h1>
      {blogs.length > 0 ? (
        <div>
          {blogs.map(blog => (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.author}</p>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
}

function CourseDetails({ courses }) {
  let coursedet; // 
  if (courses.length > 0) {
    coursedet = (
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    coursedet = <p>No course details available.</p>;
  }

  return (
    <div className="mystyle1"> 
      <h1>Course Details</h1>
      {coursedet}
    </div>
  );
}

function App() {

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <CourseDetails courses={coursesData} />
      <BookDetails books={booksData} />
      <BlogDetails blogs={blogsData} />
    </div>
  );
}

export default App;