import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  const nextPerson = () =>{
    setIndex((index) => {
      let newIndex;
      if (index == people.length -1 ){
        newIndex = 0;
      }else{
        newIndex = index + 1;
      }
      return newIndex;
    });
  }
  const prevPerson = () =>{
    
    setIndex((index) => {
      let newIndex;
      if (index == 0){
        newIndex = people.length - 1;
      }else{
        newIndex = index - 1;
      }
      return newIndex;
    });
  }
  const randomPerson = () =>{
    setIndex(Math.floor(Math.random() * people.length ));
    // setIndex((index) => {
    //   let newIndex = Math.floor(Math.random() * people.length );
      
    //   return newIndex;
    // });
  }
  
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className= 'person-img'/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick ={prevPerson} >
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick ={nextPerson}>
          <FaChevronRight/>
        </button>
        <button className="random-btn" onClick ={randomPerson}>
          suprise me
        </button>
      </div>
      
    </article>
  );
  
};

export default Review;
