import React from 'react'
import Navbar from './Navbar.jsx'
import CreatePost from "./CreatePost.jsx";
import Post from "./Post.jsx";
import { useState ,useEffect} from "react";
const Home = () => {
  
  const [PostData, setPostData] = useState([
  {
    name: "Hassnain Tariq",
    text: "Hello everyone!",
    date: "8s",
    like: "3.8k",
    comments: "200",
    shares: "500",
    imageUrl: "https://picsum.photos/800/1500",
    profileImage: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Ayesha Khan",
    text: "Check out this amazing sunset!",
    date: "2m",
    like: "1.2k",
    comments: "150",
    shares: "300",
    imageUrl: "",
    profileImage: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Ali Raza",
    text: "",
    date: "10m",
    like: "800",
    comments: "50",
    shares: "100",
    imageUrl: "https://picsum.photos/1500/1600",
    profileImage: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Zainab Malik",
    text: "Enjoying some delicious food!",
    date: "30m",
    like: "2k",
    comments: "75",
    shares: "400",
    imageUrl: "https://picsum.photos/1500/1400",
    profileImage: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Ahmed Farooq",
    text: "Had an amazing day at the beach.",
    date: "1h",
    like: "3k",
    comments: "180",
    shares: "450",
    imageUrl: "",
    profileImage: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Sara Ali",
    text: "",
    date: "3h",
    like: "1.5k",
    comments: "90",
    shares: "230",
    imageUrl: "https://picsum.photos/1200/1500",
    profileImage: "https://i.pravatar.cc/150?img=6"
  },
  {
    name: "Bilal Ahmed",
    text: "Attending a great event today!",
    date: "5h",
    like: "2.8k",
    comments: "200",
    shares: "600",
    imageUrl: "https://picsum.photos/1000/1200",
    profileImage: "https://i.pravatar.cc/150?img=7"
  },
  {
    name: "Fatima Zahra",
    text: "hi",
    date: "1d",
    like: "5k",
    comments: "300",
    shares: "1k",
    imageUrl: "",
    profileImage: "https://i.pravatar.cc/150?img=8"
  }
]);
  
  const [loading, setLoading] = useState(false);

   // Function to add more posts when user scrolls to the bottom
  const loadMorePosts = () => {
    setLoading(true);

    // Simulate an API call or fetching more posts
    setTimeout(() => {
      const morePosts = [
        {
          name: "New User",
          text: "New post added!",
          date: "just now",
          like: "1k",
          comments: "100",
          shares: "50",
          imageUrl: "https://picsum.photos/900/1200",
          profileImage: "https://i.pravatar.cc/150?img=9"
        },
        {
          name: "Another User",
          text: "Another new post!",
          date: "1m",
          like: "500",
          comments: "25",
          shares: "10",
          imageUrl: "",
          profileImage: "https://i.pravatar.cc/150?img=10"
        }
      ];
      
      // Add more posts to the existing state
      setPostData((prevPostData) => [...prevPostData, ...morePosts]);
      setLoading(false);
    }, 1500); // Simulate a delay (API call time)
  };

  // Detect scroll to bottom
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);
 
    
  return (
  
  
  
  
    <div>

       <CreatePost/>
       {PostData.map((post)=>{
         
              return (   <Post  name={post.name}  text={post.text}  date={post.date}   like={post.like} comments={post.comments} shares={post.shares} imageUrl={post.imageUrl} profileImage={post.profileImage} /> )
       })}


              
       
    </div>
  )
}

export default Home