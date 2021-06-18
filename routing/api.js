
const db = require("../models");

module.exports = function(app) {
// Get routing 
    app.get("/api/workouts", (req, res) => {
        db.Fitness.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    })

    app.get("/api/workouts/range", ({}, res) => {
        db.Fitness.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
    // post routing
    app.post("/api/workouts/", (req, res) => {
        db.Fitness.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
            // console.log()
        }).catch(err => {
            res.status(400).json(err);
        });
    });
}