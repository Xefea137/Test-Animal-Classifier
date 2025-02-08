import { Client } from "@gradio/client";
import fs from "fs";

async function predictImage() {
    const exampleImage = fs.readFileSync("cat.jpg");
    const client = await Client.connect("Xefea/animals");
    const result = await client.predict("/predict", { 
        img: exampleImage
    });
    console.log("Prediction:", result.data[0].label);
    console.log("Confidence Scores:");
    result.data[0].confidences.forEach(conf => {
      console.log(`  ${conf.label}: ${conf.confidence}`);
    });
}

predictImage();