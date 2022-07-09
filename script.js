const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "https://cloud04text.cognitiveservices.azure.com/";
const apiKey = process.env["TEXT_ANALYTICS_API_KEY"] || "d3a79275973244d79733b5d990d0f2ec";


var client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));
client.defaultLanguage = "es";


async function extraerTexto(texto) {

    const textDocumentInputLang = [
        texto
    ];

    const resultLang = await client.detectLanguage(textDocumentInputLang);

    const textDocumentInput = [
        { id: "1", language: resultLang[0].primaryLanguage.iso6391name, text: texto }
    ];

    const results = await client.extractKeyPhrases(textDocumentInput);

    document.getElementById("res").textContent = resultLang[0].primaryLanguage.name + ' ' + results[0].keyPhrases;
}

document.getElementById("boton").onclick = function() {

    extraerTexto(document.getElementById("texto").value).catch((err) => {
        console.error("The sample encountered an error:", err);
    });
};

document.getElementById("archivoboton").onclick = function() {
    let fr = new FileReader;

    fr.readAsText(document.getElementById("archivo").files[0]);

    fr.onload = function() {
        console.log(fr.result)
        extraerTexto(fr.result).catch((err) => {
            console.error("The sample encountered an error:", err);
        });
    }

};