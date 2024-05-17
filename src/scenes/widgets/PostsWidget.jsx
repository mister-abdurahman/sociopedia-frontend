import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import Loader from "components/Loader";

const PostsWidget = ({ userId, isProfile = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    // const response = await fetch("http://localhost:3001/posts", {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://social-app-server.onrender.com/posts",
        {
          // const response = await fetch("https://relaxed-scone-3e19fa.netlify.app/posts", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserPosts = async () => {
    setIsLoading(true);
    const response = await fetch(
      // `http://localhost:3001/posts/${userId}/posts`,
      `https://social-app-server.onrender.com/posts/${userId}/posts`,
      // `https://relaxed-scone-3e19fa.netlify.app/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {posts?.map(
            ({
              _id,
              userId,
              firstName,
              lastName,
              description,
              location,
              picturePath,
              userPicturePath,
              likes,
              comments,
            }) => (
              <PostWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                name={`${firstName} ${lastName}`}
                description={description}
                location={location}
                picturePath={picturePath}
                userPicturePath={userPicturePath}
                likes={likes}
                comments={comments}
              />
            )
          )}
        </>
      )}
    </>
  );
};

export default PostsWidget;
