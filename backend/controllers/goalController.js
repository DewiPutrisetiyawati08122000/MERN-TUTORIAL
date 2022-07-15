const getGoals = (req,res) => {
    res.status(200)
    throw new Error('Please add text field')
}

const setGoal = (req,res) => {
    if(!req.body.text){
        res.status(400).json({message: 'Please add field'})
    }

    res.status(200).json({message: 'Set Goal'})
}

const updateGoal = (req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}