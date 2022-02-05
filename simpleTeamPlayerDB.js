const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    } 
  ],
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
    }
  ],
  get players() {
    if (this._players.length === 0) return undefined;
    return this._players;
  },
  get games() {
    if (this._games.length === 0) return undefined;
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 24);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Coruche', 10000000, 0);
team.addGame('Some Team', 0, 60);
team.addGame('Any Team', 0, 349);
console.log(team.players);
console.log(team.games);
