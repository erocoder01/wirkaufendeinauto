// Function to load body types based on selected brand, model, and year
import { apiUrl } from "../../config/apiUrl";

const api = apiUrl();

// Noch nicht fertig, diese datei ist nur für bessere übersicht wird aber nicht genutzt
export async function loadBodytypes(brandName, modelName, year) {
  if (!brandName || !modelName || !year) return;

  try {
    // Make a request to the backend to get body types for the selected brand, model, and year
    const response = await fetch(
      `${api}/carDetails/getBodyTypes/${brandName}/${modelName}/${year}`
    );
    const data = await response.json();

    if (response.ok) {
      return data.bodyTypes;
    } else {
      console.error("Error fetching body types:", data.error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching body types:", error);
    return [];
  }
}
