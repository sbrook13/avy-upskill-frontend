import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import { captureInput } from '../utils/functions'
import { postToCommentsBackend, postToRatingsBackend } from '../utils/postFeedback'
import StarRating from './StarRating'

function SkiDetails({user, selected, setSelected}) {

  const [commentForm, setShowCommentForm] = useState(false)
  const [ratingForm, setShowRatingForm] = useState(false)
  const [allComments, setAllComments] = useState([])
  const [allRatings, setAllRatings] = useState([])
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState("")

  const removeSelection = () => {
    setSelected(null)
  }

  useEffect(() => {
    const getCommentsAndRatings = () => {
      setAllComments(selected.comments)
      setAllRatings(selected.ratings)
    }
    getCommentsAndRatings()
  }, [])

  const showComments = () => {
    if (allComments[0]) {
      return allComments.map(comment => {
        return <p>{comment.feedback}</p>
      })
    }
  }
  
  const showRating = () => {
    return calculateRating()
  }

  function calculateRating() {
    const ratingsOnly = selected.ratings.map(ratingObject => { 
      return parseInt(ratingObject.rating)
    })
    const total = ratingsOnly.reduce((a,b) => {
      return a+b
    })
    const average = total/ratingsOnly.length
    return <StarRating average={average} />
  }

  // const showCommentSection = () => {
  //   return (
  //     <>
  //       {/* {showComments} */}
        
  //   )
  // }

  const showCommentForm = () => {
    setShowCommentForm(true)
    setShowRatingForm(false)
  }

  const showRatingForm = () => {
    setShowCommentForm(false)
    setShowRatingForm(true)
  }

  const showCommentSection = () => {
    setShowCommentForm(false)
    setShowRatingForm(false)
  }

  function handleCommentSubmit (e) {
    e.preventDefault()
    const userInput = {user:user.id, area:selected.id, feedback}
    console.log(userInput)
    // postToCommentsBackend(userInput)
    renderComment(userInput)
  }

  function renderComment (commentObject) {
    console.log("commentObject", commentObject)
    const newCommentAdded = allComments.push(commentObject)
    setAllComments(newCommentAdded)
    console.log("allComments", allComments)
    showComments()
  }

  function handleRatingSubmit (e) {
    e.preventDefault()
    const userInput = {user:user.id, area:selected.id, rating}
    postToRatingsBackend(userInput)
    renderRating(userInput)
  }

  function renderRating (ratingObject) {
    console.log(ratingObject)
  }

  const showUserButtons = () => {
    if (commentForm || ratingForm) {
      if(!user) {
        return <p className="bold">Login to add a comment or rating!</p>
      }
    } else {
      return (
        <section >
          <button className="button" onClick={showCommentForm}> 
            Add a Comment
          </button>
          <button className="button" onClick={showRatingForm}> 
            Add a Rating
          </button>
        </section>
      )
    }
  }

  return (
    <section className="stack-sections ski-detail-card">
      <h2>{selected.name}</h2>
      {showRating()}
      <p className="bold">Nearest City: {selected.location}</p>
      <p>{selected.description}</p>
      <section className="comment-section">
        <p className="bold">Comments</p>
        <div className="comments">
          {showComments()}
        </div>
      </section>
      { user ? showUserButtons() : null }
        
        { commentForm ?
        <>
          <form 
            className="stack-sections add-form"
            onSubmit={handleCommentSubmit}
          >
            <input type="text" name="user" value={user.id} hidden />
            <input type="text" name="area" value={selected.id} hidden />
            <label className="bold" for="feedback">Would you recommend {selected.name}? Why or why not?</label>
            <textarea 
              id="feedback" 
              rows="10" cols="30" 
              name="feedback" 
              className="text-input" 
              placeholder="ex: Parking was terrible, but the NE aspects were pure bliss!"
              onChange={(_) => captureInput(_, setFeedback)}
            />
            <button type="submit" className="button ">Submit Comment</button>
          </form>
          <button className="button back-button" onClick={showCommentSection}> 
            Back to Comments
          </button>
        </> :
        null
        }
        {ratingForm ?
        <>
          <form 
            className="stack-sections add-form"
            onSubmit={handleRatingSubmit}
          >
            <input type="text" name="user" value={user} hidden />
            <input type="text" name="area" value={selected} hidden />
            <label className="bold" for="feedback">How would you rate this area?</label>
            <select name="rating" onChange={(event) => captureInput(event, setRating)}>
              <option value="1">The Worst</option>
              <option value="2">Meh</option>
              <option value="3">Average</option>
              <option value="4">Yay</option>
              <option value="5">The Best</option>
            </select>
            <button type="submit" className="button">Submit Rating</button>
          </form>
          <button className="button" onClick={showCommentSection}> 
            Back
          </button>
        </> :
        null
        }
        
      <div className="center">
        <button className="page-number" onClick={removeSelection}>
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </button>
      </div>
    </section>
  );
}

export default SkiDetails;