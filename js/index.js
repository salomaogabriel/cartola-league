function loadLeague(leagueTeams, currentRound) {
  let round = new Round();
  console.log(leagueTeams.teams.length);

  let teams = [];
  for (var i = 0; i < leagueTeams.teams.length; i++) {
    let team = new Team(leagueTeams.teams[i]["team_id"], currentRound);
    teams.push(team);
  }
  console.log("Round 1:");
  round.createRound(teams, 19);
}

function fetchTeamsInLeague(id, currentRound) {
  fetch("/js/leagues.json")
    .then((res) => res.json())
    .then((res) => {
      loadLeague(res[id], currentRound);
    });
}
function getCurrentRound() {
  fetch("https://api.cartola.globo.com/mercado/status")
    .then((res) => res.json())
    .then((res) => {
      fetchTeamsInLeague(0, res["rodada_atual"]);
    });
}
getCurrentRound();
