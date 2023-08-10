import React , {useState}from 'react';
import { FcLike } from 'react-icons/fc';
import { BsWhatsapp,BsInstagram } from 'react-icons/bs';

import { GiCancel } from 'react-icons/gi';
import { FaShareAlt } from 'react-icons/fa';
import Styles from "./comment.module.css"
import axios from "axios"
import { linearProgressClasses } from '@mui/material';

const Photo = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [commentModel, setCommentModel] = useState(false);

  const userId = localStorage.getItem('userId');
console.log(postId)
  const handleLike = async() => {
    if (likes === 0) {
      setLikes(likes+1)
      try {
        const response = await axios.post(
          'https://travel-cg48.onrender.com/user/post/like/add',
          {
            userId: userId,
            postId: postId,
           
          }
        );
  
        console.log(response);
        console.log(response.data.status);
  
        if (response.data.status === true) {
          // console.log("36")
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
        console.log(userId,postId)


        const response = await axios.delete(
          'https://travel-cg48.onrender.com/user/post/like/remove',
          {
            data: {
              userId: userId,
              postId: postId
            }
          }
        );
        
  
        console.log(response);
       
  
        if (response.data.status === true) {
          setLikes(0)
          // window.alert(response.data.message);
          // window.location.reload();
        } else {
          window.alert(response.data.message);
        }
      } catch (error) {
        console.log("70")
        console.error(error);
      }
    }
    // Perform any other like-related operations using the `postId` if needed
    console.log(postId);
  };


  const handleComment = async () => {
    console.log(postId)
    if (commentInput) {
      setComments([...comments, commentInput]);
      setCommentInput('');
  
      try {
        const response = await axios.post(
          'https://travel-cg48.onrender.com/user/post/comment/add',
          {
            userId: userId,
            postId: postId,
            comment: commentInput,
          }
        );
  
        console.log(response);
        console.log(response.data.status);
  
        if (response.data.status === true) {
          window.alert(response.data.message);
          // window.location.reload();
        } else {
          window.alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  const handleCommentshow=(postId)=>{
    console.log(postId)
    setCommentModel(true)

  }
  const handleCommentclose=()=>{

    setCommentModel(false)

  }
    const handleShare = () => {
      setIsShareModalOpen(true);
    };
  
    const handleCloseShareModal = () => {
      setIsShareModalOpen(false);
    };
  
    const handleWhatsAppShare = () => {
      const shareUrl = `whatsapp://send?text=Check out this post!`;
      window.open(shareUrl);
      handleCloseShareModal();
    };
  
    const handleInstagramShare = () => {
      const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`;
      window.open(shareUrl);
      handleCloseShareModal();
    };
  
    return (
      <div>
      <div >
      <div>
   
   


   
        <button onClick={handleLike}><FcLike/> ({likes})</button>
        <button onClick={handleCommentshow}>Comments</button>
        <button onClick={handleShare}><FaShareAlt/></button>
      </div>
  
  </div>
  {commentModel &&(
    <div>
        <input
         type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleCommentclose}><GiCancel/></button>
        {comments.length > 0 && (
          <div>
            <h4>Comments:</h4>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        )}
    </div>
  )}
        {isShareModalOpen && (
          <ShareModal
            onWhatsAppShare={handleWhatsAppShare}
            onInstagramShare={handleInstagramShare}
            onClose={handleCloseShareModal}
          />
        )}
      </div>
    );
  };

  const ShareModal = ({ onWhatsAppShare, onInstagramShare, onClose }) => {
    return (
      <div className="modal">
        <h3>Share Options</h3>
        <button onClick={onWhatsAppShare}><BsWhatsapp/></button>
        <button onClick={onInstagramShare}><BsInstagram/></button>
        <button onClick={onClose}><GiCancel/></button>
      </div>
    );
  };
  export default Photo;
  
// import { FcLike } from 'react-icons/fc';
// import { BsWhatsapp,BsInstagram } from 'react-icons/bs';

// import { GiCancel } from 'react-icons/gi';
// import { FaShareAlt } from 'react-icons/fa';
// import Styles from "./comment.module.css"
// import axios from "axios"

// const Photo = ({ postId }) => {
//   const [likes, setLikes] = useState(0);
//   const [isShareModalOpen, setIsShareModalOpen] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [commentInput, setCommentInput] = useState('');
//   const [commentModel, setCommentModel] = useState(false);

//   const userId = localStorage.getItem('userId');

//   const handleLike = async() => {
//     if (likes === 0) {
//       setLikes(likes+1)
//       try {
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
//           window.alert(response.data.message);
//           // window.location.reload();
//         } else {
//           setLikes(0)
//           window.alert(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       try {
//         const response = await axios.post(
//           'https://travel-cg48.onrender.com/user/post/like/remove',
//           {
//             userId: userId,
//             postId: postId,
          
//           }
//         );
  
//         console.log(response);
//         console.log(response.data.status);
  
//         if (response.data.status === true) {
//           window.alert(response.data.message);
//           // window.location.reload();
//         } else {
//           window.alert(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     // Perform any other like-related operations using the `postId` if needed
//     console.log(postId);
//   };


//   const handleComment = async () => {
//     console.log(postId)
//     if (commentInput) {
//       setComments([...comments, commentInput]);
//       setCommentInput('');
  
//       try {
//         const response = await axios.post(
//           'https://travel-cg48.onrender.com/user/post/comment/add',
//           {
//             userId: userId,
//             postId: postId,
//             comment: commentInput,
//           }
//         );
  
//         console.log(response);
//         console.log(response.data.status);
  
//         if (response.data.status === true) {
//           window.alert(response.data.message);
//           // window.location.reload();
//         } else {
//           window.alert(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
  
//   const handleCommentshow=(postId)=>{
//     console.log(postId)
//     setCommentModel(true)

//   }
//   const handleCommentclose=()=>{

//     setCommentModel(false)

//   }
//     const handleShare = () => {
//       setIsShareModalOpen(true);
//     };
  
//     const handleCloseShareModal = () => {
//       setIsShareModalOpen(false);
//     };
  
//     const handleWhatsAppShare = () => {
//       const shareUrl = `whatsapp://send?text=Check out this post!`;
//       window.open(shareUrl);
//       handleCloseShareModal();
//     };
  
//     const handleInstagramShare = () => {
//       const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`;
//       window.open(shareUrl);
//       handleCloseShareModal();
//     };
  
//     return (
//       <div>
//       <div >
//       <div>
   
   


   
//         <button onClick={handleLike}><FcLike/> ({likes})</button>
//         <button onClick={handleCommentshow}>Comments</button>
//         <button onClick={handleShare}><FaShareAlt/></button>
//       </div>
  
//   </div>
//   {commentModel &&(
//     <div>
//         <input
//          type="text"
//           placeholder="Add a comment..."
//           value={commentInput}
//           onChange={(e) => setCommentInput(e.target.value)}
//         />
//         <button onClick={handleComment}>Comment</button>
//         <button onClick={handleCommentclose}><GiCancel/></button>
//         {comments.length > 0 && (
//           <div>
//             <h4>Comments:</h4>
//             {comments.map((comment, index) => (
//               <p key={index}>{comment}</p>
//             ))}
//           </div>
//         )}
//     </div>
//   )}
//         {isShareModalOpen && (
//           <ShareModal
//             onWhatsAppShare={handleWhatsAppShare}
//             onInstagramShare={handleInstagramShare}
//             onClose={handleCloseShareModal}
//           />
//         )}
//       </div>
//     );
//   };

//   const ShareModal = ({ onWhatsAppShare, onInstagramShare, onClose }) => {
//     return (
//       <div className="modal">
//         <h3>Share Options</h3>
//         <button onClick={onWhatsAppShare}><BsWhatsapp/></button>
//         <button onClick={onInstagramShare}><BsInstagram/></button>
//         <button onClick={onClose}><GiCancel/></button>
//       </div>
//     );
//   };
//   export default Photo;