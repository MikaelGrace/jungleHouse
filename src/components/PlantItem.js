import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
    return (
        <li key={id} className='jh-plant-item' >
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} onClick={handleClick} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick() {
    alert('🌟 This is my event')
}

export default PlantItem