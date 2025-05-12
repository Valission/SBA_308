// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    let students = []
    // 1. first figure out who are the students
    // generate an array of unique students ids
    // generate an array of students ids -> [125,125,125,132,132]
    // generate the array from submissions data then make it unique -> [125,132]
    for (let i = 0; i < LearnerSubmissions.length ; i++ ){
        let student_IDs = (LearnerSubmissions[i].learner_id)
        if(!students.includes(LearnerSubmissions[i].learner_id))
            students.push(student_IDs)
        console.log(students)        
    }
    
    let overallGrades125 = 0
    let overallPossibleGrade125 = 0
    // matches all the 125 id to each other
    for(let x = 0;students[0] ==LearnerSubmissions[x].learner_id; x++ ){
          // adds all the grades together
          let grade = LearnerSubmissions[x].submission.score
          overallGrades125 = overallGrades125 + grade
    } // add the possible grades together
    for(let z = 0; z< AssignmentGroup.assignments.length;z++){
      let possibleGrade = AssignmentGroup.assignments[z].points_possible
      overallPossibleGrade125 = overallPossibleGrade125 + possibleGrade
      
    }
    let averageGrade125 = overallGrades125 /  overallPossibleGrade125
    console.log(averageGrade125.toFixed(3))
    

    let overallGrades132 = 0
    let overallPossibleGrade132 = 0
    // matches all the 132 id to each other

    for(let x = 0; x <LearnerSubmissions.length; x++ ){
      if(students[1] ==LearnerSubmissions[x].learner_id){
      // adds all the grades together
      let grade = LearnerSubmissions[x].submission.score
      overallGrades132 = overallGrades132 + grade


}
} // add the possible grades together
for(let z = 0; z< AssignmentGroup.assignments.length;z++){
  let possibleGrade = AssignmentGroup.assignments[z].points_possible
  overallPossibleGrade132 = overallPossibleGrade132 + possibleGrade
        let averageGrade132 = overallGrades132 / overallPossibleGrade132
        console.log(averageGrade132.toFixed(3))
        
      }
      }
    
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
    // return result;
  
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
    