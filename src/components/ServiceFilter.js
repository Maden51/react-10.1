import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { filterService } from "../actions/actionCreators";

export default function ServiceFilter() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.serviceList);
    const [filterValue, setFilterValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(filterService(items, value));
        setFilterValue(value);
    }
    
    return (
        <div>
            <input placeholder="Поиск" value={filterValue} onChange={handleChange} />
        </div>
    )
}