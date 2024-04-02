doJob();
function doJob() {
  click();
  acceptTask();
  doTaskAgain();
  Reload();
}
function acceptTask() {
  document.querySelector('[name="CampaignId"]+button')?.click();
}
function JobsMenu() {
  var n = document.getElementsByClassName("mw-btn danger")[0]?.innerText;
  if (n != " Skip this task") {
    const Job = document.createElement("li");
    Job.innerHTML = `
  <a style="display:none" href="https://www.microworkers.com/jobs.php?Filter=no&Sort=NEWEST&Id_category=09">Data Collection</a>
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
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/");
  const jobId = parts[parts.length - 1]; 
  console.log(jobId);
  // Create the form element
  var form = document.createElement("form");
  form.action = "/dotask/allocateposition";
  form.method = "POST";
  // Create the new input field
  var newInput = document.createElement("input");
  newInput.type = "hidden";
  newInput.name = "CampaignId";
  newInput.value = jobId;

  // Create the button element
  var button = document.createElement("button");
  button.type = "submit";
  button.className = "btn btn-primary accept-start-button";
  button.innerHTML =
    '<i class="glyphicon glyphicon-play"></i> Accept and Start';

  // Add an onclick event handler to the button
  button.onclick = function () {
    this.disabled = true;
    this.form.submit();
  };

  // Append the new input and button to the form
  form.appendChild(newInput);
  form.appendChild(button);

  // Add the form to the body of the page
  document.body.appendChild(form);

  // Add CSS styles
  var style = document.createElement("style");
  style.innerHTML = `
      .accept-start-button {
          background-color: Green;
          color: yellow;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          position: fixed;
          bottom: 200px;
          right: 20px;
      }
      .accept-start-button:hover {
          background-color: green;
      }
  `;
  document.head.appendChild(style);
  document.querySelector(".accept-start-button")?.click();
}
function acceptAndStart2() {
  //getting the job Id
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/");
  const jobId = parts[parts.length - 2] + '_HG';
  console.log(jobId);
  // Create the form element
  var form = document.createElement("form");
  form.action = "/dotask/allocateposition";
  form.method = "POST";
  // Create the new input field
  var newInput = document.createElement("input");
  newInput.type = "hidden";
  newInput.name = "CampaignId";
  newInput.value = jobId;

  // Create the button element
  var button = document.createElement("button");
  button.type = "submit";
  button.className = "btn btn-primary accept-start-button";
  button.innerHTML =
    '<i class="glyphicon glyphicon-play"></i> Accept and Start';

  // Add an onclick event handler to the button
  button.onclick = function () {
    this.disabled = true;
    this.form.submit();
  };

  // Append the new input and button to the form
  form.appendChild(newInput);
  form.appendChild(button);

  // Add the form to the body of the page
  document.body.appendChild(form);

  // Add CSS styles
  var style = document.createElement("style");
  style.innerHTML = `
      .accept-start-button {
          background-color: Green;
          color: yellow;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          position: fixed;
          bottom: 200px;
          right: 20px;
      }
      .accept-start-button:hover {
          background-color: green;
      }
  `;
  document.head.appendChild(style);
  document.querySelector(".accept-start-button")?.click();
}

function tryagain() {
  window.location.reload(true);
}

function doTaskAgain() {
  document.querySelector(".glyphicon.glyphicon-repeat")?.click();
}
function Reload() {
  var a = document.getElementsByClassName("center")[0]?.innerText;
  var b = document.getElementsByClassName("panel-body")[0]?.innerText;
  if (a == "TTVCampaign-E0028:Worker already took all positions\nHome") {
    let localTime = new Date().getSeconds();
    if (localTime < 32) {
      let reloadTime = ((32 - localTime) * 1000) + 1000;
      setTimeout(() => {
        acceptAndStart();
      }, reloadTime);
    } else {
      let reloadTime = ((60 - localTime + 2) * 1000) + 1000;
      setTimeout(() => {
        acceptAndStart();
      }, reloadTime);
    }
  } else if (b == "Task's answer(s) successfully submitted!.") {
    let localTime = new Date().getSeconds();
    if (localTime < 32) {
      let reloadTime = ((32 - localTime) * 1000) + 1000;
      setTimeout(() => {
        acceptAndStart2();
      }, reloadTime);
    } else {
      let reloadTime = ((60 - localTime + 2) * 1000) + 1000;
      setTimeout(() => {
        acceptAndStart2();
      }, reloadTime);
    }
  } else {
    let localTime = new Date().getSeconds();
    if (localTime < 32) {
      let reloadTime = ((32 - localTime) * 1000) + 1000;
      setTimeout(() => {
        JobsMenu();
      }, reloadTime);
    } else {
      let reloadTime = ((60 - localTime + 2) * 1000) + 1000;
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
  var n = document.getElementsByClassName("mw-btn danger")[0]?.innerText;
  if (n == " Skip this task") {
    sendNotificationMessage("A job is accepted !!!");
  }
} catch (error) {
  sendNotificationMessage("Error: " + error);
}
