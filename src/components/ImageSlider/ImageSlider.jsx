import { useState } from 'react';
import { sculptureList } from './ImageData';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  console.log(sculptureList.length)
  function handleNextClick() {
    if(index === sculptureList.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }

  function handlePrevClick(){
    if(index < 1){
      setIndex(sculptureList.length - 1)
    }else{
      setIndex(index - 1)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handlePrevClick}>
        Prev
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
