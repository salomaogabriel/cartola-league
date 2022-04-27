class Match {
  constructor(teamOne, teamTwo, isSecond) {
    if (isSecond) {
      this.homeTeam = teamTwo;
      this.awayTeam = teamOne;
    } else {
      this.homeTeam = teamOne;
      this.awayTeam = teamTwo;
    }

    console.log(
      "Game: " + this.homeTeam.teamName + " VS " + this.awayTeam.teamName
    );
  }
}
