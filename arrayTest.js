"use strict"
let state = {
    finished: false,
    stepIndex: 0,
    open: false,
    id: 0,
    process: {
        name: '',
        acronym: '',
        description: '',
        type: 1,
        help: '',
        status: 'parametrization',
        version: '1.0',
        notifySupervisorOnEnd: false,
        notifySupervisorOnError: false,
        AssignSupervisorOnError: false,
        blockProcessExecution: false,
        supervisorTeam: [
            {
                name: 'John Smith',
                function: 'Manager'
            },
            {
                name: 'Mary Jane',
                function: 'Analyst'
            },
            ,
            {
                name: 'John Doe',
                function: 'Analyst'
            }
        ],
        step: [
            {
                order: 1,
                type: 'PPO',
                name: 'Get PPO customer data'
            },
            {
                order: 2,
                type: 'Other',
                name: 'Get PPO customer data'
            },
            {
                order: 3,
                type: 'More flow',
                name: 'Get PPO customer data'
            }
        ],
        tempStepName: '',
        tempStepType: 1
    }
}

//filter
let analystsFilter = state.process.supervisorTeam.filter(function (supervisor){
    return supervisor.function==='Analyst'
})
//filterArow
let analystsFilterA = state.process.supervisorTeam.filter( supervisor => supervisor.function==='Analyst')

//map
let analystsMap = state.process.supervisorTeam.map (function(supervisor){
    return supervisor.name + ' is a ' + supervisor.function 
})
//mapArrow
let analystsMapA = state.process.supervisorTeam.map (supervisor => supervisor.name + ' is a ' + supervisor.function)

//reduce
let stepReduce = state.process.step.reduce(function(sum, step){
    return sum + step.order
}, 0)

//Get max array value
let arr=[2,5,9,10]
maxValueInArray=Math.max.apply(null, arr)

//get max order from array step
let orderArray= state.process.step.map (function(step){
    return step.order
})
let maxOrder= Math.max.apply(null, orderArray)

console.log(maxOrder)
//console.log (analystsFilterA)
//console.log (analystsMapA)
//console.log (stepReduce)

//console.log(state)

