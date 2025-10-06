import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportCollibraData() {
  try {
    // Read the JSON request body
    const requestBodyPath = path.join(
      __dirname,
      "collibra_extraction_request_12092025.json"
    );
    const requestBody = JSON.parse(fs.readFileSync(requestBodyPath, "utf8"));

    // API configuration
    // const url =
    //   "https://engie-test.collibra.com/rest/2.0/outputModule/export/json?validationEnabled=false";
    // const credentials = "engie_data_map_tech_user:engiedatamap2025";
    const url =
      "https://engie.collibra.com/rest/2.0/outputModule/export/json?validationEnabled=false";
    const credentials = "engie_data_map_tech_user:engiedatamap2025";
    const encodedCredentials = Buffer.from(credentials).toString("base64");

    console.log("Making request to Collibra API...");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${encodedCredentials}`,
      },
      body: JSON.stringify(requestBody),
    });

    console.log(`Response status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorText}`
      );
    }

    const data = await response.json();

    // Save the response to a file
    const outputPath = path.join(__dirname, "collibra_export_response.json");
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log(`✅ Export successful! Response saved to: ${outputPath}`);
    console.log(`📊 Response data keys:`, Object.keys(data));

    return data;
  } catch (error) {
    console.error("❌ Error exporting Collibra data:", error.message);
    throw error;
  }
}

// Execute the function
exportCollibraData()
  .then((data) => {
    console.log("🎉 Script completed successfully");
    console.log("Data preview:", JSON.stringify(data, null, 2).slice(0, 500));
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Script failed:", error);
    process.exit(1);
  });
