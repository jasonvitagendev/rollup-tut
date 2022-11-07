import React, {useEffect, useState} from 'react';

export default () => {
    const [counter, setCounter] = useState(0);
    const [alphabet, setAlphabet] = useState('a');

    console.log(counter, alphabet);

    useEffect(() => {
        new Promise<void>((resolve) => {
            setTimeout(() => {
                setCounter(1);
                setAlphabet('b');
                resolve();
            });
        });
        // setCounter(1);
        // setAlphabet('b');
    }, []);

    return (
        <div>
            {counter} {alphabet}
        </div>
    );
};
