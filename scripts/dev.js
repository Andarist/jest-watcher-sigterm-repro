const spawnCommand = require("spawn-command")

const test = spawnCommand("yarn watch", {
  stdio: "inherit"
})

setTimeout(() => {
  test.kill("SIGTERM")
}, 3000)
