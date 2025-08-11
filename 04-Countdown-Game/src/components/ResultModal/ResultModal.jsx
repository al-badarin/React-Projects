import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import './ResultModal.css';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    //todo:
    // The <dialog> element allows website visitors to close the opened dialog by pressing the ESC (Escape) key on their keyboard.

    // Currently, this will not trigger the onReset function though (unlike closing the dialog with a button click).

    // To make sure that onReset gets triggered when the dialog is closed via the escape key, you should add the built-in onClose prop to the <dialog> element and bind it to the onReset prop value.*/

    //* <dialog ref={dialog} className="result-modal" onClose={onReset}>
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>{formattedRemainingTime} seconds left</strong>.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
