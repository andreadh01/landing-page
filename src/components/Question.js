import React from 'react';
import Card from './Card';

function Question(props) {
  return (
    <div className="flex flex-col content-center justify-center my-auto">
      <div className="p-4">
        <h1 className="text-center font-bold text-2xl lg:text-4xl my-4 text-[#4c4c47]">
          {props.title}
        </h1>
      </div>
      <div className="flex md:flex-row flex-wrap flex-col lg:justify-evenly justify-center content-center gap-10">
        {props.answers.map((answer) => {
          return (
            <Card
              key={answer.id}
              clicked={props.handleClick}
              id={answer.id}
              url={answer.url}
              title={answer.title}
              description={answer.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Question;
