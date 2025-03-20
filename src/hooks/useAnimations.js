import { useDispatch, useSelector } from "react-redux"
import { setLastPage } from "../store/slices";
import { useEffect, useState } from "react";


export const useAnimations = () => {
  
    const animations = useSelector(state => state.animations);
    const dispatch = useDispatch();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const onSetLastPage = (lastPage) => {
        dispatch(setLastPage(lastPage));
    };

    useEffect(() => {
        

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
      
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [window.innerWidth]);
    

    return {
        ...animations,
        onSetLastPage,
        screenWidth
    }
}
