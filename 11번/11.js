const today = new Date ();

// console.log(today);

const hr = today.getHours();

// console.log(hr);

function 인사 () {
    if (hr < 10) {
        console.log("good morning");
    } else if (hr >= 10 && hr < 18) {
        console.log("good afternoon");
    } else {
        console.log("good evening");

    }
};
인사();