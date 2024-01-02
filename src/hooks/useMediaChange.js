import { useEffect, useState } from 'react';

export default function useMediaChange(target, resolution) {
    const [isMoveble, setIsMoveble] = useState(null);
    useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width:${resolution}px)`);

        function queryHandler() {
            if (matchMedia.matches) {
                target?.classList.add('_da-active');
                setIsMoveble(true);
            } else if (target?.classList.contains('_da-active')) {
                target?.classList.remove('_da-active');
                setIsMoveble(false);
            }else{
                setIsMoveble(false);
            }
        }
        function addMediaHandler() {
            matchMedia.addEventListener('change', queryHandler);
            queryHandler();
        }
        addMediaHandler();
        
        return () => matchMedia.removeEventListener('change', queryHandler);
    }, [isMoveble, target, resolution]);

    return isMoveble;
}