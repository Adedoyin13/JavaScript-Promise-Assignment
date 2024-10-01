console.log('Assignment');

// CALLBACK

const prepareIngredients = (callback) => {
    setTimeout(() => {
        console.log('Ingredients Prepared!');
        callback()
    }, 2000);
}

const cookMeal = (callback) => {
    setTimeout(() => {
        console.log('Meal Cooked!');
       callback()
    }, 3000)
}

const mealReady = () => {
    setTimeout(() => {
        console.log('Meal is ready to eat!');
    }, 1000)
}

prepareIngredients(() => {
    cookMeal(() => {
        mealReady()
    })
})
 
// PROMISE

const prepareIngredients2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ingredientStatus = true;
            if (ingredientStatus) {
                const ingredient = 'Ingredients Prepared!';
                resolve(ingredient);
            } else {
                reject(new Error('Failed to Prepare Ingredients!')); 
            }
        }, 2000);
    });
};

const cookMeal2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mealStatus = true;
            if (mealStatus) {
                const meal = 'Meal Cooked!';
                resolve(meal);
            } else {
                reject(new Error('Failed to cook Meal!')); 
            }
        }, 3000); 
    });
};

const notifyMealReady = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mealReadyStatus = true;
            if (mealReadyStatus) {
                const mealReady = 'Meal is ready to eat!';
                resolve(mealReady);
            } else {
                reject (new Error ('Meal is not ready to eat!'))
            }
        }, 2000);
    });
};

prepareIngredients2().then(ingredient => {
    console.log(ingredient); 
    return cookMeal2(ingredient); 
})
.then(mealReady => {
    console.log(mealReady);
    return notifyMealReady(); 
})
.then(notification => {
    console.log(notification); 
})
.catch(error => {
    console.error('Error Preparing Meal:', error); 
});

