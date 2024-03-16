

const ChangeStep = ({children = 'Next' , action = () => {}}) => {

    return (
        <button onClick={action}>
            {children}
        </button>
    )
}

export default ChangeStep