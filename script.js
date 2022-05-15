// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample uses the key-phrase extraction endpoint to determine which
 * words or phrases in a document are of particular importance.
 *
 * @summary extracts key phrases from a piece of text
 */

document.getElementById("a").textContent = "aña"
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "https://cloud04text.cognitiveservices.azure.com/";
const apiKey = process.env["TEXT_ANALYTICS_API_KEY"] || "d3a79275973244d79733b5d990d0f2ec";

const documents = [
    "Me gusta la tortilla de atún",
    "Si yo tuviera una escoba"
];

async function main() {
    console.log("== Extract Key Phrases Sample ==");

    const client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

    const results = await client.extractKeyPhrases(documents);

    // for (const result of results) {
    //     console.log(`- Document ${result.id}`);
    //     if (!result.error) {
    //         console.log("\tKey phrases:");
    //         for (const phrase of result.keyPhrases) {
    //             console.log(`\t- ${phrase}`);
    //         }
    //     } else {
    //         console.error("  Error:", result.error);
    //     }
    // }

    console.log(results[0].keyPhrases[0])
    document.getElementById("a").textContent = results[0].keyPhrases[0];
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});