let versionNum = browser.runtime.getManifest().version
document.getElementById("version").innerText = `v${versionNum}`