function button()
{
  let p = document.getElementById("p1");
  let s1 = document.getElementById("s1");
  let s2 = document.getElementById("s2");
  let s3 = document.getElementById("s3");
  let bRed = parseInt(document.getElementById("borderRed").value);
  let bGreen = parseInt(document.getElementById("borderGreen").value);
  let bBlue = parseInt(document.getElementById("borderBlue").value);
  let bWidth = parseInt(document.getElementById("borderWidth").value);
  let bgRed = parseInt(document.getElementById("bgRed").value);
  let bgGreen = parseInt(document.getElementById("bgGreen").value);
  let bgBlue = parseInt(document.getElementById("bgBlue").value);

  //set border colors
  if(isValidRGB(bRed, bGreen, bBlue))
  {
    p.style.borderColor = "rgb(" + bRed + ", " + bGreen + ", " + bBlue + ")";
    s1.innerText = "";
  }
  else if(!emptyField(document.getElementById("borderRed").value,
                      document.getElementById("borderGreen").value,
                      document.getElementById("borderBlue").value))
  {
    s1.innerText = "Invalid border color!";
  }

  //set border width
  if(!isNaN(bWidth) && bWidth >= 0)
  {
    p.style.borderWidth = bWidth + "px";
    s2.innerText = "";
  }
  else if(!emptyField(document.getElementById("borderWidth").value))
  {
    s2.innerText = "Invalid width!"
  }

  //set background colors
  if(isValidRGB(bgRed, bgGreen, bgBlue))
  {
    p.style.backgroundColor = "rgb(" + bgRed + ", " + bgGreen + ", " + bgBlue + ")";
    s3.innerText = "";
  }
  else if(!emptyField(document.getElementById("bgRed").value,
                      document.getElementById("bgGreen").value,
                      document.getElementById("bgBlue").value))
  {
    s3.innerText = "Invalid background color!";
  }
}

function emptyField(a, b = "", c = "")
{
  return(a == "" && b == "" && c == "");
}

function isValidRGB(r, g, b)
{
  return(!isNaN(r) && !isNaN(g) && !isNaN(b) && inRange(r) && inRange(g) && inRange(b));
}

function inRange(n)
{
  return(0 <= n && n <= 255);
}
