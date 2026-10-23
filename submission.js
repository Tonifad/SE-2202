function summarizeGrades(assignments) {
  let sum = 0;
  const count = assignments.length;

  //The late penalty is 20 percentage points per day,
  //not a percentage of the grade.
  const LATE_PENALTY_PER_DAY = 20;

  let assignment;

  for (let i = 0; i < count; i++) {
    assignment = assignments[i];
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;

      //The minimum grade allowed is 0.
      grade = grade - latePenalty >= 0 ? grade - latePenalty : 0;
    }

    sum += grade;
  }

  const lastGraded = assignment;
  return { average: sum / count, lastGraded: lastGraded.id };
}

// Example test
const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0 },
  { id: "9876", grade: 30, daysLate: 2 },
];

console.log(summarizeGrades(assignments));



/**
 * Returns a function that counts occurrences of a particular letter.
 * Capitalization is ignored only when ignoreCapitalization is true.
 */
let letterCounter = function (letter, ignoreCapitalization) {
    return function (word) {
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            let currentLetter = word[i];

            if (ignoreCapitalization) {
                if (currentLetter.toLowerCase() === letter.toLowerCase()) {
                    count++;
                }
            } else {
                if (currentLetter === letter) {
                    count++;
                }
            }
        }

        return count;
    };
};


/**
 * Creates a character with private farming and fishing skills.
 */
function makeCharacter(characterName) {
    // These variables are protected by the closure.
    let farmingSkill = 0;
    let fishingSkill = 0;

    /**
     * Increases the specified skill by 1, up to a maximum of 10.
     */
    let levelUp = function (skill) {
        if (skill === "farming" && farmingSkill < 10) {
            farmingSkill++;
        } else if (skill === "fishing" && fishingSkill < 10) {
            fishingSkill++;
        }
    };

    /**
     * Returns the level of the specified skill.
     */
    let showSkill = function (skill) {
        if (skill === "farming") {
            return farmingSkill;
        } else if (skill === "fishing") {
            return fishingSkill;
        }
    };

    return {
        name: characterName,
        levelUp,
        showSkill
    };
}




