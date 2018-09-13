// Formula can be found here http://www.superskinnyme.com/calculate-tdee.html

class Calculation {
    static calculateBMR(gender, age, height, weight) {
        if (gender === 'male') {
            return 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
        } else {
            return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        }
    }

    static calculateTDEE(gender, age, height, weight, activityLevel) {
        const calcBMR = Calculation.calculateBMR(gender, age, height, weight)
        
        console.log(calcBMR * activityLevel)
        
    }
}

export default Calculation;