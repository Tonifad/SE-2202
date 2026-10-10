
function createCharacter(charName, catName = null, initialSkills = [0, 0, 0]) {

    // Convert the initial skills to numbers and cap them at 10.
    let fishingSkill = Number(initialSkills[0]);
    let miningSkill = Number(initialSkills[1]);
    let farmingSkill = Number(initialSkills[2]);

    fishingSkill = fishingSkill > 10 ? 10 : fishingSkill;
    miningSkill = miningSkill > 10 ? 10 : miningSkill;
    farmingSkill = farmingSkill > 10 ? 10 : farmingSkill;

    // Increase a skill by one unless it is already at level 10.
    function levelUp(skill) {
        if (typeof this[skill] === "number" && this[skill] < 10) {
            this[skill]++;
        }
    }

    // Add all supplied items to the end of the inventory.
    function grabItems(...items) {
        this.inventory.push(...items);
    }

    // Remove only the first occurrence of the requested item.
    function dropItem(item) {
        let index = this.inventory.indexOf(item);

        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }

    // Create the character with its required properties and methods.
    let character = {
        characterName: charName,
        fishingSkill,
        miningSkill,
        farmingSkill,
        inventory: [],
        levelUp,
        grabItems,
        dropItem
    };

    // Add the cat property only when its value is not null.
    if (catName !== null) {
        character.catName = catName;
    }

    return character;
}

function describeCharacter(character) {

    // Calculate the sum of the character's three skills.
    let total = character.fishingSkill + character.miningSkill + character.farmingSkill;

    // Start the description with the character's name.
    let description = character.characterName;

    // Describe the character based on their total skill level.
    if (total < 10) {
        description += " is just starting out";
    } else {
        description += " is a skilled adventurer";
    }

    // Mention the cat only if the property exists.
    if ("catName" in character) {
        description += ` and has a cat ${character.catName}`;
    }

    description += ".";

    console.log(description);

    // Return the description for the autograder.
    return description;
}

// Test the character creation and methods.
let player = createCharacter("New Player", null);

player.levelUp("farmingSkill");
console.log(player.farmingSkill); // 1

player.grabItems("Apple", "Peach");
player.dropItem("Peach");
console.log(...player.inventory); // Apple

describeCharacter(player); // New Player is just starting out.
