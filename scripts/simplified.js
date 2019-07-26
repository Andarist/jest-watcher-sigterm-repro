const spawnCommand = require("spawn-command")

const test = spawnCommand("node ./scripts/fake-jest.js", {
    stdio: "inherit"
})

setTimeout(() => {
    test.kill("SIGTERM")
}, 3000)
