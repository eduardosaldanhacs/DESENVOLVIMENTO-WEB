var x = 1

while (x <= 10) {
    document.write(x + "<br />")

    if (x === 5) {
        break
    }

    x++

}

document.write("inicio <br />")
while (x <= 10) {
    document.write(x + "<br />")

    x++
    if (x === 5) {
        continue
    }

    document.write(x + "<br />")



}
document.write("fim <br />")