import React, { useReducer } from 'react';
import { colorReducer, initialState } from '../../reducers/colorReducer';
import { ACTIONS } from '../actions/ACTIONS';

function App() {
  const [state, dispatch] = useReducer(colorReducer, initialState)
  const { current, after, before } = state;

  return (
    <>
      <button
        onClick={() => dispatch({ type: ACTIONS.UNDO })}
        disabled={!before.length}
      >
        undo
    </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.REDO })}
        disabled={!after.length}
      >
        redo
    </button>
      <input
        type="color"
        data-testid="color-input"
        value={current}
        onChange={({ target }) =>
          dispatch({ type: ACTIONS.RECORD, payload: target.value })
        }
      />
      <div
        data-testid="color-display"
        style={{
          backgroundColor: current,
          width: "10rem",
          height: "10rem",
        }}
      ></div>
    </>
  );
};

export default App;