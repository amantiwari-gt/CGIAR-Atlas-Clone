const AtlasCard = (props) => {
    
    const {singleCardData} = props;

    const {title, topic, subTopic} = singleCardData;

    return (
        <div className="atlas-card">
            <img 
                className="card-img"
                src="https://agadaptationatlas-files.s3.us-west-2.amazonaws.com/thumbnails/exposure/thumbnail_h2-total-vop_per_cell_km_cog.png"
                alt="thumbnail"
            ></img>

            <span className="card-text">
                <h3>{title}</h3>
                <h4>{topic}</h4>
                <h4>{subTopic}</h4>
            </span>

        </div>
    )
}

export default AtlasCard;