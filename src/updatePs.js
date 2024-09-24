const fs = require("fs");
const path = require("path");

// Load the carData.json file
const carDataPath = path.join(__dirname, "carData.json");
const carData = require(carDataPath);

// Function to extract horsepower from the engine field
function extractPowerHp(engine) {
  const powerMatch = engine.match(/\((\d+)\s?PS\)/); // Extract power in PS from engine field
  return powerMatch ? powerMatch[1] : null;
}

// Iterate through all brands and models in the carData
carData.brands.brand.forEach((brand) => {
  brand.models.model.forEach((model) => {
    model.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        // Check if powerHp is missing and the fuel type is Elektrizität (electric)
        if (mod.fuel === "Elektrizität" && !mod.powerHp) {
          const extractedPowerHp = extractPowerHp(mod.engine);
          if (extractedPowerHp) {
            // Update the mod with the extracted powerHp
            mod.powerHp = extractedPowerHp;
            console.log(
              `Updated ${brand.name} ${model.name} (${mod.engine}): PowerHp set to ${extractedPowerHp}`
            );
          }
        }
      });
    });
  });
});

// Save the updated carData back to carData.json
fs.writeFile(carDataPath, JSON.stringify(carData, null, 2), (err) => {
  if (err) {
    console.error("Error saving updated carData:", err);
  } else {
    console.log("carData.json has been updated successfully.");
  }
});
