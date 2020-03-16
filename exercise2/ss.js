function previous()
{
  let currentImage = document.getElementById("i1");
  let imgNum = parseInt(document.getElementById("i1").value)
  if(imgNum > 1)
  {
    imgNum = imgNum - 1;
  }
  else
  {
    imgNum = 5;
  }
  currentImage.value = imgNum.toString();
  currentImage.src = "images/img" + imgNum + ".jpg";
}

function next()
{
  let currentImage = document.getElementById("i1");
  let imgNum = parseInt(document.getElementById("i1").value)
  if(isNaN(imgNum))//check for initial NaN value for i1
  {
    imgNum = 1;
  }
  if(imgNum < 5)
  {
    imgNum = imgNum + 1;
  }
  else
  {
    imgNum = 1;
  }
  currentImage.value = imgNum.toString();
  currentImage.src = "images/img" + imgNum + ".jpg";
}
