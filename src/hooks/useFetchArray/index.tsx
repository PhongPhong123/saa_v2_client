import { useState, useEffect } from 'react';

function useFetchArray<T>(api: string) {
    const [state, setState] = useState<T[] | []>([]);

    useEffect(() => {
        let isCancel = false;
        (async () => {
            const response = await fetch(api);
            const responseJson = await response.json();
            if (!isCancel)
                setState(responseJson);
        })()
        return () => {
            isCancel = true;
        }
    }, [api])

    return {state}
}

export default useFetchArray;