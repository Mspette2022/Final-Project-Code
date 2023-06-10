function toggleFeature(feature) {
    console.log("Toggled feature: " + feature);
  }
  
  var temperature = 72; // Initial temperature value
  
  function increaseTemperature() {
    if (temperature < 90) {
      temperature++;
    }
    updateTemperature();
  }
  
  function decreaseTemperature() {
    if (temperature > 60) {
      temperature--;
    }
    updateTemperature();
  }
  
  function updateTemperature() {
    document.getElementById("temperature").textContent = temperature + "°F";
    
    var energyWarning = document.getElementById("energy-warning");
    energyWarning.textContent = "";
    
    if (temperature === 60 || temperature === 90) {
      energyWarning.textContent = "Energy Warning";
    }
  }
  var brightness = 50; // Initial brightness level

function updateBrightness() {
  brightness = document.getElementById("brightness-slider").value;
  
  var brightnessIndicator = document.getElementById("brightness-indicator");
  brightnessIndicator.style.width = brightness + "%";
}

function setSecurityState(state) {
    var armButton = document.getElementById("arm-button");
    var disarmButton = document.getElementById("disarm-button");
    
    if (state === "armed") {
      armButton.classList.add("active");
      disarmButton.classList.remove("active");
    } else if (state === "disarmed") {
      armButton.classList.remove("active");
      disarmButton.classList.add("active");
    }
  }

  var cameraOn = true; // Variable to track camera state

  function toggleCamera() {
    var cameraImage = document.getElementById("camera-image");
    var cameraOff = document.getElementById("camera-off");
    
    cameraOn = !cameraOn; // Toggle camera state
    
    if (cameraOn) {
      cameraImage.style.display = "block";
      cameraOff.classList.remove("show");
    } else {
      cameraImage.style.display = "none";
      cameraOff.classList.add("show");
    }
  }