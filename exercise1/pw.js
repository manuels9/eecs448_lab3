function validate()
{
  password1 = document.getElementById("pw1").value;
  password2 = document.getElementById("pw2").value;
  if(password1.length < 8)
  {
    alert("Error: invalid password length!");
  }
  else if (password1 != password2)
  {
    alert("Error: passwords do not match!");
  }
}
