///change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You really know your history! Good job!"
compliments[3]="Right on!"
compliments[4]="You're on a roll!"
compliments[5]="Nice!"
compliments[6]="Excellent!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="The landmark Supreme Court decision, Brown v. Board of Education of Topeka, ruled that racial segregation was unconstitutional in which year?"  
choice1[1]="1960"
choice1[2]="1951"
choice1[3]="1968"
choice1[4]="1954"

question[2]="Who was the minister of Mount Carmel Church who, in solidarity with the NAACP and other advocates, filed a lawsuit against the Alachua County School Board to end segregation in Gainesville schools?"
choice2[1]="Robert B. Still"
choice2[2]="Thomas A. Wright"
choice2[3]="Destin Lateef Williams"
choice2[4]="Henry Ford"

question[3]="When was this lawsuit against the Alachua County School Board filed?"
choice3[1]="1955"
choice3[2]="1961"
choice3[3]="1964"
choice3[4]="1958"

question[4]="When were all schools in Alachua County School District finally desegregated?"
choice4[1]="1965"
choice4[2]="1971"
choice4[3]="1968"
choice4[4]="1966"

question[5]="The University of Florida (UF) was originally founded as an institution for white males only. When were white females first allowed to enroll as full-time students?"
choice5[1]="1932"
choice5[2]="1955"
choice5[3]="1947"
choice5[4]="1928"

question[6]="From 1946 to 1957, 85 Black students tried to enroll at UF, but none were admitted. It wasn't until 1958 that the first Black student was admitted to UF. Who was this student?"
choice6[1]="Virgil Hawkins"
choice6[2]="Bob Smith"
choice6[3]="George Starke"
choice6[4]="Jackie Robinson"

question[7]="In 1958, George Starke was accepted to UF Law School and was the first Black student to attend UF. What precaution was taken to ensure his safety?"
choice7[1]="Due to increased threats, police officers posing as law students would escort him to class and the library."
choice7[2]="George chose to live off-campus with relatives instead of in the dormitories."
choice7[3]="When going home to Orlando for break, George was warned to avoid driving through the Ocala National Forest due to an increased KKK presence."
choice7[4]="All of the above."

question[8]="Daphne Duval Williams, also made history as Florida’s first female African-American student when she enrolled in UF’s College of Education in January 1959. What is unique about her story?"
choice8[1]="She had never lived in Florida before."
choice8[2]="She later became the Vice Principal for the all-Black Lincoln High School here in Gainesville."
choice8[3]="She was George Starke's cousin."
choice8[4]="Both C and D"

question[9]="In 1962, UF admitted six Black undergraduate students and in 1965 Stephen Mickle was the first Black student to earn his undergraduate degree from UF. Mickle became trailblazer in his future as the:"
choice9[1]="first Black county judge in Alachua County"
choice9[2]="first Black lawyer to establish a practice in Gainesville."
choice9[3]="first Black federal judge to serve in the U.S. District Court at the Northern District of Florida."
choice9[4]="All of the above."

question[10]="How was Judge Stephen Mickle recently honored in Gainesville?"
choice10[1]="The Alachua County Courthouse was renamed in his honor."
choice10[2]="The city of Gainesville threw a party in his honor."
choice10[3]="His family was given a key to the city."
choice10[4]="None of the above."

solution[1]="d"
solution[2]="b"
solution[3]="c"
solution[4]="b"
solution[5]="c"
solution[6]="c"
solution[7]="d"
solution[8]="d"
solution[9]="d"
solution[10]="a"





