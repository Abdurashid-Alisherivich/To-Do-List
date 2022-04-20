import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("")

    function Increment() {
        setCount(count + 1);
    };

    function Decrement() {
        setCount(count - 1);
    };

    function reset() {
        setCount(count - count);
    };

    return (
        <div>


            <div className="card shadow-lg p-3 mb-5 bg-body rounded" >
                <div className="card-body">
                    <button
                        onClick={Increment}
                        className="btn btn-primary"
                    >
                        Increment
                    </button>
                    <h3>{count}</h3>
                    <button
                        onClick={Decrement}
                        className="btn btn-secondary"
                    >
                        Decrement
                    </button>
                    <button
                        onClick={reset}
                        className="btn btn-warning"
                    >
                        Reset
                    </button>
                    <button 
                    className='btn btn-danger'
                    onClick={() => setToggle(!toggle)}
                    >
                        Chnage Item
                    </button>
                    <br /> <br />
                    <p>Value: {value}</p>
                    <input 
                    type="text" 
                    className='form-control' 
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    />
                    {
                        toggle
                        ? <h1 className='changeItem'>
                            Infinity Study Center
                        </h1>
                        : null

                    }
                </div>
            </div>

        </div>
    );
};
export default Counter;