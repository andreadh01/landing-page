import React, { useState } from 'react';
import Register from '../components/Register';
import Question from '../components/Question';
import questions from '../questions';

function Form() {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState({});

  function handleClick(id) {
    setAnswer({
      ...answer,
      [questions[page].answers[id].type]: questions[page].answers[id].title,
    });
    setPage((curPage) => curPage + 1);
  }

  React.useEffect(() => {
    console.log(answer);
  });

  function PageDisplay() {
    if (page === questions.length) {
      return <Register answers={answer} />;
    } else {
      return (
        <Question
          key={questions[page].id}
          title={questions[page].question}
          answers={questions[page].answers}
          handleClick={handleClick}
        />
      );
    }
  }

  return (
    <>
      <div
        className={`${
          page === questions.length ? 'bg-white' : 'bg-[#c0d9c2]'
        } md:bg-[#c0d9c2] w-screen min-h-screen`}
      >
        <img
          className="w-[150px] p-4 absolute left-0 top-0"
          src="/images/logo/logo-light.png"
          alt=""
        />
        <div className="lg:h-screen h-full flex flex-col items-center	justify-center pt-24 pb-8">
          <div className="progress-bar"></div>
          <div className="form-container">{PageDisplay()}</div>
          <div className="w-[70%] footer flex justify-end gap-10 mt-8 text-[#2d2d2a] font-bold">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((curPage) => curPage - 1);
              }}
            >
              Prev
            </button>
            <button
              disabled={page === questions.length}
              onClick={() => {
                setPage((curPage) => curPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
