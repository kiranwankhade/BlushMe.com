import React from "react";

const Star = ({ marked, starId }) => {
    return (
      <span data-star-id={starId} className="star" >
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  };
const StarRatings   = ({ value }) =>{
 
    const [rating, setRating] = React.useState(parseInt(value) || 0);
    const [selection, setSelection] = React.useState(0);
  
    // const hoverOver = event => {
    //   let val = 0;
    //   if (event && event.target && event.target.getAttribute('data-star-id'))
    //     val = event.target.getAttribute('data-star-id');
    //   setSelection(val);
    // };
    return (
      <div>
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  };

  export default StarRatings;