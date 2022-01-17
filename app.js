
// Educational Details
    scores=["8.75 CGPA","96.7%","9.8 CGPA"]
    function retriveScore(index,score_area)
    {
        document.getElementById(score_area).innerHTML=scores[index];
    }
// Technical Stack

        check=[false,false,false,false];
        array=[["Java","Python","C++","Php","C"],["Angular","CSS","HTML","JavaScript"],["Telugu","English","Hindi"],["Oracle","MySQL"]];
        function clicking(index,placeID)
        {
            check[index]=!check[index];
            if(check[index]){
                output="<div style='border:1px solid;'><ul>";
                for(let i of array[index])
                {
                    output+="<li>"+i+"</li>";
                }
                output+="</ul></div>";
                document.getElementById(placeID).innerHTML=output;}
            else{
                document.getElementById(placeID).innerHTML="";
            }
        }