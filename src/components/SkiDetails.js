import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function SkiDetails({user, selected, setSelected}) {

  const [commentForm, setShowCommentForm] = useState(false)
  const [ratingForm, setShowRatingForm] = useState(false)

  const removeSelection = () => {
    setSelected(null)
  }

  // const showComments = () => {
  //   if (selected.comments) {
  //     return selected.comments.map(comment => {
  //       console.log(comment)
  //       return "comment!"
  //     })
  //   }
  // }

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

  return (
    <section className="stack-sections ski-detail-card">
      <h2>{selected.name}</h2>
      <p className="bold">Nearest City: {selected.location}</p>
      <p>{selected.description}</p>
      { commentForm || ratingForm ?
        null :
        <div className="spread-buttons">
          <button className="button" onClick={showCommentForm}> 
            Add a Comment
          </button>
          <button className="button" onClick={showRatingForm}> 
            Add a Rating
          </button>
        </div>
      }
        
        { commentForm ?
        <>
          <form className="stack-sections add-form">
            <input type="text" name="user" value={user} hidden />
            <input type="text" name="area" value={selected} hidden />
            <label className="bold" for="feedback">Would you recommend {selected.name}? Why or why not?</label>
            <textarea id="feedback" rows="10" cols="30" name="feedback" className="text-input" placeholder="ex: Parking was terrible, but the NE aspects were pure bliss!"/>
            <button type="submit" className="button">Submit Comment</button>
          </form>
          <button className="button" onClick={showCommentSection}> 
            Back to Comments
          </button>
        </> :
        null
        }
        {ratingForm ?
        <>
          <form className="stack-sections add-form">
            <input type="text" name="user" value={user} hidden />
            <input type="text" name="area" value={selected} hidden />
            <label className="bold" for="feedback">How would you rate this area?</label>
            <select name="rating">
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