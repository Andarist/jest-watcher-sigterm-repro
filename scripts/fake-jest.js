process.stdin.setRawMode(true)

const handler = () => {}

process.on('SIGTERM', handler)
process.off('SIGTERM', handler)

setInterval(() => {
    console.log('jest fake')
}, 2000)
