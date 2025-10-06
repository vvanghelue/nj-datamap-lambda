import { getExtractAllRequest } from "./get-extract-all-request.js";

export const getAllDomains = async () => {
  // API configuration
  // const url =
  //   "https://engie-test.collibra.com/rest/2.0/outputModule/export/json?validationEnabled=false";
  // const credentials = "engie_data_map_tech_user:engiedatamap2025";

  const url =
    "https://engie.collibra.com/rest/2.0/outputModule/export/json?validationEnabled=false";
  const credentials = "engie_data_map_tech_user:engiedatamap2025";
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  const communityId = "0198f0ed-308d-7461-baf5-146f7acf8ff6";

  console.log("Making request to Collibra API...");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${encodedCredentials}`,
    },
    body: JSON.stringify(
      getExtractAllRequest({
        communityId,
      })
    ),
  });

  const data = await response.json();
  return data;
};
