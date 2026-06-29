function savePlant() {

    let plantName = document.querySelector("input").value;
    let plantType = document.querySelectorAll("select")[0].value;
    let frequency = document.querySelectorAll("select")[1].value;

    if (plantName == "") {
        alert("Please enter Plant Name");
        return;
    }

    if (plantType == "Select type") {
        alert("Please select Plant Type");
        return;
    }

    if (frequency == "Select frequency") {
        alert("Please select Watering Frequency");
        return;
    }

    alert(
        "🌱 Plant Saved Successfully!\n\n" +
        "Plant : " + plantName +
        "\nType : " + plantType +
        "\nWatering : " + frequency
    );

    document.querySelector("input").value = "";
    document.querySelectorAll("select")[0].selectedIndex = 0;
    document.querySelectorAll("select")[1].selectedIndex = 0;
}

const photo = document.querySelector(".photo-box input");

photo.addEventListener("change", function () {

    if (this.files.length > 0) {
        alert("Photo Added Successfully!");
    }

});

function MarkAsWatered(){
    alert("💧 Plant marked as watered!");
}
function snooze(){
    alert("⏰ Snoozed for 1 hour!");
}