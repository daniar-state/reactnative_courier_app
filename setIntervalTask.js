module.exports = type => {
    if (type === 'stop') {
        global.interval && clearInterval(global.interval)
        return null
    }
    global.interval = setInterval(console.log, 5000, 'I am set Interval js task')
}
