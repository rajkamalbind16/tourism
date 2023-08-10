import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import axios from 'axios';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [likes, setLikes] = useState(0);
  const [id, setid] = useState();
  const [expanded, setExpanded] = React.useState(false);
  const [feeds, setFeeds] = useState([]);
const userId = localStorage.getItem('userId')
const name = localStorage.getItem('first_name')
  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://travel-cg48.onrender.com/user/post/all');
      console.log(response.data.data); // Log response.data instead of response
      setFeeds(response.data.data); // Assuming the response data is an array of post objects
      // Assuming the response data is an array of post objects
    } catch (error) {
      console.error(error);
    }
  };
  console.log(feeds);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const sendNotification = async (id) => {
    try {
      let obj={
        to: id,
        title: "like added",
        body: `your post liked by ${name}`
      }
      console.log(obj);
      const response1 = await axios.post('https://travel-cg48.onrender.com/notification/add',obj);
      console.log(response1.data,"notification"); 
      
    } catch (error) {
      console.error(error);
    }
  };
  const handleLike = async(post) => {
    if (post.likes[0]?.userId[0]?._id!== userId) {
      // setLikes(likes+1)

      try {
        const response = await axios.post(
          'https://travel-cg48.onrender.com/user/post/like/add',
          {
            userId: userId,
            postId: post._id,
           
          }
        );
  
        console.log(response);
        console.log(response.data.status);
      
        if (response.data.status === true) {
         
          fetchData();
          
          console.log(response.data.message);
          // window.location.reload();
        } else {
          console.log("41")
         
          // window.alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // console.log("50")
        console.log(userId,post)


        const response = await axios.delete(
          'https://travel-cg48.onrender.com/user/post/like/remove',
          {
            data: {
              userId: userId,
              postId: post._id
            }
          }
        );
        
  
        console.log(response);
       
  
        if (response.data.status === true) {
          setLikes(0)
          fetchData();
          // window.alert(response.data.message);
          // window.location.reload();
        } else {
          console.log("109")
          window.alert(response.data.message);
        }
      } catch (error) {
        console.log("70")
        console.error(error);
      }
    }
  };


  console.log(likes,"like");

  return (
    <>
  {Array.isArray(feeds) &&
  feeds.map((feed,key) => (
    <div key={feed._id}>
      
      <Card md={{ maxWidth: 745 }} lg={{ maxWidth: 1200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red', border: 'black' }} aria-label="recipe">
  {feed.userDetails?.[0]?.photo && (
    <img
      src={`http://35.78.201.111:3008/profile_images/${feed.userDetails[0].photo}`}
      alt={feed.userDetails?.[0]?.first_name?.charAt(0).toUpperCase()}
    />
  )}
</Avatar>

          }
          
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${feed.userDetails?.[0]?.first_name} ${feed.userDetails?.[0]?.last_name}`}
        />
        <CardMedia
          component="img"
          height="100%"
          image={`https://travel-cg48.onrender.com/posts/${feed.postUrl}`}
          alt={feed.caption}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {feed.caption}
          </Typography>
        </CardContent>
        <CardActions  disableSpacing>
          <IconButton key={feed._id}  aria-label="add to favorites" onClick={() => {
            handleLike(feed)
            feed.likes[0]?.userId[0]=== userId&& sendNotification(feed.userId)

          }}>
  <FavoriteIcon  style={{ color:feed&& feed?.likes[0]?.userId[0]?._id=== userId? 'red' : 'gray' }} />
</IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>{feed.method}</Typography>
            <Typography>{feed.additionalInfo}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  ))}

</>

  
  );
}




// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// import axios from 'axios';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [likes, setLikes] = useState(0);
//   const [expanded, setExpanded] = React.useState(false);
//   const [feeds, setFeeds] = useState([]);
// const userId = localStorage.getItem('userId')
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://travel-cg48.onrender.com/user/post/all');
//         console.log(response.data.data); // Log response.data instead of response
//         setFeeds(response.data.data); // Assuming the response data is an array of post objects
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(feeds);
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   const handleLike = async (postId) => {
//     console.log(postId);
//         console.log(userId);
//     if (likes === 0) {
//       setLikes(likes + 1);
//       try {
//         console.log("add");
//         const response = await axios.post(
//           'https://travel-cg48.onrender.com/user/post/like/add',
//           {
//             userId: userId,
//             postId: postId,
//           }
//         );
  
//         console.log(response);
//         console.log(response.data.status);
  
//         if (response.data.status === true) {
//           console.log(likes);
//           window.alert(response.data.message);
//           // Refresh the feeds after liking
//           const updatedFeeds = feeds.map((feed) => {
//             if (feed._id === postId) {
//               return { ...feed, likes: [userId] };
//             }
//             return feed;
//           });
//           setFeeds(updatedFeeds);
//         } else {
          
//           window.alert(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       try {
//         console.log("remove");
//         console.log(likes);
//         console.log(userId);
//         console.log(postId);
//         const response = await axios.post(
//           'https://travel-cg48.onrender.com/user/post/like/remove',
//           {
//             userId: userId,
//             postId: postId,
//           }
//         );
//   setLikes(0)
//         console.log(response);
//         console.log(response.data.status);
  
//         if (response.data.status === true) {
//           window.alert(response.data.message);
//           // Refresh the feeds after unliking
//           const updatedFeeds = feeds.map((feed) => {
//             if (feed._id === postId) {
//               return { ...feed, likes: [] };
//             }
//             return feed;
//           });
//           setFeeds(updatedFeeds);
//         } else {
//           window.alert(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };


  

//   return (
//     <>
//   {Array.isArray(feeds) &&
//   feeds.map((feed) => (
//     <div key={feed._id}>
      
//       <Card md={{ maxWidth: 745 }} lg={{ maxWidth: 1200 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: 'red', border: 'black' }} aria-label="recipe">
//               {feed.userDetails?.[0]?.photo ? (
//                 <img src={`http://35.78.201.111:3008/profile_images/${feed.userDetails[0].photo}`} alt="Avatar" />
//               ) : (
//                 feed.userDetails?.[0]?.first_name?.charAt(0).toUpperCase()
//               )}
//               {/* {feed.userDetails?.[0]?.first_name?.charAt(0).toUpperCase()} */}
//             </Avatar>
//           }
          
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={`${feed.userDetails?.[0]?.first_name} ${feed.userDetails?.[0]?.last_name}`}
//         />
//         <CardMedia
//           component="img"
//           height="100%"
//           image={`http://35.78.201.111:3008/posts/${feed.postUrl}`}
//           alt={feed.caption}
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {feed.caption}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites" onClick={() => handleLike(feed._id)}>
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             <Typography paragraph>{feed.method}</Typography>
//             <Typography>{feed.additionalInfo}</Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     </div>
//   ))}

// </>

  
//   );
// }
