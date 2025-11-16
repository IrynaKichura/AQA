function myRecurssion(num) {
    if (num >= 0) {
        console.log(num);
        return myRecurssion(num - 1);
    } else {
        return true;
    }
}
myRecurssion(9);
