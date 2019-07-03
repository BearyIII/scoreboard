var GameData = {
    ActivePlayer: null,
    Players: {},
    CounterParty: null,
    LastDiceRoll: 0,
    EventSpace: {
        Go: true,
        CommunityChest: true,
        IncomeTax: true,
        Chance: true,
        JustVisiting: true,
        InJail: true,
        FreeParking: true,
        GoToJail: true,
        LuxuryTax: true
    },
    Bank: {
        ownedProperties: {
            Mediterranean: true,
            Baltic: true,
            Oriental: true,
            Vermont: true,
            Connecticut: true,
            SaintCharlesPlace: true,
            Virginia: true,
            States: true,
            SaintJamesPlace: true,
            Tenessee: true,
            NewYork: true,
            Kentucky: true,
            Indiana: true,
            Illinois: true,
            Atlantic: true,
            Ventnor: true,
            MarvenGardens: true,
            Pacific: true,
            NorthCarolina: true,
            Pennsylvania: true,
            ParkPlace: true,
            Boardwalk: true,
            Reading_RR: true,
            Pennsylvania_RR: true,
            BnO_RR: true,
            ShortLine_RR: true,
            ElectricCompany: true,
            WaterWorks: true
        },
        HousingStock: 32,
        HotelStock: 12,
        Money: 999999999999
    },
    Deed: {
        Mediterranean: {
            Price: 60,
            Rent: 2,
            Group: 'purple',
            Houses: [4, 10, 30, 90, 160, 250]
        },
        Baltic: {
            Price: 60,
            Rent: 4,
            Group: 'purple',
            Houses: [8, 20, 60, 180, 320, 450]
        },
        Oriental: {
            Price: 100,
            Rent: 6,
            Group: 'lightblue',
            Houses: [12, 30, 90, 270, 400, 550]
        },
        Vermont: {
            Price: 100,
            Rent: 6,
            Group: 'lightblue',
            Houses: [12, 30, 90, 270, 400, 550]
        },
        Connecticut: {
            Price: 120,
            Rent: 8,
            Group: 'lightblue',
            Houses: [16, 40, 100, 300, 450, 600]
        },
        SaintCharlesPlace: {
            Price: 140,
            Rent: 10,
            Group: 'magenta',
            Houses: [20, 50, 150, 450, 625, 750]
        },
        States: {
            Price: 140,
            Rent: 10,
            Group: 'magenta',
            Houses: [20, 50, 150, 450, 625, 750]
        },
        Virginia: {
            Price: 160,
            Rent: 12,
            Group: 'magenta',
            Houses: [24, 60, 180, 500, 700, 900]
        },
        SaintJamesPlace: {
            Price: 180,
            Rent: 14,
            Group: 'orange',
            Houses: [28, 70, 200, 550, 750, 950]
        },
        Tennessee: {
            Price: 180,
            Rent: 14,
            Group: 'orange',
            Houses: [28, 70, 200, 550, 750, 950]
        },
        NewYork: {
            Price: 200,
            Rent: 16,
            Group: 'orange',
            Houses: [32, 80, 220, 600, 800, 1000]
        },
        Kentucky: {
            Price: 220,
            Rent: 18,
            Group: 'red',
            Houses: [36, 90, 250, 700, 875, 1050]
        },
        Indiana: {
            Price: 220,
            Rent: 18,
            Group: 'red',
            Houses: [36, 90, 250, 700, 875, 1050]
        },
        Illinois: {
            Price: 240,
            Rent: 20,
            Group: 'red',
            Houses: [40, 100, 300, 750, 925, 1100]
        },
        Atlantic: {
            Price: 260,
            Rent: 22,
            Group: 'yellow',
            Houses: [44, 110, 330, 800, 975, 1150]
        },
        Ventnor: {
            Price: 260,
            Rent: 22,
            Group: 'yellow',
            Houses: [44, 110, 330, 800, 975, 1150]
        },
        MarvinGardens: {
            Price: 280,
            Rent: 24,
            Group: 'yellow',
            Houses: [48, 120, 360, 850, 1025, 1200]
        },
        Pacific: {
            Price: 300,
            Rent: 26,
            Group: 'darkgreen',
            Houses: [52, 130, 390, 900, 1100, 1275]
        },
        NorthCarolina: {
            Price: 300,
            Rent: 26,
            Group: 'darkgreen',
            Houses: [52, 130, 390, 900, 1100, 1275]
        },
        Pennsylvania: {
            Price: 220,
            Rent: 28,
            Group: 'darkgreen',
            Houses: [56, 150, 450, 1000, 1200, 1400]
        },
        ParkPlace: {
            Price: 350,
            Rent: 35,
            Group: 'blue',
            Houses: [70, 175, 500, 1100, 1300, 1500]
        },
        Boardwalk: {
            Price: 400,
            Rent: 50,
            Group: 'blue',
            Houses: [100, 200, 600, 1400, 1700, 2000]
        },
        Reading_RR: {
            isRailRoad: true,
            Price: 200,
            Rent: 25
        },
        Pennsylvania_RR: {
            isRailRoad: true,
            Price: 200,
            Rent: 25
        },
        BnO_RR: {
            isRailRoad: true,
            Price: 200,
            Rent: 25
        },
        ShortLine_RR: {
            isRailRoad: true,
            Price: 200,
            Rent: 25
        },
        ElectricCompany: {
            isUtility: true,
            Price: 150,
            Rent: 1
        },
        WaterWorks: {
            isUtility: true,
            Price: 150,
            Rent: 1
        }
    },
    ColorGroup: {
        purple: {
            monopoly: 2,
            housePrice: 50
        },
        lightblue: {
            monopoly: 3,
            housePrice: 50
        },
        magenta: {
            monopoly: 3,
            housePrice: 100
        },
        orange: {
            monopoly: 3,
            housePrice: 100
        },
        red: {
            monopoly: 3,
            housePrice: 150
        },
        yellow: {
            monopoly: 3,
            housePrice: 150
        },
        darkgreen: {
            monopoly: 3,
            housePrice: 200
        },
        blue: {
            monopoly: 2,
            housePrice: 200
        }
    },
    locations: ['Go', 'Mediterranean', 'CommunityChest', 'Baltic', 'IncomeTax', 'Reading_RR',
        'Oriental', 'Chance', 'Vermont', 'Connecticut', 'JustVisiting',
        'SaintCharlesPlace', 'ElectricCompany', 'States', 'Virginia',
        'Pennsylvania_RR', 'SaintJamesPlace', 'CommunityChest', 'Tennessee', 'NewYork',
        'FreeParking', 'Kentucky', 'Chance', 'Indiana', 'Illinois', 'BnO_RR',
        'Atlantic', 'Ventnor', 'WaterWorks', 'MarvinGardens', 'GoToJail',
        'Pacific', 'NorthCarolina', 'CommunityChest', 'Pennsylvania', 'ShortLine_RR',
        'Chance', 'ParkPlace', 'LuxuryTax', 'Boardwalk'
    ],
    AddPlayer(player) {

        GameData.Players[(player.name)] = player;
    },
    GetLocation: function (index) {
        return GameData.locations[index];
    },
    isBankOwned: function (deedName) {
        return GameData.Bank.ownedProperties[deedName];
    },
    isEventSpace: function (boardSpaceName) {
        return GameData.EventSpace[boardSpaceName];
    },
    BuyDeedFromBank: function (deedName) {
        let price = GameData.Deed[deedName].Price;
        GameData.ActivePlayer.AddOwnedProperty(deedName, price);
        UpdateProfile(this.ActivePlayer);
    },
    GetBaseRent: function (deedName) {
        return GameData.Deed[deedName].Rent;
    },
    FindOwner: function (deedName) {
        for (p in GameData.Players) {
            if (GameData.Players[p].isPlayerOwned(deedName)) {
                GameData.CounterParty = GameData.Players[p];
                //console.log('Found Owner of ' + deedName + ': ' + GameData.Players[p].name);
                break;
            }
        }
        return GameData.CounterParty;
    },
    IsLocationDeed: function (location) {
        if (location == 5 || location == 12 || location == 15 || location == 25 || location == 28 || location == 35) {
            return true;
        }
        let loc = GameData.GetLocation(location);
        return GameData.Deed.hasOwnProperty(loc);
    },
    RankPlayersWithReturn: function () {
        const list = [];
        let content = 'Player Ranking<br>';
        for (const p in GameData.Players) {
            list.push({
                name: GameData.Players[p].name,
                score: GameData.Players[p].calcTotalAssets()
            })
        };
        list.sort((a, b) => (a.score < b.score) ? 1 : -1);
        list.forEach(function (el, idx) {
            content += (idx + 1) + ':&nbsp' + el.name + '&nbsp;-&nbsp;' + el.score + '<br>';
        }, false);
        return content;
    },
    UpdatePlayerRanks: function () {
        let ranking = this.RankPlayersWithReturn();
        document.getElementById('PlayerRanking').innerHTML = ranking;
    }
}

function UpdateStatus(msg) {
    document.getElementById('status').innerHTML = msg;
}

function UpdateProfile(Player) {
    let id = Player.ID_Number;
    let owned = Player.GetOwnedProperties();
    document.getElementById('picture' + id).src = Player.GetPicFile();
    document.getElementById('player' + id + 'Name').innerHTML = Player.name;
    document.getElementById('money' + id).innerText = '$' + Player.money;
    document.getElementById('currentLocation' + id).innerHTML = GameData.GetLocation(Player.location);
    document.getElementById('ownedProperties' + id).innerHTML = owned;
}

function PlayerClickHandler(event) {
    console.log(window[event.target.id + 'Name'].innerHTML);
    let playerName = (window[event.target.id + 'Name'].innerHTML);
    let player = GameData.Players[playerName];
    SetActivePlayer(player);
    UpdateStatus(GameData.ActivePlayer.name + ' is active.');
}

function BuyClickHandler() {
    if (GameData.ActivePlayer !== null) {
        let activePlayerName = GameData.ActivePlayer.name;
        let loc = GameData.ActivePlayer.location;
        let boardSpaceName = GameData.GetLocation(loc);
        console.log(activePlayerName + ' is on ' + boardSpaceName);
        if (GameData.IsLocationDeed(loc)) {
            if (GameData.isBankOwned(boardSpaceName)) {
                GameData.BuyDeedFromBank(boardSpaceName);
            }
        }
    }
}

function MoveTokenClickHandler() {
    let roll = parseInt(document.getElementById('lastRoll').value);
    if (GameData.ActivePlayer !== null) {
        let player = GameData.ActivePlayer;
        if (roll >= 2 && roll <= 12) {
            GameData.LastDiceRoll = roll;
            let currentLocationName = GameData.GetLocation(GameData.ActivePlayer.location);
            let newLocationName = GameData.GetLocation((GameData.ActivePlayer.location + roll) % 40);
            UpdateStatus(player.name + ' moved from ' + currentLocationName + ' to ' + newLocationName);
            player.location = (parseInt(roll) + player.location) % 40;
            if (!GameData.isBankOwned(newLocationName) && !GameData.isEventSpace(newLocationName)) {
                let owner = GameData.FindOwner(newLocationName);
                console.log(owner.name + ' owns this property.');
            }
        } else {
            console.log('invalid roll!');
        };
        UpdateProfile(player);
    }

}

function PayRentClickHandler() {
    if (GameData.CounterParty !== null && GameData.ActivePlayer !== null) {
        let activePlayer = GameData.ActivePlayer;
        let counterParty = GameData.CounterParty;
        let deedName = GameData.GetLocation(GameData.ActivePlayer.location);
        let rent = GameData.GetBaseRent(deedName) * counterParty.GetMultiplier(deedName);
        console.log(activePlayer.name + ' ' + counterParty.name + ' ' + deedName + ' ' + rent);
        activePlayer.money -= rent;
        counterParty.money += rent;
        UpdateProfile(GameData.ActivePlayer);
        UpdateProfile(GameData.CounterParty);
        GameData.CounterParty = null;
        GameData.UpdatePlayerRanks();
    }
}

function PayBankClickHandler() {
    if (GameData.ActivePlayer !== null) {
        let player = GameData.ActivePlayer;
        let amount = parseInt(document.getElementById('payTake').value);
        player.money -= amount;
        UpdateProfile(player);
        GameData.UpdatePlayerRanks();
    }
}

function TakeBankClickHandler() {
    if (GameData.ActivePlayer !== null) {
        let player = GameData.ActivePlayer;
        let amount = parseInt(document.getElementById('payTake').value);
        player.money += amount;
        UpdateProfile(player);
        GameData.UpdatePlayerRanks();
    }
}

function TestClickHandler(event) {
    console.log(event.target.id + 'clicked');
}

function SetActivePlayer(Player) {
    if (GameData.ActivePlayer !== null) {
        document.getElementById('player' + GameData.ActivePlayer.ID_Number).style.backgroundColor = 'black';
    }
    GameData.ActivePlayer = Player;
    document.getElementById('player' + Player.ID_Number).style.backgroundColor = 'RGBA(255,255,255,.2)';
}

class Player {
    constructor(name, id) {
        this.name = name;
        this.ID_Number = id;
        this.profilePic = 'images/' + name + '.png';
        this.location = 0;
        this.money = 1500;
        this.ownedProperties = {
            Mediterranean: false,
            Baltic: false,
            Oriental: false,
            Vermont: false,
            Connecticut: false,
            SaintCharlesPlace: false,
            Virginia: false,
            States: false,
            SaintJamesPlace: false,
            Tennessee: false,
            NewYork: false,
            Kentucky: false,
            Indiana: false,
            Illinois: false,
            Atlantic: false,
            Ventnor: false,
            MarvinGardens: false,
            Pacific: false,
            NorthCarolina: false,
            Pennsylvania: false,
            ParkPlace: false,
            Boardwalk: false
        };
        this.ownedRailRoads = {
            Reading_RR: false,
            Pennsylvania_RR: false,
            BnO_RR: false,
            ShortLine_RR: false
        };
        this.ownedUtilities = {
            ElectricCompany: false,
            WaterWorks: false
        };
        this.AddOwnedProperty = function (deedName, price) {
            if (this.ownedProperties.hasOwnProperty(deedName)) {
                console.log('this.ownedproperties');
                this.ownedProperties[deedName] = true;
                GameData.Bank.ownedProperties[deedName] = false;
                this.money -= price;
            } else {
                if (this.ownedRailRoads.hasOwnProperty(deedName)) {
                    console.log('this.ownedRailRoads');
                    this.ownedRailRoads[deedName] = true;
                    GameData.Bank.ownedProperties[deedName] = false;
                    this.money -= price;
                }
            }
        };
        this.calcTotalAssets = function () {
            let totalAssets = this.money;
            const op = this.ownedProperties;
            const orr = this.ownedRailRoads;
            const ou = this.ownedUtilities;
            for (const p in op) {
                if (op[p]) {
                    totalAssets += GameData.Deed[p].Price;
                }
            };
            for (const rr in orr) {
                if (orr[rr]) {
                    // console.log(totalAssets + ", " + GameData.Deed[rr].Price);
                    totalAssets += GameData.Deed[rr].Price;
                }
            };
            for (const u in ou) {
                if (ou[u]) {
                    totalAssets += GameData.Deed[u].Price;
                }
            };
            return totalAssets;
        };
        this.GetMultiplier = function (deedName) {
            let multiplier = 1;
            if (GameData.Deed[deedName].isRailRoad) {
                let index = -1;
                for (const rr in this.ownedRailRoads) {
                    if (this.ownedRailRoads[rr]) {
                        index++;
                    }
                }
                multiplier = [1, 2, 4, 8][index];
            }

            if (GameData.Deed[deedName].isUtility) {
                let index = -1;
                for (const u in this.ownedUtilities) {
                    if (this.ownedUtilities[u]) {
                        index++;
                    }
                }
                multiplier = GameData.LastDiceRoll * [4, 10][index];
            }

            return multiplier;
        }
        this.GetOwnedProperties = function () {
            let op = this.ownedProperties;
            const orr = this.ownedRailRoads;
            const ou = this.ownedUtilities;
            const sep = ',&nbsp;';
            let results = '';
            for (const p in op) {
                if (op[p]) {
                    results += (p + sep);
                }
            }
            for (const rr in orr) {
                if (orr[rr]) {
                    results += (rr + sep);
                }
            }
            for (const u in ou) {
                if (ou[u]) {
                    results += (rr + sep);
                }
            }
            return results;
        };
        this.PayRent = function (deed) {
            let rent = GameData.Deed[deed].Rent;
            console.log(deed + ' rent is ' + rent);
        };
        this.isPlayerOwned = function (deedName) {
            let deed = this.ownedProperties[deedName];
            let rail = this.ownedRailRoads[deedName];
            let util = this.ownedUtilities[deedName];
            return deed || rail || util;
        };
        this.GetPicFile = function () {
            return this.profilePic;
        };
    }
}