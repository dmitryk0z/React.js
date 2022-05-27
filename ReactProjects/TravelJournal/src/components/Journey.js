export default function Journey(props) {
    console.log(props)
    return (
        <div className="journey">
            <img src={props.travelDataItem.imageUrl} className="journey-image"/>
            <div className="journey-info">
                <img src={require(`../images/location-icon.png`)} className="journey--icon"/>
                <span className="journey--country">{props.travelDataItem.location}</span>
                <a href={props.travelDataItem.googleMapsUrl} className="journey--gmap">View on Google Maps</a>
                <h1 className="journey--title">{props.travelDataItem.title}</h1>
                <span><h5>{props.travelDataItem.startDate} - {props.travelDataItem.endDate}</h5></span>
                <p className="journey-description">{props.travelDataItem.description}</p>
            </div>
        </div>
    )
}