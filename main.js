console.log("hello from js file");

function grading(marks){
    if(marks>=90){
        return "A+";
    }else if(marks>=80 && marks<90){
        return "A";
    }else{
        return "B";
    }
}


function calculateGrade(){
	marks = document.getElementById("marks").value;
	console.log(marks);
	let grade = grading(marks);
	console.log(grade);
	document.getElementById("grade").innerText = grade; 
}