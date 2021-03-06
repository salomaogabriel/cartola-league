class Round {
  constructor() {
    this.matches = [];
  }
  createRound(teams, round) {
    if (teams.length % 2 != 0) {
      teams.push("Bye");
    }
    let IsSecond = false;
    if (round >= teams.length - 1) {
      IsSecond = true;
      round -= teams.length - 1;
    }
    let halfSize = teams.length / 2;
    let teamsCopied = [...teams]; // Copy all the elements.
    teamsCopied.shift();

    let teamsSize = teamsCopied.length;

    let teamIdx = round % teamsSize;

    this.matches.push(new Match(teamsCopied[teamIdx], teams[0], IsSecond));

    for (var idx = 1; idx < halfSize; idx++) {
      let firstTeam = (round + idx) % teamsSize;
      let secondTeam = (round + teamsSize - idx) % teamsSize;

      this.matches.push(
        new Match(teamsCopied[firstTeam], teamsCopied[secondTeam], IsSecond)
      );
    }
  }
}
