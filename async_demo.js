var i, len, text;
for (i = 0, len = 100000, text = ""; i < len; i++) {
    text += i + " ";
}
document.getElementById("demo").innerHTML = text;

