const user = document.getElementsByTagName("strong")[2]?.innerText;
if (user == "aminulrony1999 ") {
  doJob();
}
function doJob() {
  click();
  acceptAndStart();
  doTaskAgain();
  Reload();
}
function JobsMenu() {
  var n = document.getElementsByClassName("btn-danger btn")[0]?.innerText;
  if (n != " Skip this task") {
    const Job = document.createElement("li");
    Job.innerHTML = `
  <a href="https://www.microworkers.com/jobs.php?Filter=no&Sort=NEWEST&Id_category=09">Data Collection</a>
  `;
    document.querySelector("nav ul")?.appendChild(Job);
    Job.querySelector("a")?.click();
  }
}

function click() {
  let jobsNumber = document.querySelectorAll(".jobslisthighlight").length;
  if (jobsNumber >= 3)
    document
      .querySelectorAll(".jobslisthighlight")
      [jobsNumber - 2]?.querySelector("a")
      ?.click();
  else
    document
      .querySelectorAll(".jobslisthighlight")
      [jobsNumber - 1]?.querySelector("a")
      ?.click();
}

function acceptAndStart() {
  document.querySelector('[name="CampaignId"]+button')?.click();
}

function tryagain() {
  window.location.reload(true);
}

function doTaskAgain() {
  document.querySelector(".glyphicon.glyphicon-repeat")?.click();
}
function Reload() {
  var a = document.getElementsByClassName("center")[0]?.innerText;
  if (a == 'TTVCampaign-E0028:Worker already took all positions\nHome') {
    let localTime = new Date().getSeconds();
    if (localTime < 32) {
      let reloadTime = (32 - localTime) * 1000;
      setTimeout(() => {
        tryagain();
      }, reloadTime);
    } else {
      let reloadTime = (60 - localTime + 2) * 1000;
      setTimeout(() => {
        tryagain();
      }, reloadTime);
    }
  } else {
    let localTime = new Date().getSeconds();
    if (localTime < 32) {
      let reloadTime = (32 - localTime) * 1000;
      setTimeout(() => {
        JobsMenu();
      }, reloadTime);
    } else {
      let reloadTime = (60 - localTime + 2) * 1000;
      setTimeout(() => {
        JobsMenu();
      }, reloadTime);
    }
  }
}
function sendNotificationMessage(message) {
  chrome.runtime.sendMessage({ message: message });
}

try {
  var n = document.getElementsByClassName("btn-danger btn")[0]?.innerText;
  if (n == " Skip this task") {
    sendNotificationMessage("A job is accepted !!!");
  }
} catch (error) {
  sendNotificationMessage("Error: " + error);
}
