import { useNavigate } from "react-router-dom"

const CategoryFilter = ({setCategoryFilter, categoryFilter}) => {

const navigate = useNavigate();

    return ( 
        <div className="category-filter">
           
            <select value={categoryFilter} onChange={(event)=>{setCategoryFilter(event.target.value)}}>
                <option disabled selected value="">Filter by category</option>
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push your luck</option>
                <option value="roll-and-write">Roll and write</option>
                <option value="deck-building">Deck building</option>
                <option value="engine-building">Engine building</option>
            </select>
        </div>
    )
}
 
export default CategoryFilter;