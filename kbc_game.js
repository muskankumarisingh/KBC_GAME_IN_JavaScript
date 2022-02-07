var readline=require("readline-sync")
function que_list(){
    question_arr = [
        "How many continents are there?",            
        "What is the capital of India?",            
        "NG mei kaun se course padhaya jaata hai?"
    ]
    return question_arr
    }    
var que = que_list()

////option arr
function opt_arr(){
    option_arr = [
        ["Four", "Nine", "Seven", "Eight"],
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return option_arr
}
ope = opt_arr()

/// answer
function answer_arr(){    
    ans_arr=[3, 4, 1]
    return ans_arr
} 
answer=answer_arr()


////lifeline function
function lifeline(){
    option_arr1=[["Nine","Seven"],
    ["Delhi","Chennai"],
    ["Software Engineering","Counseling"]]
    return option_arr1
}    
life=lifeline()

/////lifeline option list
function answer_arr1(){
    ans_arr =[2,1,1]
    return ans_arr
}
answer1=answer_arr1()
var count=0;
var sum=0;
for(var i=0; i<que.length; i++){
    console.log(`Que.${i+1} ${que[i]}`)
    for(var j=0; j<=ope.length; j++){
        console.log(`${j+1}`, ope[i][j])
    }
    user=readline.question("enter the answer")
    userSure=readline.question("Are You Sure About The Answer: ").toLocaleLowerCase()
    if (userSure=="no"){
        var lifeline=readline.question("Do You Want Lifeline:  ").toLocaleLowerCase()
        if (lifeline=="yes"){
            if (count<1){
                count+=1;
                for(var k=0; k<life[i].length; ++k){
                    console.log(`${k+1}`,life[i][k])
                };
                var num=readline.questionInt("Enter Your Answer: ")
                if (num==answer1[i]){
                    sum=sum+20000
                    console.log("right answer")
                    console.log("you win this",sum)
                }    
                else{
                    console.log("your answer is wrong")
                    console.log("Game over",sum)
                    break;
                }      
                }
            else{
                console.log("you can't use life line again")
                var num=readline.questionInt("enter your answer")
                if (num==answer[i]){
                    sum=sum+20000
                    console.log("right answer")
                    console.log("you win this",sum)
                }
                else{
                    console.log("your answer is wrong")
                    console.log("game over",sum)
                }

                }                     
        }else{
        var num=readline.questionInt("enter your answer: ")
        if (num==answer[i]){
            sum=sum+20000
            console.log("right answer")
            console.log("you win this",sum)
        }
        else{
            console.log("your answer is wrong")
            console.log("game over",sum)
            break;
        }
    }
}
    else{
        var num=readline.questionInt("enter your answer: ")
        if (num==answer[i]){
            sum=sum+20000
            console.log("right answer")
            console.log("you win this",sum)
        }
        else{
            console.log("your answer is wrong")
            console.log("game over",sum)
            break;
        }
    }
}
