
export const GifGridItem = ({ title, url, isShown}) => {

    if(!isShown){
        return '';
    }
    
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
