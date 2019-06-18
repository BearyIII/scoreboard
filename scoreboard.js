var GameData = {
    ActivePlayer : null,
    LastDiceRoll : 0,
    Bank : {
        ownedProperties : {
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
            Boardwalk: true
        },
        ownedRailRoads : {
            Reading: true,
            Pennsylvania: true,
            BnO: true,
            ShortLine: true
        },
        HousingStock : 32,
        HotelStock : 12
    },
    Deed : {
        Mediterranean : {
            Price: 60,
            Rent:2, 
            Group: 'purple', 
            Houses: [4,10,30,90,160,250]
        },
        Baltic: {
            Price: 60,
            Rent:4,
            Group:'purple',
            Houses:[8,20,60,180,320,450]
        },
        Oriental: {
            Price: 100,
            Rent:6,
            Group: 'lightblue',
            Houses: [12,30,90,270,400,550]
        },
        Vermont: {
            Price: 100,
            Rent:6,
            Group: 'lightblue',
            Houses: [12,30,90,270,400,550]
        },
        Connecticut: {
            Price: 120,
            Rent: 8,
            Group: 'lightblue',
            Houses: [16,40,100,300,450,600]
        },
        SaintCharlesPlace: {
            Price: 140,
            Rent: 10,
            Group: 'magenta',
            Houses: [20,50,150,450,625,750]
        },
        States: {
            Price: 140,
            Rent: 10,
            Group: 'magenta',
            Houses: [20,50,150,450,625,750]
        },
        Virginia: {
            Price: 160,
            Rent: 12,
            Group: 'magenta',
            Houses: [24,60,180,500,700,900]
        },
        SaintJamesPlace: {
            Price: 180,
            Rent: 14,
            Group: 'orange',
            Houses: [28,70,200,550,750,950]
        },
        Tenessee: {
            Price: 180,
            Rent: 14,
            Group: 'orange',
            Houses: [28,70,200,550,750,950]
        },
        NewYork: {
            Price: 200,
            Rent: 16,
            Group: 'orange',
            Houses: [32,80,220,600,800,1000]
        },
        Kentucky: {
            Price: 220,
            Rent: 18,
            Group: 'red',
            Houses: [36,90,250,700,875,1050]
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
            Houses: [40,100,300,750,925,1100]
        },
        Atlantic: {
            Price: 260,
            Rent: 22,
            Group: 'yellow',
            Houses: [44,110,330,800,975,1150]
        },
        Ventnor: {
            Price: 260,
            Rent: 22,
            Group: 'yellow',
            Houses: [44,110,330,800,975,1150]
        },
        MarvinGardens: {
            Price: 280,
            Rent: 24,
            Group: 'yellow',
            Houses: [48,120,360,850,1025,1200]
        },
        Pacific: {
            Price: 300,
            Rent: 26,
            Group: 'darkgreen',
            Houses: [52,130,390,900,1100,1275]
        },
        NorthCarolina: {
            Price: 300,
            Rent: 26,
            Group: 'darkgreen',
            Houses: [52,130,390,900,1100,1275]
        },
        Pennsylvania: {
            Price: 220,
            Rent: 28,
            Group: 'darkgreen',
            Houses: [56,150,450,1000,1200,1400]
        },
        ParkPlace: {
            Price: 350,
            Rent: 35,
            Group: 'blue',
            Houses: [70,175,500,1100,1300,1500]
        },
        Boardwalk: {
            Price: 400,
            Rent: 50,
            Group: 'blue',
            Houses: [100,200,600,1400,1700,2000]
        },
        Railroad: {
            Price: 200,
            Rent: [25,50,100,200]
        },
        Utility: {
            Price: 150,
            Rent: [4,10]
        }
    },
    ColorGroup : {
        purple : {
            monopoly : 2, 
            housePrice : 50
        },
        lightblue : {
            monopoly : 3,
            housePrice : 50
        },
        magenta : {
            monopoly : 3,
            housePrice : 100
        },
        orange : {
            monopoly : 3,
            housePrice : 100
        },
        red : {
            monopoly : 3,
            housePrice : 150
        },
        yellow : {
            monopoly : 3,
            housePrice : 150
        },
        darkgreen : {
            monopoly : 3,
            housePrice : 200
        },
        blue : {
            monopoly : 2,
            housePrice : 200
        }
    }
}

function UpdateProfile(Player) {
    let id = Player.ID_Number;
    document.getElementById( 'picture' + id ).src = Player.GetPicFile();
    document.getElementById( 'playerName'+ id ).innerHTML = Player.name;
    document.getElementById( 'money' + id ).innerText = '$'+Player.money;
}


class Player {
    constructor(name, id) {
        this.name = name;
        this.ID_Number = id;
        this.profilePic = 'images/' + name + '.png';
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
            Tenessee: false,
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
            Reading: false,
            Pennsylvania: false,
            BnO: false,
            ShortLine: false
        };
        this.AddOwnedProperty = function (deedName, price){
            if(this.ownedProperties.hasOwnProperty(deedName)) {
                this.ownedProperties[deedName] = true;
                GameData.Bank.ownedProperties[deedName] = false;
                this.money -= price;
            } else {
                if(this.ownedRailRoads.hasOwnProperty(deedName)) {
                    this.ownedRailRoads[deedName] = true;
                    GameData.Bank.ownedRailRoads[deedName] = false;
                    this.money -= price;
                }
            }
        };
        this.PayRent = function (deed){
            let rent = GameData.Deed[deed].Rent;
            console.log(deed + ' rent is ' + rent);
        };
        this.GetPicFile = function () {
            return this.profilePic;
        };
    }
}
