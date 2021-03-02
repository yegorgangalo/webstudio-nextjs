export default function FilterBtnList({types, setFilter}) {

    return (
        <ul className="filtr list">
          {types && types.map((type, index) => (
            <li className="item" key={index}>
              <button type="button" className="button" onClick={() => setFilter(type)}>{type}</button>
            </li>)
          )}
        </ul>
    )
}