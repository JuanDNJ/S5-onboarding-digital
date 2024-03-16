const Card = ({currentCardData = {}}) => {
    return (
        <article>
            {JSON.stringify(currentCardData)}
        </article>
    )
}

export default Card