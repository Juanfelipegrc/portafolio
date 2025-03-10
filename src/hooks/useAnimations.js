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
        

      
        window.addEventListener('resize', setScreenWidth(window.innerWidth));

        return () => {
            window.removeEventListener('resize', setScreenWidth(window.innerWidth));
        }

    }, [window.innerWidth]);
    

    return {
        ...animations,
        onSetLastPage,
        screenWidth
    }
}
