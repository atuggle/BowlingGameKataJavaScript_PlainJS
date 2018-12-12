class game {
    constructor() {
        this.throwIndex = 0
        this.totalPinsKnockedDown = []
    };

    bowl(pins) {
        this.totalPinsKnockedDown[this.throwIndex] = pins
        this.throwIndex += 1
    }

    score() {
        let totalScore = 0
        let currentIndex = 0

        for(let frame=0; frame<10; frame++) {
            totalScore += this.totalPinsKnockedDown[currentIndex] + this.totalPinsKnockedDown[currentIndex+1]
            currentIndex += 2
        }
        return totalScore
    }
}

module.exports = game