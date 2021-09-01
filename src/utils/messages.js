const generateMessage = (username, text) => {
    return {
        username,
        text, 
        createdAt: new Date()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}