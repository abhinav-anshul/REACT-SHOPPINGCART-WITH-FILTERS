import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type RatingProps = {
  rating: string;
  onClick: any;
  style: {};
};

function Rating({ rating, onClick, style }: RatingProps) {
  console.log("onclick", onClick);
  return (
    <>
      {[...Array(5)]?.map((_, index) => (
        <span onClick={() => onClick(index)} style={style} key={index}>
          {Number(rating) > index ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}

export { Rating };
