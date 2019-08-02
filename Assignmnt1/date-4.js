
var date = new Date()
console.log(date.toString())
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month = monthNames[date.getMonth()]
console.log(date.getDate()+"-"+month+ "-"+ date.getFullYear())