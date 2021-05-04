function Avatar(props) {
    return <img
        className='avatar'
        src={props.url}
        alt={props.alt}
        width='100'
        height='100'
    />
}

export default Avatar
