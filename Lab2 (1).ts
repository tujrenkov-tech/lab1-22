// 22.	Абстрактный класс Athlete с protected fitnessLevel и абстрактным train(). Интерфейс Competitor с compete(). Классы Swimmer (private laps) и Runner (private distance).
// Абстрактный класс и интерфейс
abstract class Athlete {
    protected fitnessLevel: number = 0;
    abstract train(): void;
}

interface Competitor {
    compete(): void;
}

// Классы спортсменов
class Swimmer extends Athlete implements Competitor {
    private laps: number = 0;
    
    train() {
        this.laps += 3;
        this.fitnessLevel += 2;
        console.log(`Пловец: проплыл ${this.laps} бассейнов`);
    }
    
    compete() {
        console.log("Пловец участвует в заплыве");
    }
}

class Runner extends Athlete implements Competitor {
    private distance: number = 0;
    
    train() {
        this.distance += 5;
        this.fitnessLevel += 3;
        console.log(`Бегун: пробежал ${this.distance} км`);
    }
    
    compete() {
        console.log("Бегун участвует в забеге");
    }
}

// Главная программа
const swimmer = new Swimmer();
const runner = new Runner();

[swimmer, runner].forEach(athlete => {
    athlete.train();
    athlete.compete();
});