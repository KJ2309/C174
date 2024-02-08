AFRAME.registerComponent("createmodels",{
createModel: function(model){
    var barcodeValue = model.barcide_value;
    var modelUrl = model.model_url;
    var modelName = model.model_name;

    var scene = docuement.querySelector("a-scene");
    var marker = document.createElement("a-marker");

    marker.setAttribute("id",`marker-${modelName}`);
    marker.setAttribute("type",barcode);
    marker.setAttribute("model_name", modelName);
    marker.setAttribute("value",barcodeValue);
    marker.setAttribute("markerhandler",{});
    scene.appendChild(marker);

    if(barcodeValue === 0){
        var modelEl = docucment.createElement("a-entity");
        modelEl.setAttribute("id", `${modelName}`);
        modelEl.setAttribute("geometry",{
            primative:"box",
            width:model.width,
            height:model.height
        });
        modelEl.setAttribute("position" , model.position);
        modelEl.setAttribute("rotation" , model.rotation);
        modelEl.setattribute("material" , {
            color:model.color
        });
        marker.appendChild(modelEl)
    } else {
        var modelEl = document.createElement("a-entity");
        modelEl.setAttribute("id",`${modelName}`);
        modelEl.setAttribute("gltf-model",`url(${modelUrl})`);
        modelEl.setAttribute("scale",model.scale);
        modelEl.setAttribute("position",model.position);
        modelEl.setAttribute("rotation",model.rotation);
        marker.appendChild(modelEl)
    }
}})