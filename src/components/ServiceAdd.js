import { useDispatch, useSelector } from "react-redux";
import { addService, changeServiceField, clearServiceField, updateService } from "../actions/actionCreators";

export default function ServiceAdd({toggleCancelBtn}) {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item.id) {
            dispatch(updateService(item.id, item.name, item.price));
            dispatch(clearServiceField());
            toggleCancelBtn();
        } else if (item.name && item.price) {
            dispatch(addService(item.name, item.price))
            dispatch(clearServiceField());
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch(changeServiceField(name,value))
    }

    const handleReset = () => {
        dispatch(clearServiceField());
        toggleCancelBtn();
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <input name="name" onChange={handleChange} value={item.name} required />
            <input name="price" onChange={handleChange} value={item.price} required />
            <button type="submit">Save</button>
            <button type="reset" className="btn-reset">Cancel</button>
        </form>
    )
}