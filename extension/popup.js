let getResult = document.getElementById("get-result");
let resultSpan = document.getElementById("result");

getResult.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: appendToDOM,
    });
});

function appendToDOM() {
    let div = document.createElement("div");
    div.id = "container"

    document.getElementById("centerCol").prepend(div);

    document.getElementById("container").innerHTML = 
    `
    <div style="background-color: #CDDC39; height: 40px; text-align: center; font-size: 20px; padding: 10px">
  <span>Carbon Footprint: </span> <span id="show-result"></span>324 <span>kg</span>
    </div>
    `

    let x=document.getElementById('productDetails_techSpec_section_1')

    let y=x.firstElementChild.children

    let parameters = ["Brand", "Item model number", "Standing screen display size", "Item Weight", "Country of Origin"]

    let data = {}

    for(let i=0; i<y.length; i++) {
        if(parameters.includes(y[i].firstElementChild.innerText))
            data[y[i].firstElementChild.innerText] = y[i].lastElementChild.innerText;
    }

    data["Standing screen display size"] = data["Standing screen display size"].split(" ")[0]

    data["Item Weight"] = data["Item Weight"].split(" ")[0]

    data["Category"]="Laptop"
    data["Assembly Location"]="China"

    let p=document.getElementsByClassName("priceBlockStrikePriceString")[0].textContent
    p=p.split(" ").slice(-1)[0]
    p=parseInt(p.slice(2).replace(/,/g, ''))

    data["price"] = p

    let temp = []
    temp.push(data.Category)
    temp.push(data.Brand)
    temp.push(data["Item model number"])
    temp.push(data["Standing screen display size"])
    temp.push(data["Country of Origin"])
    temp.push(data["Item Weight"])
    temp.push(data.price)

    data_ref = { "input_data": [ { "fields": ["Category", "Brand", "Model Name/No.", "Screen Size (Inch)", "Assembly Location", "weight (kg)", "Price (MRP)"], "values": [ temp ] } ] }

    console.log(data_ref)

    //////////////////////////////////////////////

    // const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    // NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
    

    //////////////////////////////
}