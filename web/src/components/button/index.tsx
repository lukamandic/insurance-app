interface ButtonProps {
    text?: string;
    type: 'edit' | 'delete';
}

export const Button = (props: ButtonProps) => {
    const { text, type, ...rest } = props
    const editButtonStyle = {
        color: '',
        padding: '5px',
        borderColor: '#bcb6d6',
        borderStyle: 'solid',
        borderWeight: '1',
        backgroundColor: '#bcb6d6',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    const deleteButtonStyle = {
        color: '',
        padding: '5px',
        borderColor: '#fa7f7f',
        borderStyle: 'solid',
        borderWeight: '1',
        backgroundColor: '#fa7f7f',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    return (
        <>
            <button { ...rest } style={props.type === 'edit' ? editButtonStyle : deleteButtonStyle}>{ text }</button>
        </>
    )
}