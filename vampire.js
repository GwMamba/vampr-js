class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name

  vampireWithName(name) {
    function findVampireWithName(vampire, name) {
      if (vampire.name === name) {
        return vampire;
      }
      for (const offspring of vampire.offspring) {
        const foundVampire = findVampireWithName(offspring, name);
        if (foundVampire) return foundVampire;
      }
      return null;
    }
    return findVampireWithName(this, name);
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    function countDescendants(vampire) {
      let count = vampire.offspring.length;
      for (const offspring of vampire.offspring) {
        count += countDescendants(offspring);
      }
      return count;
    }
    return countDescendants(this);
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    function findMillenialVamps(vampire) {
      let millennialVampires = [];
      if (vampire.yearConverted > 1980) {
        millennialVampires.push(vampire);
      }
      for (const offspring of vampire.offspring) {
        millennialVampires = millennialVampires.concat(findMillenialVamps(offspring));
      }
      return millennialVampires;
    }
    return findMillenialVamps(this);
  }
}


module.exports = Vampire;

