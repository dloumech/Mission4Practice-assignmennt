// function for grade calculator

$("#btnsend").click(function () {

    //assigning input values to variables
    let assign = $("#assign").val();
    let group = $("#group").val();
    let quiz = $("#quiz").val();
    let mid = $("#mid").val();
    let final = $("#final").val();
    let intex = $("#intex").val();
    let letterGrade = "";
    var result = $("#result");

    //getting weighted values
    let w_assign = .5 * parseFloat(assign);
    let w_group = .1 * parseFloat(group);
    let w_quiz = .1 * parseFloat(quiz);
    let w_mid = .1 * parseFloat(mid);
    let w_final = .1 * parseFloat(final);
    let w_intex = .1 * parseFloat(intex);

    //final % grade
    let grade = w_assign + w_group + w_quiz + w_mid + w_final + w_intex;

    //determine letter grade
    if (grade >= 94) { letterGrade = "A"; }
    else if (grade < 94 && grade >= 90) { letterGrade = "A-"; }
    else if (grade < 90 && grade >= 87) { letterGrade = "B+"; }
    else if (grade < 87 && grade >= 84) { letterGrade = "B"; }
    else if (grade < 84 && grade >= 80) { letterGrade = "B-"; }
    else if (grade < 80 && grade >= 77) { letterGrade = "C+"; }
    else if (grade < 77 && grade >= 74) { letterGrade = "C"; }
    else if (grade < 74 && grade >= 70) { letterGrade = "C-"; }
    else if (grade < 70 && grade >= 67) { letterGrade = "D+"; }
    else if (grade < 67 && grade >= 64) { letterGrade = "D"; }
    else if (grade < 64 && grade >= 60) { letterGrade = "D-"; }
    else { letterGrade = "E"; }

    //print to main page results
    let wording = 'You got a grade percentage of ' + grade + '%. This means you got a ' + letterGrade + ' in the class.'
    $("#result").html(wording)

})