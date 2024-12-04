let versionNum = browser.runtime.getManifest().version
const version = document.getElementById("version")
version.innerText = `v${versionNum}`
version.href = `https://github.com/chaara-dev/Dracula-News/releases/tag/v${versionNum}`