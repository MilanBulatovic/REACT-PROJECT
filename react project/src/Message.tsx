function Message(){
    const name = 'Milan';
    if(name) {
        return <h1>Hello World {name}</h1>
    }

    return <h1>Hello World</h1>
    
}

export default Message;