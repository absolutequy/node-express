var courses= [
    {
        title: "Raspberry cake",
        cost: 50
    },
    {
        title: "Artchoke",
        cost: 20
    },
    {
        title: "Burger",
        cost: 100
    }

]

exports.showCourses = (req, res)=>{
    res.render("courses", {offeredCourses:courses});
}

exports.showSignUp = (req, res)=>{
    res.render("contact")
}

exports.postedSignUpForm = (req, res)=>{
    res.render("thanks")
}

exports.showIndex = (req, res) =>{
    res.render("index")
}