/*********************************************************************************
*  WEB322 – Test3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites, GPT) or distributed to other students.
* 
*  Name: Taehwa Hong
* Student ID: 132546227
* Date: Feb 24, 2024
*
********************************************************************************/ 

function loadAllData() {
  var inputValue = $("#inputValue").val();

  $.ajax({
      type: "GET",
      url: "data.json",
      dataType: "json",
      success: function (data) {
          var jsonData = { "userInput": inputValue, "externalData": data };

          var jsonString = JSON.stringify(jsonData, null, 2);
          $("#jsonResult").text(jsonString);
      },
      error: function () {
          $("#jsonResult").text("Error loading JSON data.");
      }
  });
}

function loadDataByID() {
  var inputValue = $("#inputValue").val();

  $.ajax({
      type: "GET",
      url: "data.json",
      dataType: "json",
      success: function (data) {
          var filteredData = data.filter(item => item.id == inputValue);

          if (filteredData.length > 0) {
              var jsonData = { "userInput": inputValue, "filteredData": filteredData };
              var jsonString = JSON.stringify(jsonData, null, 2);
              $("#jsonResult").text(jsonString);
          } else {
              $("#jsonResult").text("No matching data found.");
          }
      },
      error: function () {
          $("#jsonResult").text("Error loading JSON data.");
      }
  });
}
