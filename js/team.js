class Team {
  constructor(teamId, round) {
    this.maxRound = round;
    this.teamName = "";
    this.teamId = teamId;
    this.teamImgLink = "";
    this.teamPointsPerRound = [];
    fetch("https://api.cartola.globo.com/time/id/" + teamId)
      .then((res) => res.json())
      .then((res) => {
        this.configureTeam(res);
      });

    //fetch everything will need up to this round
  }
  configureTeam(res) {
    this.teamName = res["time"]["nome"];
    this.teamImgLink = res["time"]["url_escudo_svg"];
  }
  findPointsPerRound() {
    for (var i = 1; i < this.maxRound; i++) {
      fetch("https://api.cartola.globo.com/time/id/" + teamId + "/" + i)
        .then((res) => res.json())
        .then((res) => {
          let pointsInRoundI = res["pontos"];
          this.teamPointsPerRound.push(pointsInRoundI);
        });
    }
  }
}
