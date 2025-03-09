import { useDispatch, useSelector } from "react-redux"
import { setLastPage } from "../store/slices";


export const useAnimations = () => {
  
    const animations = useSelector(state => state.animations);
    const dispatch = useDispatch();

    const onSetLastPage = (lastPage) => {
        dispatch(setLastPage(lastPage));
    }

    return {
        ...animations,
        onSetLastPage
    }
}
