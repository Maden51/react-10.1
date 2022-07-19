import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearServiceField, editService, removeService } from "../actions/actionCreators";

export default function ServiceList({toggleCancelBtn}) {
    const storedItems = useSelector(state => state.serviceList);
    const filteredItems = useSelector(state => state.serviceFilter);
    const [items, setItems] = useState(storedItems);
    const dispatch = useDispatch();

    useEffect(() => {
        const itemsToSet = filteredItems.filteredText ? filteredItems.filteredItems : storedItems;
        setItems(itemsToSet);
        return;
    }, [filteredItems, storedItems]);

    const handleRemove = id => {
        dispatch(removeService(id));
        dispatch(clearServiceField());
    }

    const handleEdit = item => {
        dispatch(editService(item.id, item.name, item.price));
        toggleCancelBtn();
    }

    return (
        <ul>
            {items.map(item => 
                <li key={item.id}>
                    <span>{item.name}</span>- <span>{item.price}</span>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleRemove(item.id)}>X</button>
                </li>
            )} 
        </ul>
    )
}