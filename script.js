import { Client } from "https://esm.sh/@gradio/client";

const client = await Client.connect("Xefea/animals");

document.getElementById("predictButton").onclick = async () => {
    const file = document.getElementById("imageInput").files[0];
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Predicting..."; 
    const result = await client.predict("/predict", { img: file });
    document.getElementById("result").innerText = `Prediction: ${result.data[0].label} (Confidence: ${result.data[0].confidences[0].confidence.toFixed(4)})`;
};

document.getElementById("imageInput").onchange = (e) => {
  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(e.target.files[0]);
  img.style.display = "block";
};
