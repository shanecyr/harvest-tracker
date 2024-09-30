(function(){
    const config = {
        applicationName: "BookmarkletTimer",
        permalink: window.location.href
    };
    const itemId = btoa(window.location.href).replace(/[^a-zA-Z0-9]/g, "").substr(0, 24);
    let pageTitle = document.title;
    const suffixesToTrim = [" - Stanford UIT", " - Stanford Web Services"];
    
    for (let suffix of suffixesToTrim) {
        if (pageTitle.endsWith(suffix)) {
            pageTitle = pageTitle.slice(0, -suffix.length);
            break;
        }
    }
    
    const harvestScript = document.createElement("script");
    harvestScript.src = "https://platform.harvestapp.com/assets/platform.js";
    harvestScript.async = true;
    
    const configScript = document.createElement("script");
    configScript.textContent = `window._harvestPlatformConfig = ${JSON.stringify(config)};`;
    
    const timerDiv = document.createElement("div");
    timerDiv.className = "harvest-timer";
    
    document.body.appendChild(configScript);
    document.body.appendChild(harvestScript);
    document.body.appendChild(timerDiv);
    
    harvestScript.onload = function() {
        setTimeout(function() {
            timerDiv.click();
        }, 500);
    };
    
    const projectId = document.querySelector('meta[name="project-id"]')?.content;
    const taskId = document.querySelector('meta[name="task-id"]')?.content;
    
    timerDiv.dataset.item = JSON.stringify({
        id: itemId,
        name: pageTitle,
        project_id: projectId,
        task_id: taskId
    });
})();
