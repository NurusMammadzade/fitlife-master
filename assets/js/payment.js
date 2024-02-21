	// let cardNumInput = 
	// 	document.querySelector('#cardNum') 

	// cardNumInput.addEventListener('keyup', () => { 
	// 	let cNumber = cardNumInput.value 
	// 	cNumber = cNumber.replace(/\s/g, "") 

	// 	if (Number(cNumber)) { 
	// 		cNumber = cNumber.match(/.{1,4}/g) 
	// 		cNumber = cNumber.join(" ") 
	// 		cardNumInput.value = cNumber 
	// 	} 
	// })

myCardNumber=[
    {
	   FullName:"Username"
    },
	{
	   Email:"example@gmail.com"
	},
	{
	   NameOnCard:"ExampleBank"
	},
	{
	   Address:"USA"
	},
	{
	   CreditCardNumber:"1234-5678-6789-3456"
	},
	{
	   City:"CA"
	},
	{
	   Month:"January"
	},
	{
	   Year:"2030"
	},
	{
		Cvv:"234"
	}
	  
];
Object.values(myCardNumber[4]);
const myCard = (Object.values(myCardNumber));
	// myCard = 0;
console.log(myCard)

const submit = document.querySelector(".submit_btn");
submit.addEventListener("click", Func);
function Func(){
	myCard = 29;
}
console.log(myCard)