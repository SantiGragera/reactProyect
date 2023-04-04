import './ItemListContainer.css'

const ItemListContainer = (prop) => {
    return (
        <div className="ilc">
            <h2>{prop.greeting}</h2>
        </div>
    )
}

export default ItemListContainer